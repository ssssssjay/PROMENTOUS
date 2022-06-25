<template>
  <div>
    <StackSearch
      v-model="value"
      mode="tags"
      :close-on-select="false"
      :searchable="true"
      :create-option="true"
      :groups="true"
      :options="options" />
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
  methods: {}
};
import StackSearch from "@vueform/multiselect";
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
