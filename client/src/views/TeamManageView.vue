<template>
  <div>
    <section class="banner">
      <div class="comment container">
        <h1 class="title">팀 관리</h1>
        <p class="des">팀 상태 및 공유링크를 확인하고 팀원/멘토를 평가해요</p>
      </div>
      <!-- {{ this.applicantsList }}
      {{ this.teamMembers }}
      <div>{{ this.projectList }}</div> -->
    </section>
    <!-- {{ this.applicantsList }}
    {{ this.teamMembers }}
    <hr />
    {{ user }} -->
    <!-- ---------------------------------------------------------------------------------------------- -->
    <!-- 상태선택박스 -->
    <!-- <div>MENTORINGTOTALPAGE ::: {{ this.mentoringTotalPageCount }}</div>
    <div>MENTORING 현재선택한PAGE ::: {{ this.selectedMentoringPage }}</div>
    <hr />
    <div>{{ this.applicants[0] }}</div>
    <hr />
    {{ this.applicantsList }}
    <hr />
    {{ this.applicantsList[0] }}
    <div>{{ this.teamStatusList }}</div>

    <hr />
    <div>{{ this.teamMembers[0].rating }}</div>
    <hr />
    <div>{{ this.mentoring }}</div> -->
    <!-- <div>{{ this.teamStatusList }}</div> -->
    <section class="container">
      <!-- <div>//지원자정보 (배열)>> 팀선택시변경되어야</div> -->

      <!-- <div>멘토정보 (배열)>> 팀선택시변경되어야</div>
      <div>{{ this.mentoring }}</div>
      <div>팀상태</div>
      <div>{{ this.teamStatusList }}</div>
      <div><br /></div>
      <div><br /></div>
      <div><br /></div>
      <div>프로젝트리스트</div>

      <div>{{ typeof this.projectList }}</div>
      <div>{{ this.projectList[0] }}</div>
      <div><br /></div>
      <div><br /></div>
      <div>프로젝트리스트2</div>
      <div>{{ this.projectList2 }}</div>
      <div>{{ typeof this.projectList2 }}</div>
      <div>{{ this.projectList2[0] }}</div> -->
      <!-- <div>{{ this.teamTotalInfo.data }}</div> -->

      <!-- <div>//팀원 (배열)>> 팀선택시변경되어야</div> -->
      <!--
      <div>멘토정보 (배열)>> 팀선택시변경되어야</div> -->

      <div class="row">
        <div class="col select d-inline-block">
          <div class="d-flex select">
            <Status
              class="StatusSelect"
              v-model="selectedStatus"
              :selected="selectedStatus"
              style="width: 200px"
              :options="[
                ...new Set(
                  projectList.map((data) => {
                    return data.statusName;
                  })
                )
              ]"
              @clear="deselected"
              :key="componentKey" />
            <select
              name=""
              id=""
              v-model="selectedProjectId"
              :selected="selectedProjectId"
              class="ProjectSelect"
              @change="projectIdSelect()">
              <option
                :value="project.projectId"
                :key="project.projectName"
                v-for="project in projectList.filter(
                  (p) => p.statusName === selectedStatus
                )">
                {{ project.projectName }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </section>
    <!-- 선택안했을때 보여줄 기본페이지 -->
    <div class="row justify-content-md-center" v-if="selectedProjectId === ''">
      <div class="col-md-auto emptyProject">
        <img class="" src="@/img/emptyProject.jpg" alt="" />
        <p>진행중인 프로젝트가 없습니다</p>
      </div>
    </div>
    <section class="container" v-if="selectedProjectId !== ''">
      <!-- v-if="SelectedProject" -->
      <!-- 선택해서 불러온 프로젝트 내용 -->
      <div class="d-flex flex-column bd-highlight mb-3">
        <!--수정버튼 -->
        <div class="d-flex justify-content-center title"></div>
        <div class="d-flex justify-content-end register">
          <RegisterbtnLayout
            :btnText="btnText"
            v-show="correctionMode === false"
            @click="correction()" />
          <!-- 수정하기 -->
          <RegisterbtnLayout
            :btnText="btnText2"
            v-show="correctionMode"
            @click="[watch(), saveTeamInfo(), changeStatusName()]" />
          <!--저장하기 -->
        </div>

        <!-- 팀모임링크 -->
        <!-- ////////////////////////////////////////////////////////// -->
        <div class="p-2 mb-5 bd-highlight teamUrl">
          팀모임 링크
          <span class="url mx-4 form-control" v-show="correctionMode === false">
            <span>링크제목</span>
            <span>{{ urlTitle }}</span>
          </span>
          <span class="url mx-4" v-show="correctionMode">
            <div class="input-group">
              <span class="input-group-text">링크제목</span>
              <input
                type="text"
                aria-label="First name"
                class="form-control"
                v-model="urlTitle" />
            </div>
          </span>
          <span class="url mx-4 form-control" v-show="correctionMode === false">
            <span>URL</span>
            <span>{{ urlAddress }}</span>
          </span>
          <span class="url mx-4" v-show="correctionMode">
            <div class="input-group">
              <span class="input-group-text">URL</span>
              <input
                type="text"
                aria-label="First name"
                class="form-control"
                v-model="urlAddress" />
            </div>
          </span>
        </div>

        <!-- ---------------------------------------------------------------------------------------------- -->
        <!-- 팀 STATUS -->

        <div class="p-2 mb-5 d-inline-flex bd-highlight TeamStatus">
          팀 STATUS
          <TeamStatus
            class="mx-4 TeamStatusSelect"
            v-model="teamStatus"
            placeholder="팀상태를 선택해주세요"
            :options="[
              { value: 'REC', label: '모집중' },
              { value: 'ING', label: '모집완료' },
              { value: 'ADD', label: '추가모집' },
              { value: 'FIN', label: '활동종료' }
            ]"
            v-show="correctionMode === true" />

          <button
            class="mx-4 btn btn-primary"
            v-show="correctionMode === false">
            {{ teamStatusName }}
          </button>
        </div>
        <!-- ---------------------------------------------------------------------------------------------- -->
        <!-- 진행기간 -->
        <!-- <div class="p-2 d-inline-flex mb-5 bd-highlight">
          시작일
          <Datepicker
            v-model="actualStartDate"
            locale="kst"
            class="mx-5 datepicker"
            v-show="correctionMode === true" />
          {{ actualStartDate }}
          <p v-show="correctionMode === false" class="ms-5">
            {{ actualStartDate.slice(0, 15) }}
          </p>
        </div> -->
        <!-- ---------------------------------------------------------------------------------------------- -->
        <!-- 보증금 -->
        <div class="p-2 mb-5 d-inline-flex bd-highlight">
          보증금
          <input
            type="number"
            class="deposit mx-5 form-control"
            v-model="deposit"
            v-show="correctionMode" />
          <div class="deposit mx-5" v-show="correctionMode === false">
            {{ deposit }}원
          </div>
        </div>

        <!-- ---------------------------------------------------------------------------------------------- -->
        <!-- 관련링크  -->
        <!-- <div class="p-2 mb-5 bd-highlight">관련 링크</div> -->
        <!-- ---------------------------------------------------------------------------------------------- -->
        <!-- 모집글 링크 -->
        <div class="p-2 mb-5 bd-highlight">
          모집글 링크
          <span class="url mx-4 text-start">
            <a href="{{recrutingUrl}}">모집글 링크로 </a>
          </span>
        </div>
        <!-- ---------------------------------------------------------------------------------------------- -->
        <!-- 지원자관리  -->

        <ApplicantProfileModal
          ref="modal4"
          :content="modalContent"
          :applicantData="this.applicantsList[this.memberIndex]" />
        <div class="p-2 mb-5 d-inline-flex bd-highlight">
          지원자관리

          <div class="row mx-5">
            <div class="row applicantList bg">
              <div
                class="applicant text-center card m-2"
                style="width: 240px"
                :key="index"
                v-for="(app, index) in applicantsList">
                <img
                  v-bind:src="app.userImage"
                  class="card-img-top m-2 userImage"
                  alt="..."
                  @click="[handleClick4(), transIndex(index)]" />

                <h5 class="card-title applicantNickname">
                  {{ app.applicantNickname }}
                </h5>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item applicantAccount">
                    이메일 {{ app.applicantAccount }}
                  </li>
                  <li class="list-group-item insertDate">
                    신청일시 {{ app.insertDate.substr(0, 10) }}
                  </li>
                  <li class="list-group-item">
                    신청분야
                    <button class="btn btn-primary">
                      {{ app.applyDeptCode }}
                    </button>
                  </li>
                  <li class="row list-group-item likeStackCode">
                    관심스택
                    <br />
                    <div>
                      <button
                        class="btn m-1 btn-primary Stack"
                        :key="i"
                        v-for="(stack, i) in applicantsList[index]
                          .likeStackCode">
                        {{ stack }}
                      </button>
                    </div>
                  </li>
                </ul>
                <div class="card-body">
                  <button class="btn m-1 btn-primary" @click="approve(index)">
                    승인
                  </button>
                  <button class="btn m-1 btn-primary" @click="reject(index)">
                    거절
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 모달 -->
        <!-- ////////////////////////////////////////////////////////// -->

        <!-- ---------------------------------------------------------------------------------------------- -->
        <!-- 팀원  -->
        <TeamMemberProfileModal
          ref="modal3"
          :content="modalContent"
          :memberData="this.teamMembers[this.memberIndex]" />
        <div class="p-2 mb-5 d-inline-flex bd-highlight">
          <div class="memberText">
            팀원보기
            <div class="memberRating">
              <button
                class="btn m-1 btn-primary"
                @click="handleClick"
                v-if="this.teamStatus == 'FIN'">
                팀원평가
              </button>
              <button
                v-else
                class="btn m-1 btn-primary"
                @click="handleClick"
                disabled>
                팀원평가
              </button>
            </div>
          </div>

          <div class="row mx-5">
            <div class="row applicantList bg">
              <div
                class="applicant text-center card m-2"
                style="width: 240px"
                :key="index"
                v-for="(mem, index) in teamMembers">
                <img
                  v-bind:src="mem.userImage"
                  class="card-img-top mt-2 userImage"
                  alt="..."
                  @click="[handleClick3(), transIndex(index)]" />

                <h5 class="card-title applicantNickname">
                  {{ mem.userNickname }}
                </h5>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item applicantAccount">
                    이메일 {{ mem.memberEmail }}
                  </li>
                  <li class="list-group-item userSocialUrl">
                    소셜링크
                    <a
                      href="{{url.address}}"
                      :key="index0"
                      v-for="(url, index0) in teamMembers[index].userSocialUrl"
                      >{{ url.title }}<br />
                    </a>
                  </li>
                  <li class="list-group-item">
                    역할
                    <button class="btn btn-primary role">
                      {{ mem.role }}
                    </button>
                  </li>
                  <li class="row list-group-item">
                    관심스택
                    <br />
                    <div>
                      <button
                        class="btn m-1 btn-primary Stack"
                        :key="i"
                        v-for="(stack, i) in teamMembers[index].likeStackCode">
                        {{ stack }}
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <TeamRatingModal
          ref="modal"
          :content="modalContent"
          :teammember="FinishMemberRating"
          :colors="teamRatingColor" />

        <!-- ---------------------------------------------------------------------------------------------- -->
        <!-- 멘토링  -->

        <!-- <div class="p-2 mb-5 d-inline-flex bd-highlight">
          <div class="mentoringText">
            멘토링
            <div class="mentorRating">
              <button
                class="btn btn-outline-secondary"
                @click="handleClick2"
                v-if="this.FinishMentoring.length > 0">
                멘토평가
              </button>
              <button
                class="btn btn-outline-secondary"
                @click="handleClick2"
                v-else
                disabled>
                멘토평가
              </button>
            </div>
          </div>

          <div class="List mx-5">
            <div class="row">
              <div
                class="col mentoring"
                :key="index2"
                v-for="(men, index2) in mentoring">
                <p class="mentoringName">
                  {{ men.mentorUserId }}멘토님의 {{ men.mentoringTitle }}
                </p>
                <button class="btn btn-primary">
                  <i class="bi bi-check-circle-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="men.mentoringStatus > 1">
                  <i class="bi bi-check-circle-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="men.mentoringStatus == -1">
                  <i class="bi bi-file-excel-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="men.mentoringStatus > 2">
                  <i class="bi bi-check-circle-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="men.mentoringStatus >= 4">
                  <i class="bi bi-check-circle-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="men.mentoringStatus == 5">
                  <i class="bi bi-check-circle-fill"></i></button
                ><button
                  class="btn btn-primary"
                  v-show="men.mentoringStatus != -1 && men.mentoringStatus < 5">
                  <i class="bi bi-circle"></i>
                </button>
                <div class="mentoringStatus">
                  <span>신청중 </span>
                  <span v-show="men.mentoringStatus >= 1">승인됨</span>
                  <span v-show="men.mentoringStatus == -1">반려됨 </span>
                  <span v-show="men.mentoringStatus >= 2">결제진행 </span>
                  <span v-show="men.mentoringStatus >= 3">멘토링중 </span>
                  <span v-show="men.mentoringStatus >= 4">완료 </span>
                </div>
                <div class="mentoringBtn">
                  <button
                    class="btn btn-outline-secondary"
                    v-show="men.mentoringStatus == 4">
                    멘토링종료
                  </button>
                  <button
                    class="btn btn-outline-secondary"
                    v-show="men.mentoringStatus > 4"
                    disabled>
                    멘토링종료
                  </button>
                  <button
                    class="ms-1 btn btn-outline-secondary"
                    v-show="men.mentorRating.rated == 'yes'"
                    disabled>
                    평가완료
                  </button>
                </div>
              </div>


              <MentorRatingModal
                ref="modal2"
                :content="modalContent"
                :mentoring="FinishMentoring"
                :colors="mentorRatingColor" />
            </div>
          </div>
        </div> -->
      </div>
    </section>
  </div>
</template>
<script>
import Status from "@vueform/multiselect";
// import Project from "@vueform/multiselect";
import TeamStatus from "@vueform/multiselect";
import RegisterbtnLayout from "../components/layouts/RegisterbtnLayout.vue";
import { ref } from "vue";
import TeamRatingModal from "@/components/TeamRatingModal.vue";
// import MentorRatingModal from "@/components/MentorRatingModal.vue";
import TeamMemberProfileModal from "@/components/UserProfileModal.vue";
import ApplicantProfileModal from "@/components/applicantProfileModal.vue";

export default {
  name: "App",
  components: {
    Status,
    // Project,
    TeamStatus,
    RegisterbtnLayout,
    TeamRatingModal,
    TeamMemberProfileModal,
    ApplicantProfileModal
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  data() {
    return {
      //db작업 x 변수
      teamStatusName: "",
      memberIndex: 0,
      teamRatingColor: "#ddee4d",
      mentorRatingColor: "#1379d2",
      applicantsList: [],
      btnText: "수정하기",
      btnText2: "저장하기",
      FinishMentoring: [],
      FinishMemberRating: [],
      actualStartDate: "Fri Jul 01 2022 18:33:00 GMT+0900 (한국 표준시)",
      selectedStatus: "",
      selectedProjectId: "",
      projectId: "",
      datetime: "2011-08-03tdst324324234234",
      correctionMode: true,
      projectList2: [],
      projectList: [
        {
          // 팀장id="",
          // 멘토여부=""
          statusCode: "REC",
          statusName: "진행중",
          projectId: "1",
          projectName: "#################파이썬으로 만드는 TODO LIST"
        },
        {
          statusCode: "REC",
          statusName: "진행중",
          projectId: "2",
          projectName: "#################웹게임만들기"
        },
        {
          statusCode: "FIN",
          statusName: "진행완료",
          projectId: "3",
          projectName: "####################자바스크립트 따라잡기"
        }
      ],

      projectid: "",
      urlAddress: "",
      urlTitle: "",
      teamStatus: "",

      deposit: 0,
      recruitingUrl: "",
      applicants: [
        {
          userImage: "",
          applyAdminId: "", // 무얼 위한 변수인지??
          applicantId: "",
          applicantNickName: "",
          applicantAccount: "evelo0702@gmail.com",
          likeStackCode: ["Javascript", "Java", "Python", "Node"],
          applyDeptId: "백엔드",
          applyStatus: "NEW",
          insertDate: "2022.07.02"
        }
      ],
      teamMembers: [
        {
          userImage: "",
          memberId: "",
          userNickname: "aa",
          memberEmail: "evelo0702@gmail.com",
          userSocialUrl: [
            {
              title: "기술블로그",
              address: "주소"
            },
            {
              title: "깃허브",
              address: "주소"
            }
          ],
          role: "백엔드",
          likeStackCode: ["Javascript", "Java", "Python", "Node"],
          rating: [{ comment: "c", score: 4, rated: "yes" }]
        }
      ],
      mentoring: [
        {
          mentoringId: "",
          mentorUserId: "evelo",
          mentoringTitle: "자바스크립트 가이드",
          mentoringStatus: "5",
          mentorRating: { comment: "a", score: 1, rated: "yes" }
        }
      ],
      //paging 처리 위한 object

      mentoringTotalPageCount: 0,
      selectedMentoringPage: 1, //default 1 페이지
      projectInfoParams: {
        project_id: "3",
        mentoring_page: "1"
      },
      params: {},
      /*저장용 saveParam OBJECT */
      saveParam: {},
      teamTotalInfo: {},
      sessionUserId: "3",
      initUrl: "",
      componentKey: 0

      //
    };
  },
  setup() {
    const modal = ref(null);
    const modal2 = ref(null);
    const modal3 = ref(null);
    const modal4 = ref(null);
    const modalContent = ref(["코멘트와 평점을 입력해주세요"]);
    const result = ref("");
    const result2 = ref("");
    const result3 = ref("");
    const result4 = ref("");

    const handleClick = async () => {
      const ok = await modal.value.show();
      if (ok) {
        result.value = "ok";
      } else {
        result.value = "cancel";
      }
    };
    const handleClick2 = async () => {
      const ok = await modal2.value.show();
      if (ok) {
        result2.value = "ok";
      } else {
        result2.value = "cancel";
      }
    };
    const handleClick3 = async () => {
      const ok = await modal3.value.show();
      if (ok) {
        result3.value = "ok";
      } else {
        result3.value = "cancel";
      }
    };
    const handleClick4 = async () => {
      const ok = await modal4.value.show();
      if (ok) {
        result4.value = "ok";
      } else {
        result4.value = "cancel";
      }
    };

    return {
      modal,
      modal2,
      modal3,
      modal4,
      modalContent,
      result,
      result2,
      result3,
      result4,
      handleClick,
      handleClick2,
      handleClick3,
      handleClick4
    };
  },
  created() {},
  beforeMount() {
    this.managePageInit();
    // this.sessionUserId = this.user.user_id;
  },
  mounted() {
    // this.filterStatusCode();
  },
  unmounted() {},
  methods: {
    changeStatusName() {
      if (this.teamStatus == "REC") {
        this.teamStatusName = "모집중";
      } else if (this.teamStatus == "ING") {
        this.teamStatusName = "모집완료";
      } else if (this.teamStatus == "ADD") {
        this.teamStatusName = "추가모집";
      } else if (this.teamStatus == "FIN") {
        this.teamStatusName = "활동종료";
      }
    },
    async saveTeamInfo() {
      /* eslint-disable */
      let flag = confirm("저장하시겠습니까? ");
      if (flag) {
        let data = {};
        let project_id = this.selectedProjectId;
        // this.params.selectedPage = this.selectedMentoringPage;
        //입력 없이 등록 버튼 누르는 경우 예외처리
        // 댓글 입력 없이 등록 버튼 누르는 경우 예외처리
        data.project = {};
        data.project_status = {};
        data.project.meeting_url = this.urlAddress;
        data.project.meeting_url_title = this.urlTitle;
        data.project.status_code = this.teamStatus;
        data.project.warranty = this.deposit;
        data.project_status.project_id = project_id;
        data.project_status.project_status = this.teamStatus;
        data.project_status.changer = this.$store.state.user.user_id;

        // saveTeamManageInfo
        const r = await this.$patch(
          // TODO: axios.defaults.baseURL로 변경
          `/manage/saveTeamManageInfo/${project_id}`,
          data
        );
        if (r.status === 200) {
          this.$router.go(); /* refresh  */
        }
        console.log(this.r);
      } else {
        return;
      }
      // selectedPage가 바뀔 때.에를들어 기존1에서 2를 골랐을 때 색깔 바뀌는 처리 HOW ?
    },
    approve(index) {
      this.applicantsList[index].applyStatus = "ACC";
    },
    reject(index) {
      this.applicantsList[index].applyStatus = "REJ";
    },
    transIndex(index) {
      this.memberIndex = index;
    },
    modalOn() {
      this.modalStatus = true;
    },
    modalOff() {
      this.modalStatus = false;
    },
    async managePageInit() {
      // 팀STATUS 필드 셀렉박스용
      this.teamStatusList = await this.$get(
        `/common/getTeamStatusListForTeamManage`
      );
      // 내 SESSIONID기준으로  팀 리스트끌고오기
      this.initUrl = `/manage/getTeamListForManage/`;
      this.initUrl += this.sessionUserId;
      this.projectList = await this.$get(this.initUrl, this.projectInfoParams);
      // 가져온 리스트 첫번째 값으로 팀정보 다끌고오기
      this.selectedProjectId = this.projectList[0].projectId;
      this.selectedStatus = this.projectList[0].statusName;
      this.projectIdSelect(); /* 팀개요 정보 다가져옴. */
    },
    filterApplicant() {
      for (let i = 0; i < this.applicants.length; i++) {
        if (this.applicants[i].applyStatus == "NEW") {
          this.applicantsList.push(this.applicants[i]);
        }
      }
    },
    filterFinishMentoring() {
      this.FinishMentoring = [];
      for (let i = 0; i < this.mentoring.length; i++) {
        if (
          this.mentoring[i].mentoringStatus == "5" &&
          this.mentoring[i].mentorRating[0].rated == "no"
        ) {
          this.FinishMentoring.push(this.mentoring[i]);
        }
      }
    },
    filterFinishMemberRating() {
      this.FinishMemberRating = [];
      for (let i = 0; i < this.teamMembers.length; i++) {
        if (this.teamMembers[i].rating[0].rated == "no") {
          this.FinishMemberRating.push(this.teamMembers[i]);
        }
      }
    },
    selected() {
      console.log("SelectedStatus : ", this.SelectedStatus);
      console.log("SelectedProject : ", this.SelectedProject);
    },
    deselected() {
      this.SelectedProject = "";
    },
    correction() {
      this.correctionMode = true;
    },
    watch() {
      this.correctionMode = false;
    },

    getMentorTxt: function (txt) {
      this.MentorRatingComment = txt;
    },
    getMentorRating: function (rating) {
      this.MentorRatingScore = rating;
    },
    forceRerender() {
      this.componentKey += 1;
    },
    stringToArray(string) {
      return string.split(",");
    },
    // 페이지 클릭시점에 멘토링정보 끌고오는 메서드
    //  DB에서 받은 정보는 :: this.mentoring 에 꽃힌다
    async getMentoringsBySelectedPage() {
      this.params.project_id = this.selectedProjectId;
      this.params.selectedPage = this.selectedMentoringPage;
      // mentoringInfo 가져오고 filter동작시킬 것!
      this.mentoring = await this.$post(
        // TODO: axios.defaults.baseURL로 변경
        `/manage/getMentoringsBySelectedPage`,
        this.params
      );
      this.filterFinishMentoring();
      this.selectedMentoringPage = this.params.selectedPage;
      // selectedMentoringPage가 바뀔 때.에를들어 기존1에서 2를 골랐을 때 색깔 바뀌는 처리 HOW ?
    },

    // 선택 하는 순간에 해당 project 정보 teamTotalInfo 끌어옴
    async projectIdSelect() {
      this.projectInfoParams.project_id = this.selectedProjectId;
      // teamTotalInfo .
      this.teamTotalInfo = await this.$post(
        // TODO: axios.defaults.baseURL로 변경
        `/manage/getProjectInfo`,
        this.projectInfoParams
      );
      this.teamStatus = this.teamTotalInfo.data.basicInfo.statusCode;
      // 팀모임 URL
      this.urlTitle = this.teamTotalInfo.data.basicInfo.meetingUrlTitle;
      this.urlAddress = this.teamTotalInfo.data.basicInfo.meetingUrl;
      //보증금
      this.deposit = this.teamTotalInfo.data.basicInfo.warranty;

      //지원자정보 (배열)
      this.applicants = this.teamTotalInfo.data.applicants;
      for (let q = 0; q < this.applicants.length; q++) {
        let str = this.applicants[q].likeStackCode.slice(
          0,
          this.applicants[q].likeStackCode.length - 1
        );
        this.applicants[q].likeStackCode = str.split(",");
      }
      this.filterApplicant();
      //멤버정보 (배열)
      this.teamMembers = this.teamTotalInfo.data.members;
      for (let q = 0; q < this.teamMembers.length; q++) {
        let str = this.teamMembers[q].likeStackCode.slice(
          0,
          this.teamMembers[q].likeStackCode.length - 1
        );
        this.teamMembers[q].likeStackCode = str.split(",");
      }
      this.filterFinishMemberRating();
      //멘토링페이지정보
      this.mentoringTotalPageCount =
        this.teamTotalInfo.data.mentoringTotalPageCount.totalCount;
      this.mentoring = this.teamTotalInfo.data.mentorings;
      this.filterFinishMentoring();
    }
  }
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style scoped>
.ProjectSelect {
  border: 1px solid #d1d5db;
  border-radius: 4px;
  width: 400px;
}

.ProjectSelect:focus {
  box-shadow: 0 0 0 var(--ms-ring-width, 3px)
    var(--ms-ring-color, rgba(16, 185, 129, 0.188));
  border: 0px;
}

.banner {
  margin-bottom: 42px;
  height: 200px;
  background-color: #1379d2;
}
.comment {
  padding-top: 50px;
  color: white;
  font-weight: 900;
}
.select {
  float: right;
}
.StatusSelect,
.ProjectSelect {
  margin: 0;
}
.d-flex {
  column-gap: 12px;
}
.d-flex.select {
  justify-content: flex-end;
}
div.title {
  font-size: 30px;
  margin-top: 10px;
}
section.container {
  margin-bottom: 10px;
}
div.register {
  margin-top: 10px;
}
.noData {
  display: block;
  height: 300px;
}
.teamUrl > span {
  margin: 10px;
}
.url > span {
  margin: 0px 20px;
}
.url {
  display: inline-block;
  width: 40%;
}
.url > span:first-child {
  font-size: 20px;
  font-weight: bold;
}
.TeamStatusSelect {
  width: 300px;
  margin: 0px 20px;
}
.datepicker {
  width: 400px;
}
.TeamStatus > button {
  margin: 0px 20px;
}
.deposit {
  width: 300px;
  margin: 0px 80px;
}
.teamMember {
  margin-left: 14px;
}
div.applicantList {
  max-width: 1000px;
  overflow-x: auto;
  flex-wrap: nowrap;
}
.Stack {
  font-size: 12px;
}
.likeStackCode {
  height: 150px;
}
.List {
  max-width: 950px;
  height: 400px;
  background-color: gainsboro;
  overflow-x: auto;
  flex-wrap: nowrap;
}

div.col.mentoring {
  width: 470px;
  height: 160px;
  display: flex;
  flex: 0 0 0%;
  background: white;
  margin: 10px;
  padding-left: 30px;
  align-items: center;
  position: relative;
}
.List > div {
  height: auto;
  --bs-gutter-x: auto;
}
.mentoring > button {
  margin-right: 20px;
  margin-left: 20px;
}

.mentoringName {
  position: absolute;
  bottom: 100px;
  font-weight: bold;
  font-size: 20px;
}
.mentoringStatus {
  position: absolute;
  top: 100px;
  left: 55px;
  font-size: 12px;
}
.mentoringStatus > span {
  margin-right: 40px;
}
.mentoringStatus > span:nth-child(2) {
  margin-right: 40px;
}
.mentoringStatus > span:nth-child(4) {
  margin-right: 40px;
}
.mentoringStatus > span:nth-child(5) {
  margin-right: 40px;
}

.mentoringBtn {
  position: absolute;
  top: 120px;
  left: 275px;
  font-size: 12px;
}
.mentoringBtn > button {
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-right: 12px;
}
button.btn.btn-primary {
  background-color: #49c0d0;
  border-color: #49c0d0;
}

.emptyProject {
  min-width: 1400;
  min-height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.emptyProject > img {
  width: 400px;
  height: 400px;
}
.emptyProject > p {
  font-size: 24px;
  font-weight: bold;
}
.partTo > input {
  display: inline;
  margin-right: 5px;
}
.userSocialUrl {
  height: 200px;
}
.userSocialUrl > a {
  display: block;
}
p.form-control {
  width: 200px;
  display: inline-block;
  margin-right: 5px;
}
.row.applicantList.bg {
  background-color: gainsboro;
  width: 2000px;
  height: 650px;
  padding: 10px;
}
.mentoringText {
  position: relative;
}
.mentorRating {
  position: absolute;
  width: 100px;
  left: -10px;
}
.memberText {
  position: relative;
}
.memberRating {
  position: absolute;
  width: 100px;
  left: -10px;
}
.userImage {
  width: 200px;
  height: 150px;
}
</style>
