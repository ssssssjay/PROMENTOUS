<template>
  <div>
    <PartSearch
      v-model="value"
      mode="tags"
      :close-on-select="false"
      :searchable="true"
      :create-option="true"
      :groups="false"
      :options="options"
      style="width: 200px" />
    <p>{{ value2 }}</p>
  </div>
</template>
<script>
export default {
  components: {
    PartSearch
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
        "데이터사이언스"
      ]
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
};
import PartSearch from "@vueform/multiselect";
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style>
.multiselect {
  width: 500px;
}

.multiselect.is-active {
  box-shadow: 0 0 0 var(--ms-ring-width, 3px) var(--ms-ring-color, #0bc0eb);
}
.multiselect-tag {
  background: var(--ms-tag-bg, #0bc0eb);
}
.multiselect-group-label.is-selected {
  background: var(--ms-group-label-bg-selected, #0bc0eb);
  color: var(--ms-group-label-color-selected, #fff);
}
.multiselect-group-label.is-selected.is-pointed {
  background: var(--ms-group-label-bg-selected-pointed, #0bc0eb);
  color: var(--ms-group-label-color-selected-pointed, #fff);
}
</style>
