<template>
  <div>
    <Multiselect
      v-model="value"
      mode="tags"
      :close-on-select="false"
      :searchable="true"
      :create-option="true"
      :options="options"
    />
    <p>{{ value2 }}</p>
  </div>
</template>
<script>
export default {
  components: {
    StackSearch,
  },
  data() {
    return {
      value2: [],
      options2: [
        { label: "프론트엔드", options: ["Javascript", "TypeScript", "React"] },
        { label: "백엔드", options: ["Java", "Spring", "Node.js"] },
        { label: "모바일", options: ["Flutter", "Swift", "Kotlin"] },
        { label: "기타", options: ["AWS", "Kubernetes", "Docker"] },
      ],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
import StackSearch from "@vueform/multiselect";
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
