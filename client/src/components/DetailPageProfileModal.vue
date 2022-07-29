<template>
  <Modal ref="baseModal" class="modal">
    <hr />
    {{ memberData }}
    <hr />
    {{ leaderData }}
    <hr />
    {{ leaderStack }}
    <hr />
    {{ leaderCheck }}

    <div class="container" v-if="leaderCheck == true">
      <!-- 상단 -->
      <div class="row mt-5">
        <div class="col-2 text-center">
          <img
            v-bind:src="leaderData.user_image"
            alt=""
            style="width: 120px; border-radius: 10%" />
          <div class="mt-2 h4">
            {{ leaderData.user_nickname }}
          </div>
          <!-- <div>
            <i class="bi bi-star-fill pro_star_color"></i>
            {{ averageRate }} ({{ memberData.rating.length }})
          </div> -->
        </div>

        <div class="col-6 text-start px-4">
          <p class="h2"><strong>자기소개</strong></p>
          <p class="h5" :key="i" v-html="this.leaderData.user_intro"></p>
        </div>
      </div>
      <!-- 평판 부분 -->
      <!-- <div class="row mt-5">
        <hr />
        <br />
        <div class="col-2 h4 text-center"><strong>최근 평판</strong></div>
        <div class="col" style="height: 180px; overflow: auto">
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-offset="0"
            class="scrollspy-example"
            tabindex="0">
            <h4
              id="list-item-1"
              :key="i"
              v-for="(rate, i) in leaderData.rating">
              <i class="bi bi-star-fill pro_star_color"></i> {{ rate.score }}
              <span>{{ rate.comment }}</span>
            </h4>
          </div>
        </div>
        <hr />
      </div> -->
      <!-- 관심 정보 -->
      <div class="info mt-5">
        <div class="row">
          <span class="col-2 h4 text-center"><strong>관심 스택</strong></span>
          <div class="col-8 h4 text-start">
            <button
              class="btn m-1 btn-primary Stack"
              v-for="(stack, index) in this.leaderStack"
              :key="index"
              v-show="stack != ''">
              {{ stack }}
            </button>
          </div>
        </div>
        <div class="row my-5">
          <span class="col-2 h4 text-center"><strong>관심 분야</strong></span>
          <div class="col-8 h4 text-start">
            <button
              class="btn m-1 btn-primary Stack"
              v-for="(Dept, index) in this.leaderData.like_dept_code"
              :key="index">
              {{ Dept }}
            </button>
          </div>
        </div>
        <div class="mt-5 mb-5">
          <hr />
        </div>
      </div>
      <!-- 활동 기록d -->
      <div class="log mt-5">
        <div class="row">
          <div class="col-2 h4 text-center">
            <strong>진행한 프로젝트</strong>
          </div>
          <div class="col text-start px-4 h5">
            <div
              class="mb-3"
              v-for="(project, i) in leaderData.project"
              :key="i">
              <a
                @click="goToProjectDetail(project.project_id)"
                style="text-decoration: none; color: #1379d2"
                ><strong>{{ project.title }}</strong></a
              >
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-2 h4 text-center">
            <strong>작성한 후기글</strong>
          </div>
          <div class="col text-start px-4 h5">
            <div class="mb-3" v-for="(review, i) in leaderData.review" :key="i">
              <a
                @click="goToReviewDetail(review.review_id)"
                style="text-decoration: none; color: #1379d2"
                ><strong>{{ review.title }}</strong></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <hr />
      </div>
      <div class="row mt-5">
        <span class="col-2 h4 text-center"><strong>소셜 정보</strong></span>
        <div class="mb-3" v-for="(url, i) in leaderData.url_list" :key="i">
          <a :href="url.address">{{ url.title }}</a>
        </div>
      </div>
    </div>
    <!-- ======================================================================================== -->
    <div class="container" v-if="leaderCheck == false">
      <!-- 상단 -->
      <div class="row mt-5">
        <div class="col-2 text-center">
          <img
            v-bind:src="memberData.user_image"
            alt=""
            style="width: 120px; border-radius: 10%" />
          <div class="mt-2 h4">
            {{ memberData.user_nickname }}
          </div>
          <!-- <div>
            <i class="bi bi-star-fill pro_star_color"></i>
            {{ averageRate }} ({{ memberData.rating.length }})
          </div> -->
        </div>

        <div class="col-6 text-start px-4">
          <p class="h2"><strong>자기소개</strong></p>
          <p class="h5" :key="i" v-html="this.memberData.user_intro"></p>
        </div>
      </div>
      <!-- 평판 부분 -->
      <!-- <div class="row mt-5">
        <hr />
        <br />
        <div class="col-2 h4 text-center"><strong>최근 평판</strong></div>
        <div class="col" style="height: 180px; overflow: auto">
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-offset="0"
            class="scrollspy-example"
            tabindex="0">
            <h4
              id="list-item-1"
              :key="i"
              v-for="(rate, i) in memberData.rating">
              <i class="bi bi-star-fill pro_star_color"></i> {{ rate.score }}
              <span>{{ rate.comment }}</span>
            </h4>
          </div>
        </div>
        <hr />
      </div> -->
      <!-- 관심 정보 -->
      <div class="info mt-5">
        <div class="row">
          <span class="col-2 h4 text-center"><strong>관심 스택</strong></span>
          <div class="col-8 h4 text-start">
            <button
              class="btn m-1 btn-primary Stack"
              v-for="(stack, index) in this.memberData.like_stack_code"
              :key="index"
              v-show="stack != ''">
              {{ stack }}
            </button>
          </div>
        </div>
        <div class="row my-5">
          <span class="col-2 h4 text-center"><strong>관심 분야</strong></span>
          <div class="col-8 h4 text-start">
            <button
              class="btn m-1 btn-primary Stack"
              v-for="(Dept, index) in this.memberData.like_dept_code"
              :key="index">
              {{ Dept }}
            </button>
          </div>
        </div>
        <div class="mt-5 mb-5">
          <hr />
        </div>
      </div>
      <!-- 활동 기록d -->
      <div class="log mt-5">
        <div class="row">
          <div class="col-2 h4 text-center">
            <strong>진행한 프로젝트</strong>
          </div>
          <div class="col text-start px-4 h5">
            <div
              class="mb-3"
              v-for="(project, i) in memberData.project"
              :key="i">
              <a
                :href="project.address"
                style="text-decoration: none; color: #1379d2"
                ><strong>{{ project.title }}</strong></a
              >
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-2 h4 text-center">
            <strong>작성한 후기글</strong>
          </div>
          <div class="col text-start px-4 h5">
            <div class="mb-3" v-for="(review, i) in memberData.review" :key="i">
              <a
                :href="review.address"
                style="text-decoration: none; color: #1379d2"
                ><strong>{{ review.title }}</strong></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <hr />
      </div>
      <div class="row mt-5">
        <span class="col-2 h4 text-center"><strong>소셜 정보</strong></span>
        <div class="mb-3" v-for="(url, i) in memberData.url_list" :key="i">
          <a :href="url.address">{{ url.title }}</a>
        </div>
      </div>
    </div>
    <div class="buttons-container">
      <!-- <button class="btn confirm" @click="[confirm()]">확인</button> -->
      <button class="btn cancel" @click="cancel">닫기</button>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/BaseModal2.vue";
import { ref } from "vue";
export default {
  name: "UserProfileModal2",
  components: { Modal },
  props: {
    leaderData: Object,
    leaderStack: Object,
    memberData: Object,
    leaderCheck: Boolean
  },
  data() {
    return {
      // *userNickname
      // *likeStackCode
      // *userImage
      // *userIntro
      // *likeDeptCode
      // {진행한 프로젝트 모집글 제목 , 모집글링크 }
      // {작성한 리뷰 제목 , 주소}  REVIEW테이블   TITLE / REVIEW_ADDRESS(테이블없음)
      // 소셜정보  마이페이지 URL_LIST   [{title:'',address:''}]이런식으로
      // 평판 보류
      // 평점총합/평점.length
      // 평점.length
      // {평점 + 평가 코멘트 }  RATE테이블  RATE /  RATE_COMMENT
    };
  },
  methods: {
    // rateAverage() {
    //   for (let i = 0; i < this.applicantData.rating.length; i++) {
    //     this.averageRate += this.applicantData.rating[i].score;
    //   }
    // }
    goToProjectDetail(id) {
      window.scrollTo(0, 0);
      const path = `/project/recruit/${id}`;
      this.$router.push({
        path: path,
        name: "projectdetail",
        params: { projectId: id }
      });
      // TODO: 여기서 팝업 닫은 후 새로고침 처리 필요할 듯
      // this.$router.go();
    },
    goToReviewDetail(id) {
      window.scrollTo(0, 0);
      const path = `/project/review/${id}`;
      this.$router.push({
        path: path,
        name: "reviewdetail",
        params: { reviewId: id }
      });
    }
  },
  setup() {
    const baseModal = ref(null);
    const resolvePromise = ref(null);

    const show = () => {
      baseModal.value.open();
      return new Promise((resolve) => {
        resolvePromise.value = resolve;
      });
    };

    const confirm = () => {
      baseModal.value.close();
      resolvePromise.value(true);
    };

    const cancel = () => {
      baseModal.value.close();
      resolvePromise.value(false);
    };
    return { baseModal, show, confirm, cancel };
  },
  created() {},
  mounted() {},
  updated() {},
  unmounted() {}
};
</script>
<style scoped>
button.btn.btn-primary {
  background-color: #49c0d0;
  border-color: #49c0d0;
}
.Stack {
  font-size: 15px;
}
</style>
