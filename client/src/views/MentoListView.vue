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
      {{ this.mentoList }}
      <div class="Regbtn">
        <registerbtn-layout
          :btnText="btnText"
          @click="goToMenu('/mentorregister')" />
      </div>
      <div
        class="d-flex pt-5 mb-4 align-items-start justify-content-between section_second">
        <RecruitSortLayout />
        <div class="d-flex">
          <PartSearchLayout @send-value="sendValue" />
          <SearchAll />
        </div>
      </div>
      <div class="row mt-n4">
        <div
          class="d-flex justify-content-between align-items-center mb-2 mentoList"
          :key="index"
          v-for="(mento, index) in mentoList">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body">
                <span class="mentoNickName">{{ mento.user_nickname }}</span>
                <i class="bi bi-star-fill star"></i>
                <!--   불필요한 프론트 과잉처리. 
                <span class="mentoScore">{{ mento.showRate }}</span>
                <span>({{ mento.RATE.length }})</span> -->
                <p class="card-title">{{ mento.TITLE }}</p>
                <p class="card-text">
                  {{ mento.INTRO }}
                </p>
                <div
                  class="mentoPart"
                  :key="i"
                  v-for="(code, i) in mentoList[index].DEPT_CODE3"
                  style="display: inline">
                  <button class="partName">{{ code }}</button>
                </div>
                <!--  보강 예정  ( 대문자 변수 해제 부탁드려요  )
                <span v-show="mento.DEPT_CODE.length > 3"
                  >+{{ mento.DEPT_CODE.length - 3 }}</span
                >
                -->
              </div>
            </div>
            <div class="men_title col-md-4 imgCard">
              <img
                v-bind:src="mento.user_image"
                class="img-fluid rounded-start pfimg"
                alt="..." />

              <button
                class="btn btn-outline-dark mentoDetail"
                @click="goToMenu('/mentordetail', mento.user_id)">
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
      part: [],
      searchData: "",
      btnText: "하드코딩임.멘토 등록 하기",
      mentoList: [
        {
          user_image:
            "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
          user_nickname: "하드코딩임.evelo0702",
          TITLE: "하드코딩임.파이썬을 도와주는 멘토링",
          INTRO:
            "하드코딩임.오늘 내가 만든 프로그램이 누군가에게 도움을 줄 수 있다는 사실에서 동기를 얻습니다. 아이디어가 제 손을 통해 현실화되고, 그렇게 현실화된 프로덕트를 통해서 더욱 좋은 개발자를 만들고싶습니다.",
          DEPT_CODE: ["자바스크립트", "파이썬", "스프링", "뷰"],
          DEPT_CODE3: [], // db에서 가져올 데이터 x
          RATE: [5, 2, 3, 4, 5],
          totalRate: 0, // db에서 가져올 데이터 x
          showRate: 0 // db에서 가져올 데이터 x
        },
        {
          user_image:
            "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
          user_nickname: "하드코딩임.evelo0702",
          TITLE: "하드코딩임.파이썬을 도와주는 멘토링",
          INTRO:
            "하드코딩임.오늘 내가 만든 프로그램이 누군가에게 도움을 줄 수 있다는 사실에서 동기를 얻습니다. 아이디어가 제 손을 통해 현실화되고, 그렇게 현실화된 프로덕트를 통해서 더욱 좋은 개발자를 만들고싶습니다.",
          DEPT_CODE: ["자바스크립트", "파이썬", "스프링", "뷰"],
          DEPT_CODE3: [], // db에서 가져올 데이터 x
          RATE: [5, 2, 3, 4, 5],
          totalRate: 0, // db에서 가져올 데이터 x
          showRate: 0 // db에서 가져올 데이터 x
        },
        {
          user_image:
            "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
          user_nickname: "하드코딩임.evelo0702",
          TITLE: "하드코딩임.파이썬을 도와주는 멘토링",
          INTRO:
            "하드코딩임.오늘 내가 만든 프로그램이 누군가에게 도움을 줄 수 있다는 사실에서 동기를 얻습니다. 아이디어가 제 손을 통해 현실화되고, 그렇게 현실화된 프로덕트를 통해서 더욱 좋은 개발자를 만들고싶습니다.",
          DEPT_CODE: ["자바스크립트", "파이썬", "스프링", "뷰"],
          DEPT_CODE3: [], // db에서 가져올 데이터 x
          RATE: [5, 2, 3, 4, 5],
          totalRate: 0, // db에서 가져올 데이터 x
          showRate: 0 // db에서 가져올 데이터 x
        },
        {
          user_image:
            "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
          user_nickname: "하드코딩임.evelo0702",
          TITLE: "하드코딩임.파이썬을 도와주는 멘토링",
          INTRO:
            "하드코딩임.오늘 내가 만든 프로그램이 누군가에게 도움을 줄 수 있다는 사실에서 동기를 얻습니다. 아이디어가 제 손을 통해 현실화되고, 그렇게 현실화된 프로덕트를 통해서 더욱 좋은 개발자를 만들고싶습니다.",
          DEPT_CODE: ["자바스크립트", "파이썬", "스프링", "뷰"],
          DEPT_CODE3: [], // db에서 가져올 데이터 x
          RATE: [5, 2, 3, 4, 5],
          totalRate: 0, // db에서 가져올 데이터 x
          showRate: 0 // db에서 가져올 데이터 x
        }
      ]
    };
  },
  setup() {},
  created() {},
  mounted() {
    this.getMentorList();
  },
  unmounted() {},
  methods: {
    sendValue(data) {
      this.part = data;
    },
    goToMenu(path, mentoUserId) {
      this.$router.push({ path: path });
      /**/
      alert(mentoUserId); // 이 값을 MentorDetailView.vue 가 알게 하려면 어떻게 할까요 ? 프론트 처리부탁...
    },
    deptCodeFilter() {
      for (let i = 0; i < this.mentoList.length; i++) {
        this.mentoList[i].DEPT_CODE3 = this.mentoList[i].DEPT_CODE.slice(0, 3);
      }
    },
    rateData() {
      for (let i = 0; i < this.mentoList.length; i++) {
        for (let j = 0; j < this.mentoList[i].RATE.length; j++) {
          this.mentoList[i].totalRate += this.mentoList[i].RATE[j];
        }
        this.mentoList[i].showRate = (
          this.mentoList[i].totalRate / this.mentoList[i].RATE.length
        ).toFixed(1);
      }
    },
    async getMentorList() {
      this.mentoList = await this.$post("/mentor/getMentorList", {
        keyword: this.searchData
      });
      this.mentoList = this.mentoList.data;
      console.log(this.mentoList);
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
