<template>
  <div class="d-inline-block">
    <RecruitSort
      v-model="recruitSort"
      class="recruit_sort"
      mode="single"
      :native="false"
      :options="recruitSortOptions"
      placeholder="정렬"
      ref="recruitsort"
      @select="onSelectSort" />
  </div>
</template>
<script>
import RecruitSort from "@vueform/multiselect";
export default {
  components: {
    RecruitSort
  },
  data() {
    return {
      recruitSort: "",
      recruitSortOptions: ["최신순", "조회수순", "스크랩 많은순"]
    };
  },
  setup() {},
  created() {},
  mounted() {
    console.log("mounted");
    // this.$refs.recruitsort.open();
  },
  unmounted() {},
  methods: {
    onSelectSort() {
      console.log(this.recruitSort);
    }
  }
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style>
.recruit_sort {
  width: 168px;
}
.multiselect.is-active {
  box-shadow: 0 0 0 var(--ms-ring-width, 3px) var(--ms-ring-color, #49c0d0);
}
.multiselect-option {
  transition: all 0.2s;
}
.multiselect-option:hover {
  background: var(--ms-option-bg-selected, #49c0d04d);
}
.multiselect-option.is-selected {
  background: var(--ms-option-bg-selected, #49c0d0);
  color: var(--ms-option-color-selected, #fff);
}
.multiselect-option.is-selected.is-pointed {
  background: var(--ms-option-bg-selected-pointed, #49c0d0);
  color: var(--ms-option-color-selected-pointed, #fff);
}
</style>
