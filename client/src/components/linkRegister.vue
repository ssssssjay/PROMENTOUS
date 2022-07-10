<template>
  <div>
    <p class="row mt-5">
      <span class="col-2 text-end"><strong>참고링크</strong></span>
      <span class="col-3 px-4"
        ><input
          type="text"
          class="form-control text-start"
          placeholder="링크 제목을 입력해주세요!"
          name=""
          id=""
          v-model="link.name"
      /></span>
      <span class="col-4 text-start"
        ><input
          type="url"
          class="form-control text-start"
          placeholder="링크를 입력해주세요!"
          name=""
          id=""
          v-model="link.href"
      /></span>
      <span class="col-1 text-left"
        ><button type="button" class="btn btn-outline-primary" @click="addLink">
          +
        </button></span
      >
    </p>
    <!-- 링크표시 -->
    <p class="row">
      <span class="col-2"></span>
      <span class="col-8"
        ><a
          class="px-4"
          :href="Object.values(link)"
          v-for="(link, index) in linkList"
          :key="index"
          target="_blank"
          >{{ Object.keys(link).join() }}</a
        ></span
      >
    </p>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      link: { name: "", href: "" },
      linkList: []
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    addLink() {
      let obj = {
        [this.link.name]: this.link.href
      };
      this.linkList.push(obj);
      alert("링크 정보가 추가되었습니다.");
    }
  }
};
</script>
