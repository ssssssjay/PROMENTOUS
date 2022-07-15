<template>
  <span>
    <!-- 클립보드 복사 기능 -->
    <input type="hidden" v-model="value" />
    <button
      type="button"
      class="btn btn-outline-dark btn-sm pro-circle"
      v-clipboard:copy="value"
      v-clipboard:success="onSuccess"
      v-clipboard:error="onError">
      <i class="bi bi-link-45deg pro-circle-icon"></i>
    </button>
  </span>
</template>
<script>
export default {
  components: {},
  props: {
    pageUrl: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  setup() {
    const value = window.document.location.href;
    const onSuccess = () => {
      console.log("copy success");
    };
    const onError = () => {
      console.log("copy error");
    };

    return { value, onSuccess, onError };
  },
  methods: {}
};
</script>
