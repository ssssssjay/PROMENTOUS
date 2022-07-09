<template>
  <div>
    <div class="container mt-5">
      <form class="row g-3">
        <div class="row mb-5">
          <div class="col-sm-10">프로젝트 생성</div>
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
        </div>

        <div class="row mb-5"></div>

        <div class="row mb-5"></div>
      </form>
    </div>
  </div>
</template>
<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import RegionSortLayout from "@/components/layouts/RegionSortLayout.vue";
import StackSearchLayout from "@/components/layouts/StackSearchLayout.vue";
export default {
  components: { Datepicker, RegionSortLayout, StackSearchLayout },
  data() {
    return {
      date: null
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
};
</script>
