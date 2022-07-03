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
      :groups="true"
      :options="options"
      @select="ha" />
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
        { label: "프론트엔드", options: ["Javascript", "TypeScript", "React"] },
        { label: "백엔드", options: ["Java", "Spring", "Node.js"] },
        { label: "모바일", options: ["Flutter", "Swift", "Kotlin"] },
        { label: "기타", options: ["AWS", "Kubernetes", "Docker"] }
      ]
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    ha() {
      console.log(this.value);
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
