<template>
  <div>
    <StackSearch
      v-model="value"
      class="stack_search"
      placeholder="언어/스택으로
    검색해보세요"
      mode="tags"
      :close-on-select="false"
      :searchable="true"
      :create-option="true"
      :options="options"
      @click="transValue" />
  </div>
</template>
<script>
export default {
  components: {
    StackSearch
  },

  data() {
    return {
      value: [],
      options: [
        "Javascript",
        "TypeScript",
        "React",
        "Java",
        "Spring",
        "Node.js",
        "Flutter",
        "Swift",
        "Kotlin",
        "AWS",
        "Kubernetes",
        "Docker"
      ]
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    transValue() {
      this.$emit("send-value", this.value);
    }
  }
};
import StackSearch from "@vueform/multiselect";
</script>
<!-- <style src="@vueform/multiselect/themes/default.css"></style> -->
<style scoped>
.stack_search {
  width: 500px;
}
.multiselect-tag {
  background: var(--ms-option-bg-selected, #49c0d0);
}
.multiselect-group-label.is-selected {
  background: var(--ms-option-bg-selected, #49c0d0);
}
.multiselect-group-label.is-selected.is-pointed {
  background: var(--ms-option-bg-selected, #49c0d0);
}
</style>
