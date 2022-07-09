<template>
  <div>
    <section class="d-inline-block">
      <div class="d-flex">
        <LargeRegionSort
          class="region lgRegion"
          placeholder="지역선택"
          v-model="selectedLargeCity"
          :options="[
            ...new Set(
              dongList.map((data) => {
                return data.cityTitle;
              })
            )
          ]"
          @clear="deselected" />
        <RestRegionSort
          class="region restRegion"
          placeholder="지역선택"
          noOptionsText="대도시를 선택하세요!"
          v-model="selectedRestCity"
          :options="
            dongList
              .filter((data) => data.cityTitle === selectedLargeCity)
              .map((data) => {
                return data.dongTitle;
              })
          "
          @select="selected" />
      </div>
    </section>
  </div>
</template>
<script>
import LargeRegionSort from "@vueform/multiselect";
import RestRegionSort from "@vueform/multiselect";
export default {
  components: {
    LargeRegionSort,
    RestRegionSort
  },
  data() {
    return {
      selectedLargeCity: "",
      selectedRestCity: "",
      dongList: [
        {
          cityCode: "02",
          cityTitle: "서울",
          dongCode: "1",
          dongTitle: "역삼동"
        },
        {
          cityCode: "02",
          cityTitle: "서울",
          dongCode: "2",
          dongTitle: "압구정동"
        },
        {
          cityCode: "02",
          cityTitle: "서울",
          dongCode: "3",
          dongTitle: "오금동"
        },
        {
          cityCode: "031",
          cityTitle: "경기도",
          dongCode: "1",
          dongTitle: "수내동"
        },
        {
          cityCode: "031",
          cityTitle: "경기도",
          dongCode: "2",
          dongTitle: "정자동"
        },
        {
          cityCode: "031",
          cityTitle: "경기도",
          dongCode: "3",
          dongTitle: "서현동"
        }
      ]
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    selected() {
      console.log("selectedLargeCity : ", this.selectedLargeCity);
      console.log("selectedRestCity : ", this.selectedRestCity);
    },
    deselected() {
      this.selectedRestCity = "";
    }
  }
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
.regionSort {
  display: inline-block;
}
.d-flex {
  column-gap: 12px;
}
.region {
  width: 160px;
  margin: 0;
}
</style>
