<template>
  <div>
    <div class="container mt-5">
      <form class="row g-3">
        <div class="row mb-5">
          <div class="title col-sm-10">프로젝트 생성</div>
        </div>
        <div class="row mb-3">
          <label for="projectName" class="col-sm-2 col-form-label"
            >프로젝트명</label
          >
          <div class="col-sm-3">
            <input type="text" class="form-control" id="projectName" />
          </div>
        </div>
        <div class="row mb-5">
          <label for="inputStartDate" class="col-sm-2 col-form-label"
            >시작 예정일</label
          >
          <div class="col-sm-3">
            <Datepicker
              v-model="date"
              locale="kst"
              range
              class="datepicker"
              id="inputStartDate" />
          </div>

          <label for="onoff" class="col-sm-2 col-form-label">진행기간</label>
          <div class="col-sm-3">
            <select id="onoff" class="form-select">
              <option></option>
              <option>온라인</option>
              <option>오프라인</option>
            </select>
          </div>
        </div>

        <div class="row mb-5">
          <label for="reqNum" class="col-sm-2">모집인원</label>
          <div class="col-sm-3">
            <select id="reqNum" class="form-select">
              <option selected>분야</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-sm-3">
            <select id="inputState" class="form-select">
              <option selected>1명</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row mb-5">
          <label for="onoff" class="col-sm-2 col-form-label">진행방식</label>
          <div class="col-sm-3">
            <select id="onoff" class="form-select">
              <option></option>
              <option>온라인</option>
              <option>오프라인</option>
            </select>
          </div>
          <label for="region" class="col-sm-2 col-form-label">진행 지역</label>

          <div class="col-sm-3" id="region"><RegionSortLayout /></div>
        </div>
        <div class="row mb-5">
          <label class="col-sm-2 col-form-label">보증금 여부</label>
          <div class="col-sm-3 form-check">
            <div>
              <div>
                <input
                  type="radio"
                  id="O"
                  name="contact"
                  value="O"
                  class="me-2" />
                <label for="O" class="me-5">O</label>

                <input
                  type="radio"
                  id="X"
                  name="contact"
                  value="phone"
                  class="me-2" />
                <label for="X" class="me-5">X</label>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <label for="stack" class="col-sm-2 col-form-label"
            >사용 기술/언어 <br />
            <p class="ms-2">(최대 10개)</p></label
          >
          <StackSearchLayout class="col-sm-3" id="stack" />
        </div>

        <div class="row mb-5">
          <label class="col-sm-10 col-form-label"
            >연락 방법<br />
            <p>
              * 연락을 위한 URL(카카오톡 오픈 톡방 링크 등)또는 이메일을
              입력해주세요.
            </p></label
          >
          <input type="text" class="form-control" />
        </div>
        <div class="row mb-5">
          <label class="col-sm-10 col-form-label"
            >참고 링크<br />
            <p>
              * 프로젝트와 관련해 참고할 수 있는 사이트를 입력해주세요.
            </p></label
          >
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
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import RegionSortLayout from "@/components/layouts/RegionSortLayout.vue";
import StackSearchLayout from "@/components/layouts/StackSearchLayout.vue";
import TextEditor from "@/components/TextEditor.vue";
import RegisterbtnLayout from "../components/layouts/RegisterbtnLayout.vue";
export default {
  name: "app",
  components: {
    Datepicker,
    RegionSortLayout,
    StackSearchLayout,
    TextEditor,
    RegisterbtnLayout
  },
  data() {
    return {
      btnText: "작성 완료",
      contents:
        "<h1>1. 프로젝트 주제</h1> <h3>    -프로젝트 내용, 시작 동기 등에 관해 적어주세요!</h3><br><br><h1>2. 모임 방식/ 진행 방법</h1> <h3>    -모임을 1주일에 몇 번 정도 진행할 지 적어주세요!</h3><br><h3>    -모임 진행을 희망하는 요일을 적어주세요!</h3><br><h3>    -모임 진행 방식에 대해 상세히 적어주세요!</h3><br><br><h1>3. 그 외 자유 작성 사항</h1>"
      //  "1. 프로젝트 주제  2. 모임 방식/ 진행 방법 3.그 외 자유 작성 사항"
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
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
</style>
