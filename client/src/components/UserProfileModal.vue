<template>
  <Modal ref="baseModal" class="modal">
    <div class="container">
      <!-- 상단 -->
      <div class="row mt-5">
        <div class="col-2 text-center">
          <img
            v-bind:src="memberData.userImage"
            alt=""
            style="width: 120px; border-radius: 10%" />
          <div class="mt-2 h4">
            {{ memberData.userNickname }}
          </div>
          <!-- <div>
          <i class="bi bi-star-fill pro_star_color"></i>
          {{ score }} / ({{ scoreCount }})
        </div> -->
        </div>

        <div class="col-6 text-start px-4">
          <p class="h2"><strong>자기소개</strong></p>
          <p class="h5" :key="i" v-html="this.memberData.userIntro"></p>
        </div>
      </div>
      <!-- 평판 부분 -->
      <div class="row mt-5">
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
            <h4 id="list-item-1">
              <i class="bi bi-star-fill pro_star_color"></i> {{ score }}
            </h4>
            <p>시간을 잘 지키십니다.</p>
            <h4 id="list-item-2">
              <i class="bi bi-star-fill pro_star_color"></i> 5
            </h4>
            <p>항상 성실하게 맡은 임무를 수행해오십니다.</p>
            <h4 id="list-item-3">
              <i class="bi bi-star-fill pro_star_color"></i> 0.5
            </h4>
            <p>코딩을 너무 못해요</p>
            <h4 id="list-item-4">
              <i class="bi bi-star-fill pro_star_color"></i> {{ score }}
            </h4>
            <p>...</p>
          </div>
        </div>
        <hr />
      </div>
      <!-- 관심 정보 -->
      <div class="info mt-5">
        <div class="row">
          <span class="col-2 h4 text-center"><strong>관심 스택</strong></span>
          <div class="col-8 h4 text-start">
            <button
              class="btn m-1 btn-primary Stack"
              v-for="(stack, index) in memberData.likeStackCode"
              :key="index">
              {{ stack }}
            </button>
          </div>
        </div>
        <div class="row my-5">
          <span class="col-2 h4 text-center"><strong>관심 분야</strong></span>
          <div class="col-8 h4 text-start">
            <button
              class="btn m-1 btn-primary Stack"
              v-for="(Dept, index) in memberData.likeDeptCode"
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
      <!-- <div class="log mt-5">
        <div class="row">
          <div class="col-2 h4 text-center">
            <strong>진행한 프로젝트</strong>
          </div>
          <div class="col text-start px-4 h5">
            <div class="mb-3" v-for="(project, i) in projects" :key="i">
              <a
                :href="project.href"
                style="text-decoration: none; color: #1379d2"
                ><strong>{{ project.name }}</strong></a
              >
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-2 h4 text-center">
            <strong>작성한 후기글</strong>
          </div>
          <div class="col text-start px-4 h5">
            <div class="mb-3" v-for="(review, i) in reviews" :key="i">
              <a
                :href="review.href"
                style="text-decoration: none; color: #1379d2"
                ><strong>{{ review.name }}</strong></a
              >
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div class="mt-3">
        <hr />
      </div> -->
      <!-- <p class="row mt-5">
        <span class="col-2 h4 text-center"><strong>소셜 정보</strong></span>

        <span
          class="col text-start"
          :key="index"
          v-for="(mem, index) in memberData"
          >{{ mem.rating }}
        </span>
      </p> -->
    </div>
    <div class="buttons-container">
      <button class="btn confirm" @click="[confirm()]">확인</button>
      <button class="btn cancel" @click="cancel">취소</button>
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
    memberData: Object
  },
  data() {
    return {
      sampleData: ""
    };
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
  unmounted() {},
  methods: {}
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
