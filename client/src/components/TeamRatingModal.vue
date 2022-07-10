<template>
  <Modal ref="baseModal" class="modal">
    <div class="content-container">
      <p v-for="text in content" :key="text">
        {{ text }}
      </p>
      <input
        type="text"
        name=""
        id=""
        size="60"
        v-model="txt0"
        maxlength="1000"
        class="txt input-group-text" />
      <star-rating
        v-model:rating="rating0"
        @click="transRating"
        :active-color="colors"></star-rating>
    </div>
    <div class="buttons-container">
      <button class="btn confirm" @click="[transTxt(), confirm()]">확인</button>
      <button class="btn cancel" @click="cancel">취소</button>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/BaseModal.vue";
import { ref } from "vue";

export default {
  name: "TeamRatingModal",
  components: {
    Modal
  },
  props: {
    content: Array,
    colors: {
      type: String,
      default: "yellow"
    }
  },
  data() {
    return {
      txt0: "",
      rating0: 0
    };
  },
  methods: {
    transTxt() {
      this.$emit("childTxt", this.txt0);
    },
    transRating() {
      this.$emit("childRating", this.rating0);
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
  }
};
</script>
<style scoped>
.txt {
  text-align: start;
}
</style>
