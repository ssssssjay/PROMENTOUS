<template>
  <div class="container">
    <div>
      <h2 class="text-start mt-5"><strong>멘토 등록 신청</strong></h2>
      저장용데이터{{ saveParam }}
      <hr />
    </div>

    <!-- 작성폼 -->
    <div id="info" class="info h5 mb-2" style="vertical-align: middle">
      <p class="row mt-5">
        <span class="col-2 text-end"><strong>멘토 소개 제목</strong></span>
        <span class="col-4 text-start px-4"
          ><input
            type="text"
            class="form-control"
            name=""
            id=""
            v-model="mentorTitle"
        /></span>
      </p>
      <p class="row mt-5">
        <span class="col-2 text-end"><strong>이메일</strong></span>
        <span class="col-4 text-end px-4"
          ><input
            class="form-control"
            type="email"
            name=""
            id=""
            v-model="mentorEmail"
        /></span>
      </p>
      <p class="row mt-5">
        <span class="col-2 text-end"><strong>1회당 가격/시간</strong></span>
        <span class="col-2 text-start px-4">
          <input
            class="form-control"
            type="number"
            step="5000"
            name=""
            id=""
            placeholder="10,000"
            min="10000"
            max="300000"
            v-model="payPerTime" />
        </span>
        <span class="col-2 text-start px-4"
          ><select class="form-control" name="" id="" v-model="timePerTime">
            <option value="" disabled>시간 선택</option>
            <option value="1시간">1시간</option>
            <option value="2시간">2시간</option>
            <option value="3시간">3시간</option>
            <option value="4시간">4시간</option>
          </select></span
        >
      </p>
      <div class="row mt-5">
        <span class="col-2 text-end"><strong>분야</strong></span>
        <div class="col-8 text-start">
          <div class="row">
            <span
              class="col-4 px-4 pb-4 text-start"
              v-for="part in parts"
              :key="part.partCode"
              ><div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :value="part.name"
                  v-model="partList" />{{ part.name }}
              </div></span
            >
          </div>
        </div>
      </div>
      <!-- 참고링크 -->
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
          ><button
            type="button"
            class="btn btn-outline-primary"
            @click="addLink">
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
      <div class="row h5 mt-5">
        <p class="col-2 text-end"><strong>멘토 경력 및 멘토링 소개</strong></p>
        <div class="col-8 px-4">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            v-model="mentorInfo"></textarea>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <hr />
      <p class="text-end">
        <button
          type="button"
          class="btn btn-primary btn-lg"
          @click="saveMentorInfo()">
          신청하기
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      mentorTitle: "",
      mentoEmail: "",
      payPerTime: "",
      timePerTime: "",
      partList: [],

      link: { name: "", href: "" },
      linkList: [],
      mentorInfo: "",
      parts: [
        { partCode: "1", name: "프론트엔드" },
        { partCode: "2", name: "백엔드" },
        { partCode: "3", name: "풀스택" },
        { partCode: "4", name: "디자인" },
        { partCode: "5", name: "UI/ UX" },
        { partCode: "6", name: "기획" },
        { partCode: "7", name: "PM" },
        { partCode: "8", name: "데이터베이스" },
        { partCode: "9", name: "알고리즘,자료구조" },
        { partCode: "10", name: "퍼블리싱" },
        { partCode: "11", name: "데브옵스" },
        { partCode: "12", name: "데이터사이언스" }
      ],
      saveParam: {}
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
    },
    async saveMentorInfo() {
      let flag = confirm("저장?");
      if (flag) {
        alert("y");
        this.saveParam.user_id = this.$store.state.user.user_id;
        /*멘토링 분야 이거 처리가 중요! */
        this.saveParam.mentoring_dept_code = this.partList;
        this.saveParam.mentoring_title = this.mentorTitle;
        this.saveParam.mentoring_intro = this.mentorInfo;
        this.saveParam.mentor_email = this.mentoEmail;
        this.saveParam.mentoring_price = this.payPerTime;
        this.saveParam.mentoring_time = this.timePerTime;

        console.log(this.saveParam);
      } else {
        alert("n");
      }
    }
  }
};
</script>

<style scoped>
#info {
  margin-top: 16px;
}
</style>
