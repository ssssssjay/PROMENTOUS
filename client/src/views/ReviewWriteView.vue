<template>
  <div>
    <div class="container mt-5">
      <form class="row g-3">
        <div class="row mb-5">
          <div class="title col-sm-10">프로젝트 후기 작성하기</div>
        </div>
        <div class="row mb-5">
          <label for="reviewName" class="col-sm-2 col-form-label">후기명</label>
          <div class="col-sm-3">
            <input
              type="text"
              class="form-control"
              id="reviewName"
              v-model="REVIEW_TITLE" />
          </div>
        </div>
        <div class="row mb-5">
          <label for="inputStartDate" class="col-sm-2 col-form-label"
            >진행한 프로젝트</label
          >
          <div class="col-sm-3">
            <select
              class="form-select"
              name=""
              id=""
              v-model="SELECTED_PROJECT_TITLE">
              <option
                value=""
                :key="i"
                v-for="(title, i) in USER_PROJECT_TITLE">
                {{ title }}
              </option>
            </select>
          </div>
        </div>
        <div class="row mb-5">
          <label for="inputStartDate" class="col-sm-2 col-form-label"
            >썸네일 이미지</label
          >
        </div>

        <div class="row mb-5">
          <label class="col-sm-10 col-form-label"
            >결과 링크<br />
            <p>
              * 프로젝트 결과를 확인할 수 있는 사이트를 입력해주세요.
            </p></label
          >
          <div class="col partTo" v-show="this.UrlAdd == ''">
            <input
              type="text"
              class="form-control"
              style="width: 200px"
              placeholder="링크 이름"
              v-model="URL.title" />

            <input
              type="text"
              class="form-control"
              style="width: 300px"
              placeholder="링크 주소"
              v-model="URL.address" />
            <button type="button" class="btn btn-secondary" @click="addUrl()">
              추가
            </button>
          </div>
          <div class="row" v-for="(URL, index) in URL_LIST" :key="index">
            <div class="col partTo ms-1">
              <p class="form-control mb-1">
                {{ URL_LIST[index].title }}
              </p>
              <p class="form-control mb-1">
                {{ URL_LIST[index].address }}
              </p>
              <button
                type="button"
                class="btn btn-secondary"
                @click="delURL(index)">
                X
              </button>
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <text-editor :contents="contents" />
        </div>
      </form>
      <registerbtn-layout class="regBtn" :btnText="btnText" />
    </div>
  </div>
</template>
<script>
import TextEditor from "@/components/TextEditor.vue";
import RegisterbtnLayout from "../components/layouts/RegisterbtnLayout.vue";

export default {
  name: "app",
  components: {
    TextEditor,
    RegisterbtnLayout
  },
  data() {
    return {
      USER_PROJECT_TITLE: [
        "자바스크립트로 만드는 웹사이트 ",
        "VUE,NODE 프로젝트만들기",
        "파이썬으로 만드는 TODO-LIST"
      ],
      URL: { title: "", address: "" },
      URL_LIST: [],
      UrlAdd: "",
      REVIEW_TITLE: "",
      SELECTED_PROJECT_ID: "",
      SELECTED_PROJECT_TITLE: "자바스크립트로 만드는 웹사이트 ",
      contents: "",
      btnText: "작성 완료"
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    sendValue(data) {
      this.stacks = data;
    },
    delPart(index) {
      this.PART_LIST.splice(index, 1);
    },
    addUrl() {
      if (this.URL.title !== "" && this.URL.address !== "") {
        let obj0 = {
          ["title"]: this.URL.title,
          ["address"]: this.URL.address
        };
        this.URL_LIST.push(obj0);
        this.URL.title = "";
        this.URL.address = "";
        this.UrlAdd = "yes";
      } else if (this.URL.title === "" || this.URL.address === 0) {
        alert("링크를 정확히 입력해주세요");
      }
    },
    delURL(index) {
      this.URL_LIST.splice(index, 1);
      this.UrlAdd = "";
    }
  }
};
</script>
<style scoped>
.regBtn {
  float: right;
}
.title {
  font-size: 40px;
  font-weight: bold;
}
.warranty {
  width: 150px;
  display: inline;
}
.partTo > input {
  display: inline;
  margin-right: 5px;
}
.col.partTo {
  position: relative;
  bottom: 5px;
}
p.form-control {
  width: 200px;
  display: inline-block;
  margin-right: 5px;
}
</style>
