<template>
  <div>
    <!-- 배너 -->
    <!-- ---------------------------------------------------------------------------------------------- -->
    <section class="banner">
      <div class="comment container">
        <h1 class="title">멘토링</h1>
        <p class="des">보다 좋은 개발자가 되기 위한 또 하나의 단계</p>
      </div>
    </section>
    <!-- 카드리스트 -->
    <!-- ---------------------------------------------------------------------------------------------- -->
    <section class="container">
      <div class="Regbtn">
        <registerbtn-layout
          :btnText="btnText"
          @click="goToMenu('/mentorregister')" />
      </div>
      <div
        class="d-flex pt-5 mb-4 align-items-start justify-content-between section_second">
        <RecruitSortLayout />
        <div class="d-flex">
          <PartSearchLayout />
          <SearchAll />
        </div>
      </div>
      <div class="row mt-n4">
        <div
          class="d-flex justify-content-between align-items-center mb-2 mentoList"
          :key="mento.mentoCode"
          v-for="mento in mentoList">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body">
                <span class="mentoNickName">{{ mento.NickName }}</span>
                <i class="bi bi-star-fill star"></i>
                <span class="mentoScore">{{ mento.score }}</span>
                <span>({{ mento.scoreCount }})</span>
                <p class="card-title">{{ mento.title }}</p>
                <p class="card-text">
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
            <div class="men_title col-md-4 imgCard">
              <img
                v-if="mento.gender === 'female'"
                src="@/img/femaleAvatar.svg"
                class="img-fluid rounded-start pfimg"
                alt="..." />
              <img
                v-if="mento.gender === 'male'"
                src="@/img/maleAvatar.svg"
                class="img-fluid rounded-start pfimg"
                alt="..." />

              <button
                class="btn btn-outline-dark mentoDetail"
                @click="goToMenu('/mentordetail')">
                멘토 상세보기
              </button>
            </div>
          </div>
        </div>
        <div class="pagination">
          <PaginationLayout />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// import PaginationLayout from "@/components/layouts/PaginationLayout.vue";
import PartSearchLayout from "@/components/layouts/PartSearchLayout.vue";
import SearchAll from "@/components/SearchAll.vue";
import RecruitSortLayout from "@/components/layouts/RecruitSortLayout.vue";
import RegisterbtnLayout from "../components/layouts/RegisterbtnLayout.vue";
// PaginationLayout
export default {
  components: {
    PartSearchLayout,
    SearchAll,
    RecruitSortLayout,
    RegisterbtnLayout
  },
  data() {
    return {
      searchData: "",
      btnText: "멘토 등록 하기",
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
  methods: {
    goToMenu(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>
<style scoped>
.banner {
  margin-bottom: 42px;
  height: 200px;
  background-color: #1379d2;
}
.comment {
  padding-top: 50px;
  color: white;
  font-weight: 900;
}
.Regbtn {
  text-align: end;
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
.mentoList {
  border-radius: 15px;
  border: 3px solid #dce8f3;
  transition: all 0.3s;
  max-width: 650px;
  margin: 5px;
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
  height: 70px;
}
div.imgCard {
  position: relative;
  left: 60px;
  margin-top: 30px;
}
img.img-fluid.pfimg {
  width: 150px;
}
.pagination {
  position: relative;
  left: 550px;
}
i.star {
  color: #1379d2;
  margin-right: 6px;
}
button.mentoDetail {
  margin: 15px 10px;
}
</style>
