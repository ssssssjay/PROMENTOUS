<template>
  <div class="container">
    <div class="tap">
      <h3><strong>My Page </strong></h3>
      <router-link to="/mypage/info" class="link-dark" id="link"
        >내 정보</router-link
      >
      <router-link to="/mypage/post" class="link-dark" id="link"
        >내 글 모아보기</router-link
      >
      <router-link to="/mypage/apply" class="link-dark" id="link"
        >스터디 & 프로젝트 신청내역</router-link
      >
      <router-link to="/mypage/pay" class="link-dark" id="link"
        >결제내역</router-link
      >
      <router-link to="/mypage/mento" class="link-dark" id="link"
        >멘토의 메뉴</router-link
      >
    </div>
    <div class="info">
      <h1>내 정보</h1>
      <span>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          style="width: 110px; height: auto"
          class="rounded float-start" />
        <h3 class="info1">자기소개</h3>
        <p class="info1">
          <textarea
            name=""
            id=""
            cols="60"
            rows="2"
            v-model="user.selfInfo"
            :placeholder="this.selfInfo">
          </textarea>
        </p>
      </span>
      <span
        ><button
          type="button"
          class="btn btn-outline-primary"
          @click="changeNickname"
          style="position: relative; left: 10px">
          *{{ user.nickname }}
        </button>
        <strong class="info2"
          >팀원 평판 {{ user.score }}({{ user.scoreCount }})</strong
        >
        <strong class="info2">
          멘토 평판{{ user.mentoScore }}({{ user.mentoScoreCount }})</strong
        >
      </span>
    </div>
    <div class="blank"></div>
    <div class="category">
      <div>
        로그인 계정<span>{{ user.login }}</span>
      </div>
      <div>
        관심 분야
        <div>
          <div class="under">
            <select
              name=""
              id=""
              v-model="selectedOptionList"
              class="form-select"
              multiple>
              <option
                :value="option.name"
                v-for="option in options"
                :key="option.optionCode">
                {{ option.name }}
              </option>
            </select>
          </div>
          <div class="under">
            <button
              type="button"
              class="btn btn-primary"
              v-for="(option, index) in selectedOptionList"
              :key="option">
              {{ selectedOptionList[index] }}
            </button>
          </div>
        </div>
      </div>
      <div>
        관심 스택
        <div class="under">
          <div>
            <select
              name=""
              id=""
              @change="addStack"
              v-model="selectedStackList"
              class="form-select">
              <option
                :value="stack.stackCode"
                v-for="stack in stacks"
                :key="stack.stackCode">
                {{ stack.label }}
              </option>
            </select>
          </div>
          <div>
            <select name="" id="" multiple class="form-select" size="3">
              <option
                value=""
                v-for="stack in selectedStackOption"
                :key="stack.stackCode">
                {{ stack.options.join(" ") }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div>
        소셜 정보
        <div>
          <span
            ><div class="row g-3">
              <div class="col-sm-4" id="padding">
                <input
                  type="text"
                  class="form-control"
                  placeholder="사이트 제목을 입력해주세요!"
                  aria-label="SiteName"
                  v-model="this.siteName" />
              </div>
              <div class="col-sm-6" id="padding">
                <input
                  type="url"
                  class="form-control"
                  placeholder="사이트 링크를 입력해주세요!"
                  aria-label="SiteLink"
                  v-model="this.siteLink" />
              </div>
              <div class="col-sm">
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  @click="addSite"
                  id="padding">
                  +
                </button>
              </div>
              <div class="row g-3" id="padding">
                <a :href="this.siteLink" class="col-sm-4">
                  {{ this.siteName }}</a
                >
                <a :href="this.siteLink" class="col-sm-6">
                  {{ this.siteLink }}</a
                >
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      user: {
        nickname: "닉네임",
        score: 3.5,
        scoreCount: 12,
        mentoScore: 4.5,
        mentoScoreCount: 9,
        login: "joans.dev@gmail.com",
        selfInfo:
          "현재 재직 중이시라면 맡고 계신 업무를 간략히 소개해주세요 :)",
        googleAccount: "joans.dev@gmail.com",
        social: [
          {
            blog: "https://techblog.woowahan.com/",
            github: "https://github.com/joansdev"
          }
        ]
      },
      options: [
        { optionCode: "1", name: "프론트엔드" },
        { optionCode: "2", name: "백엔드" },
        { optionCode: "3", name: "풀스택" },
        { optionCode: "4", name: "디자인" },
        { optionCode: "5", name: "UI/ UX" },
        { optionCode: "6", name: "기획" },
        { optionCode: "7", name: "PM" },
        { optionCode: "8", name: "데이터베이스" },
        { optionCode: "9", name: "알고리즘,자료구조" },
        { optionCode: "10", name: "퍼블리싱" },
        { optionCode: "11", name: "데브옵스" },
        { optionCode: "12", name: "데이터사이언스" }
      ],
      selectedOptionList: [],

      stacks: [
        {
          stackCode: "1",
          label: "프론트엔드",
          options: ["Javascript", "TypeScript", "React"]
        },
        {
          stackCode: "2",
          label: "백엔드",
          options: ["Java", "Spring", "Node.js"]
        },
        {
          stackCode: "3",
          label: "모바일",
          options: ["Flutter", "Swift", "Kotlin"]
        },
        {
          stackCode: "4",
          label: "기타",
          options: ["AWS", "Kubernetes", "Docker"]
        }
      ],
      selectedStackList: [],
      selectedStackOption: [],

      siteName: "",
      siteLink: "",
      siteList: []
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeNickname() {
      this.user.nickname = prompt("변경할 닉네임을 입력하세요.");
    },
    addStack() {
      this.selectedStackOption = this.stacks.filter(
        (option) => option.stackCode === this.selectedStackList
      );
    }
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-gap: 10px;
  height: 100vh;
  grid-template-columns: 250px 100%;
  grid-template-rows: 300px 1fr 150px 1fr;
  grid-template-areas:
    "tap info info"
    "blank category category"
    "blank category category"
    "blank category category"
    "blank category category";
}
.tap {
  grid-area: tap;
}
.info {
  grid-area: info;
}
.blank {
  grid-area: blank;
}
.category {
  grid-area: category;
}

.container > div:nth-child(1) {
  padding: 20px;
  border: 1px solid #000;
  display: grid;
  border-radius: 3%;
}
.container > div:nth-child(2) {
  padding: 20px;
  border: 1px solid #000;
  display: grid;
  text-align: left;
}
.container > div:nth-child(3) {
  padding: 20px;

  display: grid;
}
.container > div:nth-child(4) {
  padding: 20px;
  border: 1px solid #000;
  display: grid;
  font-weight: bold;
  text-align: left;
  font-size: 20px;
}

.container > div:nth-child(4) > div > span {
  padding: 20px;
}

.under {
  padding: 20px;
}

#padding {
  padding: 20px;
}

.info1 {
  position: relative;
  left: 20px;
}

.info2 {
  position: relative;
  left: 70px;
}

::placeholder {
  color: gray;
  opacity: 0.7;
}

#link {
  text-decoration: none;
  font-weight: bold;
}
</style>
