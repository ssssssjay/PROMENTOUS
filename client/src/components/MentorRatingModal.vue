<template>
  <Modal ref="baseModal" class="modal">
    <div class="content-container" :key="i" v-for="(mt, i) in mentoring">
      {{ mt.mentorUserId }}
      <input
        type="text"
        name=""
        id=""
        size="60"
        v-model="mt.mentorRating[0].comment"
        maxlength="1000"
        class="txt input-group-text" />
      <star-rating
        v-model:rating="mt.mentorRating[0].score"
        @click="transRating"
        :active-color="colors"></star-rating>
    </div>
    <div class="buttons-container">
      <button class="btn confirm" @click="[confirm()]">확인</button>
      <button class="btn cancel" @click="cancel">취소</button>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/BaseModal.vue";
import { ref } from "vue";

export default {
  name: "MentorRatingModal",
  components: {
    Modal
  },
  props: {
    content: Array,
    colors: {
      type: String,
      default: "blue"
    },
    mentoring: Array
  },
  data() {
    return {};
  },
  methods: {
    // transTxt() {
    //   this.$emit("MentorTxt", this.txt);
    // },
    // transRating() {
    //   this.$emit("MentorRating", this.rating);
    // }
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
  }
};
</script>
<style scoped>
.txt {
  text-align: start;
}
</style>
