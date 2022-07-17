<template>
  <div>
    <section class="banner">
      <div class="comment container">
        <h1 class="title">팀 관리</h1>
        <p class="des">팀 상태 및 공유링크를 확인하고 팀원/멘토를 평가해요</p>
      </div>
    </section>
    <!-- ---------------------------------------------------------------------------------------------- -->
    <!-- 상태선택박스 -->

    <section class="container">
      <!-- <div>//지원자정보 (배열)>> 팀선택시변경되어야</div>
      <div>{{ this.applicants }}</div>
      
      <div>멘토정보 (배열)>> 팀선택시변경되어야</div>
      <div>{{ this.mentoring }}</div>
      <div>팀상태</div>
      <div>{{ this.teamStatusList }}</div>
      <div><br /></div>
      <div><br /></div>
      <div><br /></div>
      <div>프로젝트리스트</div>
      <div>{{ this.projectList }}</div>
      <div>{{ typeof this.projectList }}</div>
      <div>{{ this.projectList[0] }}</div>
      <div><br /></div>
      <div><br /></div>
      <div>프로젝트리스트2</div>
      <div>{{ this.projectList2 }}</div>
      <div>{{ typeof this.projectList2 }}</div>
      <div>{{ this.projectList2[0] }}</div>
      <div>{{ this.teamTotalInfo.data }}</div> -->
      <!-- <div>//팀원 (배열)>> 팀선택시변경되어야</div>
      <div>{{ this.teamMembers }}</div> -->
      <div>멘토정보 (배열)>> 팀선택시변경되어야</div>
      <div>{{ this.mentoring }}</div>
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
          <RegisterbtnLayout
            :btnText="btnText2"
            v-show="correctionMode"
            @click="watch()" />
        </div>

        <!-- ---------------------------------------------------------------------------------------------- -->
        <!-- 팀 모임 url -->
        <div class="p-2 mb-5 bd-highlight teamUrl">
          팀모임 링크
          <span class="url mx-4" v-show="correctionMode === false">
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
          <span class="url mx-4" v-show="correctionMode === false">
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
            class="mx-5 TeamStatusSelect"
            v-model="teamStatus"
            placeholder="팀상태를 선택해주세요"
            :options="teamStatusList"
            v-show="correctionMode === true" />
          <button
            class="mx-5 btn btn-primary"
            v-show="correctionMode === false">
            {{ teamStatus }}
          </button>
        </div>
        <!-- ---------------------------------------------------------------------------------------------- -->
        <!-- 진행기간 -->
        <div class="p-2 d-inline-flex mb-5 bd-highlight">
          시작일
          <Datepicker
            v-model="date"
            locale="kst"
            range
            class="mx-5 datepicker"
            v-show="correctionMode === true" />
          <!-- <Datepicker
            v-model="endDate"
            locale="kst"
            class="mx-5 datepicker"
            v-show="correctionMode === true" />
          <p class="mx-5" v-show="correctionMode === false">
            {{ endDate }}
          </p> -->
        </div>
        <!-- ---------------------------------------------------------------------------------------------- -->
        <!-- 보증금 -->
        <div class="p-2 mb-5 d-inline-flex bd-highlight">
          보증금
          <input
            type="number"
            class="deposit"
            v-model="deposit"
            v-show="correctionMode" />
          <div class="deposit" v-show="correctionMode === false">
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
          <span class="url mx-4 text-center">
            <a href="{{recrutingUrl}}">모집글 링크로 </a>
          </span>
        </div>
        <!-- ---------------------------------------------------------------------------------------------- -->
        <!-- 지원자관리  -->
        <div class="p-2 mb-5 d-inline-flex bd-highlight">
          지원자관리

          <div class="row mx-5">
            <div class="row applicantList">
              <div
                class="applicant text-center card"
                style="width: 240px"
                :key="index"
                v-for="(app, index) in applicants">
                <img
                  src="@/img/maleAvatar.svg"
                  class="card-img-top"
                  alt="..." />

                <h5 class="card-title">{{ app.applicantNickname }}</h5>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    이메일 {{ app.applicantAccount }}
                  </li>
                  <li class="list-group-item">
                    신청일시 {{ app.insertDate.substr(0, 10) }}
                  </li>
                  <!-- <li class="list-group-item">
                    신청분야
                    <button class="btn btn-primary">
                      {{ app.applyDeptId }}
                    </button>
                  </li> -->
                  <li class="row list-group-item">
                    관심스택
                    <br />
                    <div>
                      <button
                        class="btn m-1 btn-primary Stack"
                        :key="i"
                        v-for="(stack, i) in applicants[index].likeStackCode">
                        {{ stack }}
                      </button>
                    </div>
                  </li>
                </ul>
                <div class="card-body">
                  <button class="btn m-1 btn-primary">승인</button>
                  <button class="btn m-1 btn-primary">거절</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ---------------------------------------------------------------------------------------------- -->
        <!-- 팀원  -->
        <div class="p-2 mb-5 d-inline-flex bd-highlight">
          팀원정보

          <div class="row mx-5">
            <div class="row applicantList">
              <div
                class="applicant text-center card"
                style="width: 240px"
                :key="index"
                v-for="(mem, index) in teamMembers">
                <img
                  src="@/img/maleAvatar.svg"
                  class="card-img-top"
                  alt="..." />

                <h5 class="card-title">{{ mem.userNickname }}</h5>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item">이메일 {{ mem.memberEmail }}</li>
                  <li class="list-group-item">
                    소셜링크
                    <br />
                    <a
                      href="{{url.address}}"
                      :key="index0"
                      v-for="(url, index0) in teamMembers[index].userSocialUrl"
                      >{{ url.title }}<br />
                    </a>
                  </li>
                  <li class="list-group-item">
                    역할 <button class="btn btn-primary">{{ mem.role }}</button>
                  </li>
                  <li class="row list-group-item">
                    관심스택
                    <br />
                    <div class="col">
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
            <div class="card-body">
              <button class="btn m-1 btn-primary" @click="handleClick">
                팀원평가
              </button>
              <TeamRatingModal
                ref="modal"
                :content="modalContent"
                :teammember="teamMembers"
                :colors="teamRatingColor" />
            </div>
          </div>
        </div>
        <!-- ---------------------------------------------------------------------------------------------- -->
        <!-- 멘토링  -->
        <div class="p-2 mb-5 d-inline-flex bd-highlight">
          멘토링
          <div class="mx-5 List">
            <div class="row">
              <div
                class="col mentoring"
                :key="index2"
                v-for="(men, index2) in mentoring">
                <p>{{ men.mentorRating }}</p>
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
              <button class="btn btn-outline-secondary" @click="handleClick2">
                멘토평가
                <MentorRatingModal
                  ref="modal2"
                  :content="modalContent"
                  :mentoring="FinishMentoring"
                  :colors="mentorRatingColor" />
              </button>
            </div>
            <!-- <button @click="filterFMentoring">zzzzzz</button> -->
            <nav aria-label="...">
              <ul class="pagination pagination-sm justify-content-center">
                <li class="page-item active" aria-current="page">
                  <span class="page-link">1</span>
                </li>
                <!-- 하드코딩 탈출 필요 -->
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
              </ul>
            </nav>
          </div>
        </div>
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
import MentorRatingModal from "@/components/MentorRatingModal.vue";

export default {
  name: "App",
  components: {
    Status,
    // Project,
    TeamStatus,
    RegisterbtnLayout,
    TeamRatingModal,
    MentorRatingModal
  },
  data() {
    return {
      FinishMentoring: [],
      teamRatingColor: "#ddee4d",
      mentorRatingColor: "#1379d2",
      endDate: "",
      btnText: "수정하기",
      btnText2: "저장하기",
      selectedStatus: "",
      selectedProjectId: "",
      datetime: "2011-08-03tdst324324234234",
      correctionMode: true,
      projectList2: [],
      projectList: [
        {
          // 팀장id="",
          // 멘토여부=""
          statusCode: "FIN",
          statusName: "진행중",
          projectId: "1",
          projectName: "#################파이썬으로 만드는 TODO LIST"
        },
        {
          statusCode: "FIN",
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
      teamStatus: "모집중",
      teamStatusList: ["모집중", "진행 중", "추가 모집", "진행 완료"],
      deposit: 0,
      recruitingUrl: "",
      applicants: [
        {
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
          memberId: "",
          memberNickName: "aa",
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
        },
        {
          memberId: "",
          memberNickName: "bb",
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
          rating: [{ comment: "c", score: 3, rated: "yes" }]
        },
        {
          memberId: "",
          memberNickName: "cc",
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
          rating: [{ comment: "c", score: 3, rated: "yes" }]
        },
        {
          memberId: "",
          memberNickName: "cc",
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
          rating: [{ comment: "c", score: 3, rated: "yes" }]
        },
        {
          memberId: "",
          memberNickName: "cc",
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
          rating: [{ comment: "c", score: 3, rated: "yes" }]
        },
        {
          memberId: "",
          memberNickName: "cc",
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
          rating: [{ comment: "c", score: 3, rated: "yes" }]
        },
        {
          memberId: "",
          memberNickName: "cc",
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
          rating: [{ comment: "c", score: 3, rated: "yes" }]
        }
      ],
      mentoring: [
        {
          mentoringId: "",
          mentorUserId: "evelo",
          mentoringTitle: "자바스크립트 가이드",
          mentoringStatus: "5",
          mentorRating: { comment: "a", score: 1, rated: "yes" }
        },
        {
          mentoringId: "",
          mentorUserId: "evelo2",
          mentoringTitle: "자바스크립트 가이드",
          mentoringStatus: "5",

          mentorRating: { comment: "b", score: 2, rated: "no" }
        },
        {
          mentoringId: "",
          mentorUserId: "evelo3",
          mentoringTitle: "자바스크립트 가이드",
          mentoringStatus: "3",

          mentorRating: { comment: "c", score: 3 }
        },
        {
          mentoringId: "",
          mentorUserId: "evelo4",
          mentoringTitle: "자바스크립트 가이드",
          mentoringStatus: "5",
          mentorRating: { comment: "d", score: 4, rated: "no" }
        }
      ],
      //paging 처리 위한 object

      mentoringTotalPageCount: 0,
      selectedPage: 1, //default 1 페이지
      projectInfoParams: {
        project_id: "3",
        mentoring_page: "1"
      },
      params: {},
      //김인호 test
      paramsForTest: {
        c2: "zz",
        c3: "xx",
        progress_method: "OFF",
        status_code: "FIN",
        main_area_code: "M08",
        sub_area_code: "S125",
        stack_code: "J02,R01"
      },

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
    const modalContent = ref(["코멘트와 평점을 입력해주세요"]);
    const result = ref("");
    const result2 = ref("");
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
    return {
      modal,
      modal2,
      modalContent,
      result,
      result2,
      handleClick,
      handleClick2
    };
  },
  created() {},
  beforeMount() {
    this.managePageInit();
  },
  mounted() {},
  unmounted() {},
  methods: {
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
    filterFinishMentoring() {
      for (let i = 0; i < this.mentoring.length; i++) {
        if (
          this.mentoring[i].mentoringStatus == "5" &&
          this.mentoring[i].mentorRating[0].rated == "no"
        ) {
          this.FinishMentoring.push(this.mentoring[i]);
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
      this.params.selectedPage = this.selectedPage;
      // mentoringInfo
      this.mentoring = await this.$post(
        // TODO: axios.defaults.baseURL로 변경
        `/manage/getMentoringsBySelectedPage`,
        this.params
      );
      // selectedPage가 바뀔 때.에를들어 기존1에서 2를 골랐을 때 색깔 바뀌는 처리 HOW ?
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
      // 팀모임 URL
      this.urlTitle = this.teamTotalInfo.data.basicInfo.meetingUrl;
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
      //멤버정보 (배열)
      this.teamMembers = this.teamTotalInfo.data.members;
      for (let q = 0; q < this.teamMembers.length; q++) {
        let str = this.teamMembers[q].likeStackCode.slice(
          0,
          this.teamMembers[q].likeStackCode.length - 1
        );
        this.teamMembers[q].likeStackCode = str.split(",");
      }
      //멘토링페이지정보
      this.mentoringTotalPageCount =
        this.teamTotalInfo.data.mentoringTotalPageCount.totalCount;
      //멘토정보 최초 앞 4개만 가져옴 (배열)
      this.mentoring = this.teamTotalInfo.data.mentorings;
      /*this.filterFinishMentoring(); */
      this.filterFinishMentoring();
    },
    // 저장 버튼 클릭 시 DATA UPDATE
    async saveTeamManageInfo() {
      this.params.project_id = this.selectedProjectId;
      this.params.selectedPage = this.selectedPage;
      this.params.meeting_url = this.urlAddress;
      this.params.meeting_url_title = this.urlTitle;
      this.params.status_code = this.teamStatus;
      this.params.warranty = this.deposit;
      // saveTeamManageInfo
      this.result = await this.$post(
        // TODO: axios.defaults.baseURL로 변경
        `/manage/saveTeamManageInfo`,
        this.params
      );
      // selectedPage가 바뀔 때.에를들어 기존1에서 2를 골랐을 때 색깔 바뀌는 처리 HOW ?
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
  width: 30%;
  border: 2px solid black;
  border-radius: 10px;
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
  margin: 0px 80px;
}
div.applicantList {
  max-width: 1000px;
  overflow-x: auto;
  flex-wrap: nowrap;
}
.Stack {
  font-size: 12px;
}
.List {
  width: 1000px;
  height: 400px;
  background-color: gainsboro;
}
.mentoring {
  max-width: 460px;
  height: 160px;
  display: flex;
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
  margin-right: 45px;
}
.mentoringStatus > span:nth-child(2) {
  margin-right: 45px;
}
.mentoringStatus > span:nth-child(4) {
  margin-right: 40px;
}
.mentoringStatus > span:nth-child(5) {
  margin-right: 45px;
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
</style>
