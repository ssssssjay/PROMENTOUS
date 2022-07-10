<template>
  <div class="container mt-5">
    <div class="row">
      <!-- 페이지우측  -->
      <div class="col">
        <div class="content text-start">
          <!-- 글 제목 -->
          <div class="h1"><strong>내 정보</strong></div>
          <hr />
          <!-- 글 내용 상단 -->
          <div class="row mt-4">
            <div class="col-2 text-center">
              <img
                src="../assets/profile.jpg"
                alt=""
                style="width: 130px; border-radius: 15px" />
            </div>
            <div class="col-10">
              <p class="h2">자기소개</p>
              <p v-show="infoStatus">
                {{ user.selfInfo }}
              </p>
              <p v-show="editStatus">
                <textarea
                  class="form-control text-muted"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  v-model="user.selfInfo"></textarea>
              </p>
            </div>
          </div>
          <div class="mt-3" style="height: 30px">
            <p class="row" style="vertical-align: middle">
              <span class="col-2 text-center" v-show="infoStatus"
                ><strong>{{ user.nickname }}</strong></span
              >
              <span class="col-2 text-center" v-show="editStatus">
                <input
                  class="form-control text-center"
                  type="text"
                  v-model="user.nickname" /></span
              >|
              <span class="col-2 text-center"><strong>팀원평판</strong></span>
              <span class="col-2 text-start">
                <button id="bt" class="btn btn-outline-primary">
                  <i class="bi bi-star-fill pro_star_color"></i
                  >{{ user.score }}/({{ user.scoreCount }})
                </button></span
              >|
              <span class="col-2 text-center"><strong>멘토평판</strong></span>
              <span class="col-2 text-start"
                ><button id="bt" class="btn btn-outline-primary">
                  <i class="bi bi-star-fill pro_star_color"></i>
                  {{ user.mentoScore }}/({{ user.mentoScoreCount }})
                </button></span
              >
            </p>
            <hr />
          </div>
          <!-- 글 내용 하단 -->
          <div class="h5 py-3">
            <p class="row py-4 mb-5 mt-5">
              <span class="col-2 text-center"
                ><strong>로그인 계정</strong></span
              >
              <span class="col-10 text-start px-4">{{
                user.googleAccount
              }}</span>
            </p>
            <p class="row py-4 mb-4">
              <span class="col-2 text-center"><strong>관심분야</strong></span>
              <span class="col-2 px-3"
                ><button
                  type="button"
                  class="btn btn-primary m-1 mt-0"
                  v-for="(option, index) in selectedOptionList"
                  :key="option"
                  v-show="infoStatus">
                  {{ selectedOptionList[index] }}
                </button>
                <!-- <select
                  v-model="selectedOptionList"
                  class="form-select"
                  aria-label="options"
                  multiple
                  v-show="editStatus">
                  <option
                    :value="option.name"
                    v-for="option in options"
                    :key="option.optionCode">
                    {{ option.name }}
                  </option>
                </select> -->
                <PartSearchLayout v-show="editStatus"></PartSearchLayout>
              </span>
            </p>
            <p class="row py-4 mb-4">
              <span class="col-2 text-center"><strong>관심 스택</strong></span>
              <span class="col-5 px-3">
                <span
                  ><button
                    class="btn btn-primary m-1 mt-0"
                    v-for="stack in stackList"
                    :key="stack"
                    v-show="infoStatus">
                    {{ stack }}
                  </button></span
                >

                <select
                  class="form-select"
                  name=""
                  id=""
                  v-model="selectedPart"
                  @change="addStack"
                  v-show="editStatus">
                  <option
                    :value="part.partCode"
                    v-for="part in partList"
                    :key="part.partCode">
                    {{ part.partName }}
                  </option>
                </select>
              </span>
              <span class="col-5 px-3">
                <select
                  class="form-select"
                  name=""
                  id=""
                  v-model="stackList"
                  size="3"
                  multiple
                  v-show="editStatus">
                  <option
                    :value="stack.stackName"
                    v-for="stack in selectedStackList"
                    :key="stack">
                    {{ stack.stackName }}
                  </option>
                </select>
              </span>
            </p>
            <p class="row py-4 mb-0">
              <span class="col-2 text-center"><strong>소셜정보</strong></span>
              <span class="col-10 text-start" v-show="infoStatus">
                <a
                  class="px-4"
                  :href="Object.values(site)"
                  v-for="(site, index) in siteList"
                  :key="index"
                  target="_blank"
                  >{{ Object.keys(site).join() }}</a
                >
              </span>
              <span class="col-4 px-3 pt-0" v-show="editStatus">
                <input
                  type="text"
                  class="form-control text-start"
                  placeholder="사이트 제목을 입력해주세요!"
                  name=""
                  id=""
                  v-model="site.name" />
              </span>
              <span class="col-5 px-2 pt-0" v-show="editStatus">
                <input
                  type="url"
                  class="form-control text-start"
                  placeholder="사이트 링크를 입력해주세요!"
                  name=""
                  id=""
                  v-model="site.link" />
              </span>
              <span class="col-1 text-center">
                <button
                  type="button"
                  class="btn btn-outline-primary px-4"
                  @click="addSite"
                  v-show="editStatus">
                  +
                </button>
              </span>
            </p>
            <p class="row">
              <span class="col-2"></span>
              <span class="col-8 text-left"
                ><a
                  class="text-start px-4"
                  :href="Object.values(site)"
                  v-for="(site, index) in siteList"
                  :key="index"
                  target="_blank"
                  v-show="editStatus"
                  >{{ Object.keys(site).join() }}</a
                ></span
              >
            </p>
            <hr />
            <p class="text-end">
              <button
                type="button"
                class="btn btn-primary btn-lg"
                v-show="editStatus"
                @click="changeStatus1">
                {{ this.buttonStatus }}
              </button>
              <button
                type="button"
                class="btn btn-outline-primary btn-lg"
                v-show="infoStatus"
                @click="changeStatus2">
                {{ this.buttonStatus }}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PartSearchLayout from "@/components/layouts/PartSearchLayout.vue";
export default {
  components: { PartSearchLayout },
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
          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        googleAccount: "joans.dev@gmail.com"
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
      optionList: [],

      // stacks: [
      //   {
      //     stackCode: "1",
      //     label: "프론트엔드",
      //     options: ["Javascript", "TypeScript", "React"]
      //   },
      //   {
      //     stackCode: "2",
      //     label: "백엔드",
      //     options: ["Java", "Spring", "Node.js"]
      //   },
      //   {
      //     stackCode: "3",
      //     label: "모바일",
      //     options: ["Flutter", "Swift", "Kotlin"]
      //   },
      //   {
      //     stackCode: "4",
      //     label: "기타",
      //     options: ["AWS", "Kubernetes", "Docker"]
      //   }
      // ],
      partList: [
        { partCode: "01", partName: "프론트엔드" },
        { partCode: "02", partName: "백엔드" },
        { partCode: "03", partName: "모바일" },
        { partCode: "04", partName: "기타" }
      ],
      stacks: [
        { partCode: "01", stackCode: "1", stackName: "Javascript" },
        { partCode: "01", stackCode: "2", stackName: "TypeScript" },
        { partCode: "01", stackCode: "3", stackName: "React" },
        { partCode: "02", stackCode: "1", stackName: "Java" },
        { partCode: "02", stackCode: "2", stackName: "Spring" },
        { partCode: "02", stackCode: "3", stackName: "Node.js" },
        { partCode: "03", stackCode: "1", stackName: "Flutter" },
        { partCode: "03", stackCode: "2", stackName: "Swift" },
        { partCode: "03", stackCode: "3", stackName: "Kotlin" },
        { partCode: "04", stackCode: "1", stackName: "AWS" },
        { partCode: "04", stackCode: "2", stackName: "Kubernetes" },
        { partCode: "04", stackCode: "3", stackName: "Docker" }
      ],
      selectedPart: "",
      selectedStackList: [],
      stackList: [],
      value: [],

      site: { name: "", link: "" }, // site: {name:'GitHub', link:'www.github.com'}
      siteList: [], // [{GitHub:'www.github.com'}, {Naver:'www.naver.com'}, ...]
      infoStatus: true,
      editStatus: false,
      buttonStatus: "수정"
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    addStack() {
      this.selectedStackList = this.stacks.filter(
        (stack) => stack.partCode === this.selectedPart
      );
    },
    addSite() {
      let obj = {
        [this.site.name]: this.site.link
      };
      this.siteList.push(obj);
      alert("소설정보가 추가되었습니다.");
    },
    changeStatus1() {
      this.infoStatus = true;
      this.editStatus = false;
      this.buttonStatus = "수정";
    },
    changeStatus2() {
      this.infoStatus = false;
      this.editStatus = true;
      this.buttonStatus = "저장";
    }
  }
};
</script>

<style scoped>
#link {
  text-decoration-line: none;
}

#bt {
  margin-bottom: 50%;
}
</style>
