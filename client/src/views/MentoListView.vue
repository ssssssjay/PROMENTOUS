<template>
  <div>
    <div class="banner">
      <div class="comment container">
        <p class="title">멘토링</p>
        <p class="des">보다 좋은 개발자가 되기 위한 또 하나의 단계</p>
      </div>
    </div>
    <div class="container">
      <div class="search">
        <PartSearchLayout class="partSearch" />
        <input
          id="search"
          type="text"
          class="form-control"
          placeholder="제목,내용,작성자로 검색해보세요!"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          v-model="searchData" />
      </div>
      <div class="button" style="margin: 10px">
        <button type="button" class="btn btn-secondary" id="appBtn">
          멘토 등록 신청하기
        </button>
      </div>
      <div class="row mt-n4">
        <div
          id="card1"
          class="card mb-3 mentoList"
          :key="mento.mentoCode"
          v-for="mento in mentoList">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body" style="width: 450px">
                <span class="mentoNickName">{{ mento.NickName }}</span>
                <i class="bi bi-star-fill" id="star"></i>
                <span class="mentoScore">{{ mento.score }}</span>
                <span>({{ mento.scoreCount }})</span>
                <p class="card-title">{{ mento.title }}</p>
                <p class="card-text" style="height: 70px">
                  {{ mento.comment }}
                </p>
                <div
                  class="mentoPart"
                  :key="part.code"
                  v-for="part in mentoList[mento.mentoCode].part"
                  style="display: inline">
                  <button class="partName">{{ part.name }}</button>
                </div>
                <span v-show="mento.part.length > 3"
                  >+{{ mento.part.length - 3 }}</span
                >
              </div>
            </div>
            <div class="men_title col-md-4" id="imgcard">
              <img
                v-if="mento.gender === 'female'"
                src="@/img/femaleAvatar.svg"
                class="img-fluid rounded-start"
                alt="..."
                id="pfimg" />
              <img
                v-if="mento.gender === 'male'"
                src="@/img/maleAvatar.svg"
                class="img-fluid rounded-start"
                alt="..."
                id="pfimg" />

              <button class="btn btn-outline-dark" id="mentoDetail">
                멘토 상세보기
              </button>
            </div>
          </div>
        </div>
        <div class="pagination">
          <PaginationLayout />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PaginationLayout from "@/components/layouts/PaginationLayout.vue";
import PartSearchLayout from "@/components/layouts/PartSearchLayout.vue";

export default {
  components: {
    PartSearchLayout,
    PaginationLayout
  },
  data() {
    return {
      searchData: "",
      mentoList: [
        {
          mentoCode: "0",
          gender: "male",
          NickName: "EVELO",
          score: 3.5,
          scoreCount: 13,
          title: "10년차 웹개발자의 코드 리뷰 및 컨설팅",
          comment:
            "오늘 내가 만든 프로그램이 누군가에게 도움을 줄 수 있다는 사실에서 동기를 얻습니다. 아이디어가 제 손을 통해 현실화되고, 그렇게 현실화된 프로덕트를 통해.......",
          part: [
            { code: "1", name: "프론트엔드" },
            { code: "2", name: "디자인" }
          ]
        },
        {
          mentoCode: "1",
          gender: "female",
          NickName: "가나다라",
          score: 4,
          scoreCount: 12,
          title: "파이썬를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "UI/ UX" },
            { code: "2", name: "기획" }
          ]
        },
        {
          mentoCode: "2",
          gender: "male",
          NickName: "가나다라마바사",
          score: 4,
          scoreCount: 12,
          title: "파이썬을 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "데이터베이스" },
            { code: "2", name: "데이터사이언스" }
          ]
        },
        {
          mentoCode: "3",
          gender: "male",
          NickName: "가나다라마",
          score: 4,
          scoreCount: 12,
          title: "파이썬을 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "데이터베이스" },
            { code: "2", name: "데이터사이언스" }
          ]
        },
        {
          mentoCode: "4",
          gender: "female",
          NickName: "가나다라마",
          score: 4,
          scoreCount: 12,
          title: "파이썬을 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "자바스크립트" }
          ]
        },
        {
          mentoCode: "5",
          gender: "male",
          NickName: "가나다라마",
          score: 4,
          scoreCount: 12,
          title: "파이썬을 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "자바스크립트" },
            { code: "3", name: "데이터사이언스" },
            { code: "4", name: "데이터베이스" }
          ]
        },
        {
          mentoCode: "6",
          gender: "female",
          NickName: "가나다라마",
          score: 4,
          scoreCount: 12,
          title: "파이썬을 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "자바스크립트" }
          ]
        }
      ]
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
};
</script>
<style scoped>
.title {
  font-size: 40px;
}
.des {
  font-size: 25px;
}
.banner {
  margin: 0;
  width: 100vw;
  height: 200px;
  background-color: #1379d2;
}
.comment {
  text-align: left;
  padding-top: 50px;
  color: white;
  font-weight: 900;
}
.banner .title {
  font-size: 70px;
}

h1 {
  font-weight: 700;
}
h3 {
  margin: 15px;
  text-align: left;
  font-weight: 700;
}
.button {
  margin-top: 15px;
  position: relative;
  bottom: 50px;
  left: 560px;
}
#search {
  width: 300px;
  position: relative;
  left: 760px;
  bottom: 55px;
}
.search {
  position: relative;
  left: 230px;
  top: 100px;
}
.partSearch {
  position: relative;
  right: 55px;
}
.mentoPart {
  position: relative;
  text-align: start;
}
.mentoPart > button {
  border-radius: 5px;
  border-style: none;
}
.mentoNickName {
  margin: 10px 10px 10px 0px;
  font-size: 35px;
  font-style: bold;
}
.partName {
  background-color: #1379d2;
  color: white;
}
#card1 {
  margin-right: 10px;
  text-align: start;
  width: 650px;
  height: 250px;
}
.mentoList {
  transition: all 0.3s;
}
.mentoList:hover {
  transform: translateY(-4px);
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.card-title {
  font-size: 20px;
}
.card-text {
  font-size: 13px;
}
#imgcard {
  position: relative;
  left: 60px;
  margin-top: 30px;
}
#pfimg {
  width: 150px;
}
.pagination {
  position: relative;
  left: 550px;
}
#star {
  color: #1379d2;
  margin-right: 6px;
}
#mentoDetail,
#appBtn {
  border-color: black;
}
#mentoDetail {
  margin: 15px 10px;
}
</style>
