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
      <div class="row">
        <div class="col select d-inline-block">
          <div class="d-flex select">
            <Status
              class="StatusSelect"
              v-model="selectedStatus"
              style="width: 200px"
              :options="[
                ...new Set(
                  projectList.map((data) => {
                    return data.statusName;
                  })
                )
              ]"
              @clear="deselected" />

            <!-- <Project
              class="ProjectSelect"
              noOptionsText="상태를 먼저 선택하세요!"
              v-model="selectedProjectId"
              style="width: 400px"
              :options="[
                projectList
                  .filter((data) => data.statusName === selectedStatus)
                  .map((data) => {
                    return data.projectName;
                  })
              ]"
              @select="selected" /> -->
            <select
              name=""
              id=""
              v-model="selectedProjectId"
              class="ProjectSelect">
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
    <div class="row justify-content-md-center" v-if="selectedProject === ''">
      <div class="col-md-auto">
        <i class="bi bi-exclamation-diamond">선택된 프로젝트가 없습니다.</i>
      </div>
    </div>
    <section class="container">
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
        <!-- <div class="p-2 d-inline-flex mb-5 bd-highlight">
          종료 예정일 -->
        <!-- <Datepicker
            v-model="date"
            locale="kst"
            range
            class="mx-5 datepicker"
            v-show="correctionMode === true" /> -->
        <!-- <Datepicker
            v-model="endDate"
            locale="kst"
            class="mx-5 datepicker"
            v-show="correctionMode === true" />
          <p class="mx-5" v-show="correctionMode === false">
            {{ endDate }}
          </p>
        </div> -->
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
        <div class="p-2 mb-5 bd-highlight">관련 링크</div>
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

                <h5 class="card-title">{{ app.applicantNickName }}</h5>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    이메일 {{ app.applicantAccount }}
                  </li>
                  <li class="list-group-item">신청일시 {{ app.insertDate }}</li>
                  <li class="list-group-item">
                    신청분야
                    <button class="btn btn-primary">
                      {{ app.applyDeptId }}
                    </button>
                  </li>
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

                <h5 class="card-title">{{ mem.memberNickName }}</h5>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item">이메일 {{ mem.memberEmail }}</li>
                  <li class="list-group-item">
                    소셜링크
                    <br />
                    <a
                      href="{{url.address}}"
                      :key="index0"
                      v-for="(url, index0) in teamMembers[index].userSocialUrl"
                      >{{ url.title }}<br
                    /></a>
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
                :item="mem"
                :content="modalContent"
                v-on:childTxt="getTxt"
                v-on:childRating="getRating"
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
                <p class="mentoringName">
                  {{ men.mentorUserId }}멘토님의 {{ men.mentoringTitle }}
                </p>
                <button class="btn btn-primary">
                  <i class="bi bi-check-circle-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="men.MentoringStatus > 1">
                  <i class="bi bi-check-circle-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="men.MentoringStatus === -1">
                  <i class="bi bi-file-excel-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="men.MentoringStatus > 2">
                  <i class="bi bi-check-circle-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="men.MentoringStatus >= 4">
                  <i class="bi bi-check-circle-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="men.MentoringStatus == 5">
                  <i class="bi bi-check-circle-fill"></i></button
                ><button
                  class="btn btn-primary"
                  v-show="men.MentoringStatus != -1 && men.MentoringStatus < 5">
                  <i class="bi bi-circle"></i>
                </button>
                <div class="mentoringStatus">
                  <span>신청중 </span>
                  <span v-show="men.MentoringStatus >= 1">승인됨 </span>
                  <span v-show="men.MentoringStatus === -1">반려됨 </span>
                  <span v-show="men.MentoringStatus >= 2">결제진행 </span>
                  <span v-show="men.MentoringStatus >= 3">멘토링중 </span>
                  <span v-show="men.MentoringStatus >= 4">완료 </span>
                </div>
                <div class="mentoringBtn">
                  <button
                    class="btn btn-outline-secondary"
                    v-show="men.MentoringStatus == 4">
                    멘토링종료
                  </button>
                  <button
                    class="btn btn-outline-secondary"
                    v-show="men.MentoringStatus > 4"
                    disabled>
                    멘토링종료
                  </button>
                  <button
                    class="btn btn-outline-secondary"
                    v-show="men.MentoringStatus == 5"
                    @click="handleClick2">
                    멘토평가
                    <MentorRatingModal
                      ref="modal2"
                      :content="modalContent"
                      v-on:MentorTxt="getMentorTxt"
                      v-on:MentorRating="getMentorRating"
                      :colors="mentorRatingColor" />
                  </button>
                </div>
              </div>
            </div>

            <nav aria-label="...">
              <ul class="pagination pagination-sm justify-content-center">
                <li class="page-item active" aria-current="page">
                  <span class="page-link">1</span>
                </li>
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
      teamRatingColor: "#ddee4d",
      mentorRatingColor: "#1379d2",
      endDate: "",
      btnText: "수정하기",
      btnText2: "저장하기",
      selectedStatus: "",
      selectedProjectId: "",
      datetime: "2011-08-03tdst324324234234",
      correctionMode: true,
      projectList: [
        {
          // 팀장id="",
          // 멘토여부=""
          statusCode: "01",
          statusName: "진행중",
          projectId: "01",
          projectName: "파이썬으로 만드는 TODO LIST"
        },
        {
          statusCode: "01",
          statusName: "진행중",
          projectId: "02",
          projectName: "웹게임만들기"
        },
        {
          statusCode: "02",
          statusName: "진행완료",
          projectId: "03",
          projectName: "자바스크립트 따라잡기"
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
          applyAdminId: "",
          applicantID: "",
          applicantNickName: "",
          applicantAccount: "evelo0702@gmail.com",
          likeStackCode: ["Javascript", "Java", "Python", "Node"],
          applyDeptId: "백엔드",
          applyStatus: "NEW",
          insertDate: "2022.07.02"
        },
        {
          applyAdminId: "",
          applicantID: "",
          applicantNickName: "",
          applicantAccount: "evelo0702@gmail.com",
          likeStackCode: ["Javascript", "Java", "Python", "Node"],
          applyDeptId: "백엔드",
          applyStatus: "NEW",
          insertDate: "2022.07.02"
        },
        {
          applyAdminId: "",
          applicantID: "",
          applicantNickName: "",
          applicantAccount: "evelo0702@gmail.com",
          likeStackCode: ["Javascript", "Java", "Python", "Node"],
          applyDeptId: "백엔드",
          applyStatus: "NEW",
          insertDate: "2022.07.02"
        },
        {
          applyAdminId: "",
          applicantID: "",
          applicantNickName: "",
          applicantAccount: "evelo0702@gmail.com",
          likeStackCode: ["Javascript", "Java", "Python", "Node"],
          applyDeptId: "백엔드",
          applyStatus: "NEW",
          insertDate: "2022.07.02"
        },
        {
          applyAdminId: "",
          applicantID: "",
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
          memberNickName: "",
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
          ratingComment: "",
          ratingScore: 0
        },
        {
          memberId: "",
          memberNickName: "",
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
          ratingComment: "",
          ratingScore: 0
        },
        {
          memberId: "",
          memberNickName: "",
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
          ratingComment: "",
          ratingScore: 0
        },
        {
          memberId: "",
          memberNickName: "",
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
          ratingComment: "",
          ratingScore: 0
        },
        {
          memberId: "",
          memberNickName: "",
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
          ratingComment: "",
          ratingScore: 0
        },
        {
          memberId: "",
          memberNickName: "",
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
          ratingComment: "",
          ratingScore: 0
        }
      ],
      mentoring: [
        {
          mentoringId: "",
          mentorUserId: "evelo",
          mentoringTitle: "자바스크립트 가이드",
          mentoringStatus: "5",
          mentorRatingComment: "",
          mentorRatingScore: ""
        },
        {
          mentoringId: "",
          mentorUserId: "evelo",
          mentoringTitle: "자바스크립트 가이드",
          mentoringStatus: "3",
          mentorRatingComment: "",
          mentorRatingScore: ""
        },
        {
          mentoringId: "",
          mentorUserId: "evelo",
          mentoringTitle: "자바스크립트 가이드",
          mentoringStatus: "2",
          mentorRatingComment: "",
          mentorRatingScore: ""
        },
        {
          mentoringId: "",
          mentorUserId: "evelo",
          mentoringTitle: "자바스크립트 가이드",
          mentoringStatus: "1",
          mentorRatingComment: "",
          mentorRatingScore: ""
        }
      ]

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
  mounted() {},
  unmounted() {},
  methods: {
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
    getTxt: function (txt0) {
      this.ratingComment = txt0;
    },
    getRating: function (rating0) {
      this.ratingScore = rating0;
    },
    getMentorTxt: function (txt) {
      this.MentorRatingComment = txt;
    },
    getMentorRating: function (rating) {
      this.MentorRatingScore = rating;
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
  background-color: #a984db;
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
  left: 63px;
  font-size: 12px;
}
.mentoringStatus > span {
  margin-right: 38px;
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
</style>
