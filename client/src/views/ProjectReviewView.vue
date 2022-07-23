<template>
  <div>
    <section class="banner d-flex align-items-center">
      <div class="container">
        <h1>프로젝트 후기</h1>
        <p>우리는 이런걸 만들었어요</p>
      </div>
    </section>
    <section class="container">
      <div class="d-flex pt-4 pb-4 justify-content-end section_first">
        <registerbtn-layout
          v-if="user.user_id"
          :btnText="btnText"
          @click="goToMenu('../Reviewwrite')" />
      </div>
      <div class="d-flex pt-4 mb-4 align-items-start justify-content-between">
        <RecruitSortLayout />
        <div class="d-flex">
          <StackSearchLayout />
          <SearchAll />
        </div>
      </div>
      <main class="review_list d-flex flex-wrap">
        <div
          class="card"
          style="width: 40rem; height: 240px"
          v-for="(review, i) in reviews"
          @click="onClick"
          :key="i">
          <div class="d-flex">
            <img
              style="width: 15rem"
              src="@/assets/reviewThumbnail.png"
              class="card-img-top thumbnail"
              alt="후기썸네일이미지" />
            <!-- TODO : DB 상에 이미지 경로가 이상하여 전부 깨져서 우선은 로컬이미지로 렌더링 -->
            <!-- <img
              style="width: 15rem"
              :src="review.thumbnail_image"
              class="card-img-top thumbnail"
              alt="후기썸네일이미지" /> -->
            <div class="card-body">
              <h5 class="card-title">{{ review.title }}</h5>
              <p class="card-text ellipsis">
                {{ review.desc }}
              </p>
              <div class="mb-3">
                <i class="bi bi-eye me-1"></i>
                <span class="me-1">{{ review.viewCount }}</span>
                <!-- TODO : 아래의 기능은 구현여부 결정 -->
                <!-- <i class="bi bi-bookmark me-2"></i> -->
                <!-- <span class="me-1">{{ review.bookmarkCount }}</span> -->
                <!-- <i class="bi bi-chat-right-text me-2"></i> -->
                <!-- <span class="me-1">{{ review.commentCount }}</span> -->
                <!-- <i class="bi bi-heart me-2"></i> -->
                <!-- <span>{{ review.likeCount }}</span> -->
              </div>
              <div class="mb-3">
                <div
                  v-for="(stack, i) in review.stack_code"
                  :key="i"
                  class="stack-icon me-1">
                  {{ stack }}
                </div>
              </div>
              <!-- <a
                class="btn btn-sm btn-outline-dark"
                :href="review.distributeURL"
                target="_blank"
                >모집 공고 보러가기</a
              > -->
              <a
                class="btn btn-sm btn-outline-dark"
                @click="goToDetail(review.project_id)"
                >모집 공고 보러가기</a
              >
            </div>
          </div>
        </div>
      </main>
    </section>
  </div>
</template>
<script>
import RecruitSortLayout from "@/components/layouts/RecruitSortLayout.vue";
import StackSearchLayout from "@/components/layouts/StackSearchLayout.vue";
import SearchAll from "@/components/SearchAll.vue";
import RegisterbtnLayout from "../components/layouts/RegisterbtnLayout.vue";

export default {
  components: {
    RecruitSortLayout,
    StackSearchLayout,
    SearchAll,
    RegisterbtnLayout
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  data() {
    return {
      btnText: "프로젝트 후기 작성하기",
      reviews: [
        // 아래는 응답 예시임
        // {
        //   created_datetime: "2022-04-19T03:40:20.000Z",
        //   del_yn: "N",
        //   desc: "프로젝트 모집 플랫폼인 PROMENTOUS를 만들었다. 후기.. ~~ 가나다라마바사아자차카가나다라마바사아자차카가나다라마바사아자차카가나다라마바사아자차카가나다라마바사아자차카가나다라마바사아자차카가나다라마바사아자차카",
        //   project_id: 4,
        //   review_id: 1,
        //   stack_code: "python,",
        //   stack_code_origin: "P01",
        //   thumbnail_image: "img1.jpg",
        //   title: "PROMENTOUS 개발 후기",
        //   user_nickname: "약히개발",
        //   viewCount: 0,
        //   writer_id: 10
        // }
      ]
    };
  },
  setup() {},
  created() {
    this.getReviewList();
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getReviewList() {
      const response = await this.$get(`/project/review`);
      console.log(response);
      this.reviews = response;
      this.reviews.forEach((review) => {
        review.stack_code = this.convertStack(review.stack_code);
        review.stack_code.pop();
      });
    },
    convertStack(raw_stack) {
      return raw_stack.split(",").map(String);
    },
    goToMenu(path) {
      this.$router.push({ path: path });
    },
    goToDetail(id) {
      window.scrollTo(0, 0);
      const path = `/project/recruit/${id}`;
      this.$router.push({
        path: path,
        name: "projectdetail",
        params: { projectId: id }
      });
    },
    onClick(e) {
      if (e.target.className === "btn btn-sm btn-outline-dark") {
        return;
      }
      console.log(e);
    }
  }
};
</script>
<style lang="scss" scoped>
.review_list {
  row-gap: 20px;
}
.card {
  margin-right: 16px;
  cursor: pointer;
  transition: all 0.3s;
}
.card:nth-child(2n) {
  margin-right: 0;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.btn_write {
  border: 1px solid #363636;
  transition: 0.2s;
}
.btn_write:hover {
  background-color: #363636;
  color: #fff;
}
.banner {
  color: #fff;
  height: 200px;
  background-color: #0b72cd;
}
.section_first {
  border-bottom: 1px solid #838383;
}
.thumbnail {
  width: 100%;
  /* height: auto; */
}
.stack-icon {
  font-size: 14px;
  display: inline-block;
  padding: 0 12px;
  text-align: center;
  border-radius: 28px;
  color: white;
  background-color: #1379d2;
  box-sizing: border-box;
}
.ellipsis {
  width: 360px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
