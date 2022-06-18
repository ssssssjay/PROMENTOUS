<template>
  <div>
    <PartSearch
      v-model="value2"
      mode="tags"
      :close-on-select="false"
      :searchable="true"
      :create-option="true"
      :groups="false"
      :options="options"
    />
    <p>{{ value2 }}</p>
  </div>
</template>
<script>
export default {
  components: {
    PartSearch,
  },
  data() {
    return {
      value: [],
      options: [
        "프론트엔드",
        "백엔드",
        "풀스택",
        "디자인",
        "UI/ UX",
        "기획",
        "PM",
        "데이터베이스",
        "알고리즘,자료구조",
        "퍼블리싱",
        "데브옵스",
        "데이터사이언스",
      ],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
import PartSearch from "@vueform/multiselect";
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
