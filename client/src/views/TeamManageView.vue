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

            <Project
              class="ProjectSelect"
              noOptionsText="상태를 먼저 선택하세요!"
              v-model="selectedProject"
              style="width: 400px"
              :options="
                projectList
                  .filter((data) => data.statusName === selectedStatus)
                  .map((data) => {
                    return data.projectName;
                  })
              "
              @select="selected" />
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
        <!-- 팀프로젝트 제목 + 수정버튼 -->
        <div class="d-flex justify-content-center title">
          {{ selectedProject }}
        </div>
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
            <span>디스코드채널</span>
          </span>
          <span class="url mx-4" v-show="correctionMode">
            <div class="input-group">
              <span class="input-group-text">링크제목</span>
              <input type="text" aria-label="First name" class="form-control" />
            </div>
          </span>
          <span class="url mx-4" v-show="correctionMode === false">
            <span>URL</span>
            <span>https://www.naver.com</span>
          </span>
          <span class="url mx-4" v-show="correctionMode">
            <div class="input-group">
              <span class="input-group-text">URL</span>
              <input type="text" aria-label="First name" class="form-control" />
            </div>
          </span>
        </div>
        <!-- ---------------------------------------------------------------------------------------------- -->
        <!-- 팀 STATUS -->

        <div class="p-2 mb-5 d-inline-flex bd-highlight TeamStatus">
          팀 STATUS
          <TeamStatus
            class="mx-5 TeamStatusSelect"
            v-model="TeamStatus"
            placeholder="팀상태를 선택해주세요"
            :options="TeamStatusList"
            v-show="correctionMode === true" />
          <button
            class="mx-5 btn btn-primary"
            v-show="correctionMode === false">
            {{ TeamStatus }}
          </button>
        </div>
        <!-- ---------------------------------------------------------------------------------------------- -->
        <!-- 진행기간 -->
        <div class="p-2 d-inline-flex mb-5 bd-highlight">
          진행 기간
          <!-- <Datepicker
            v-model="date"
            locale="kst"
            range
            class="mx-5 datepicker"
            v-show="correctionMode === true" /> -->
          <Datepicker v-model="date" locale="kst" class="mx-5 datepicker" />
          <p class="mx-5" v-show="correctionMode === false">
            {{ date }}
          </p>
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
        <div class="p-2 mb-5 bd-highlight">관련 링크</div>
        <!-- ---------------------------------------------------------------------------------------------- -->
        <!-- 모집글 링크 -->
        <div class="p-2 mb-5 bd-highlight">
          모집글 링크
          <span class="url mx-4 text-center">
            <a href="">모집글 링크로 </a>
          </span>
        </div>
        <!-- ---------------------------------------------------------------------------------------------- -->
        <!-- 지원자관리  -->
        <div class="p-2 mb-5 d-inline-flex bd-highlight">
          지원자관리

          <div class="row mx-5">
            <div class="row applicantList">
              <div class="applicant text-center card" style="width: 25%">
                <img
                  src="@/img/maleAvatar.svg"
                  class="card-img-top"
                  alt="..." />

                <h5 class="card-title">닉네임</h5>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    이메일 evelo0702@gmail.com{{}}
                  </li>
                  <li class="list-group-item">신청일시 2022.07.02{{}}</li>
                  <li class="list-group-item">
                    신청분야 <button class="btn btn-primary">백엔드{{}}</button>
                  </li>
                  <li class="row list-group-item">
                    관심스택
                    <br />
                    <div class="col">
                      <button class="btn m-1 btn-primary Stack">
                        Javascript{{}}
                      </button>
                      <button class="btn m-1 btn-primary Stack">
                        Javascript{{}}
                      </button>
                    </div>
                    <div class="col">
                      <button class="btn m-1 btn-primary Stack">
                        Javascript{{}}
                      </button>
                      <button class="btn m-1 btn-primary Stack">
                        Javascript{{}}
                      </button>
                    </div>
                  </li>
                </ul>
                <div class="card-body">
                  <button class="btn m-1 btn-primary">승인</button>
                  <button class="btn m-1 btn-primary">거절</button>
                </div>
              </div>
              <div class="applicant text-center card" style="width: 25%">
                <img
                  src="@/img/maleAvatar.svg"
                  class="card-img-top"
                  alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
              <div class="applicant text-center card" style="width: 25%">
                <img
                  src="@/img/maleAvatar.svg"
                  class="card-img-top"
                  alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
              <div class="applicant text-center card" style="width: 25%">
                <img
                  src="@/img/maleAvatar.svg"
                  class="card-img-top"
                  alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
              <div class="applicant text-center card" style="width: 25%">
                <img
                  src="@/img/maleAvatar.svg"
                  class="card-img-top"
                  alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
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
              <div class="applicant text-center card" style="width: 25%">
                <img
                  src="@/img/maleAvatar.svg"
                  class="card-img-top"
                  alt="..." />

                <h5 class="card-title">닉네임</h5>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    이메일 evelo0702@gmail.com{{}}
                  </li>
                  <li class="list-group-item">
                    소셜링크
                    <br />
                    <a href="">기술블로그</a>{{}}
                    <br />
                    <a href="">기술블로그</a>{{}}
                  </li>
                  <li class="list-group-item">
                    역할 <button class="btn btn-primary">백엔드{{}}</button>
                  </li>
                  <li class="row list-group-item">
                    관심스택
                    <br />
                    <div class="col">
                      <button class="btn m-1 btn-primary Stack">
                        Javascript{{}}
                      </button>
                      <button class="btn m-1 btn-primary Stack">
                        Javascript{{}}
                      </button>
                    </div>
                    <div class="col">
                      <button class="btn m-1 btn-primary Stack">
                        Javascript{{}}
                      </button>
                      <button class="btn m-1 btn-primary Stack">
                        Javascript{{}}
                      </button>
                    </div>
                  </li>
                </ul>
                <div class="card-body">
                  <button class="btn m-1 btn-primary" disabled>팀원평가</button>
                </div>
              </div>
              <div class="applicant card" style="width: 25%">
                <img
                  src="@/img/maleAvatar.svg"
                  class="card-img-top"
                  alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
              <div class="applicant card" style="width: 25%">
                <img
                  src="@/img/maleAvatar.svg"
                  class="card-img-top"
                  alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
              <div class="applicant card" style="width: 25%">
                <img
                  src="@/img/maleAvatar.svg"
                  class="card-img-top"
                  alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
              <div class="applicant card" style="width: 25%">
                <img
                  src="@/img/maleAvatar.svg"
                  class="card-img-top"
                  alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ---------------------------------------------------------------------------------------------- -->
        <!-- 멘토링  -->
        <div class="p-2 mb-5 d-inline-flex bd-highlight">
          멘토링
          <div class="mx-5 List">
            <div class="row">
              <div class="col mentoring">
                <p class="mentoringName">{{}}멘토님의 {{}}멘토링 제목</p>
                <button class="btn btn-primary">
                  <i class="bi bi-check-circle-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="this.firstMentoringStatus > 1">
                  <i class="bi bi-check-circle-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="firstMentoringStatus === -1">
                  <i class="bi bi-file-excel-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="this.firstMentoringStatus > 2">
                  <i class="bi bi-check-circle-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="this.firstMentoringStatus >= 4">
                  <i class="bi bi-check-circle-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="this.firstMentoringStatus === 5">
                  <i class="bi bi-check-circle-fill"></i></button
                ><button
                  class="btn btn-primary"
                  v-show="
                    this.firstMentoringStatus != -1 &&
                    this.firstMentoringStatus < 5
                  ">
                  <i class="bi bi-circle"></i>
                </button>
                <div class="mentoringStatus">
                  <span>신청중 </span>
                  <span v-show="this.firstMentoringStatus >= 1">승인됨 </span>
                  <span v-show="this.firstMentoringStatus === -1">반려됨 </span>
                  <span v-show="this.firstMentoringStatus >= 2">결제진행 </span>
                  <span v-show="this.firstMentoringStatus >= 3">멘토링중 </span>
                  <span v-show="this.firstMentoringStatus >= 4">완료 </span>
                </div>
                <div class="mentoringBtn">
                  <button
                    class="btn btn-primary"
                    v-show="this.firstMentoringStatus === 2">
                    결제
                  </button>
                  <button
                    class="btn btn-outline-secondary"
                    v-show="this.firstMentoringStatus > 2"
                    disabled>
                    결제
                  </button>
                  <button
                    class="btn btn-outline-secondary"
                    v-show="this.firstMentoringStatus === 4">
                    멘토링종료
                  </button>
                  <button
                    class="btn btn-outline-secondary"
                    v-show="this.firstMentoringStatus > 4"
                    disabled>
                    멘토링종료
                  </button>
                  <button
                    class="btn btn-outline-secondary"
                    v-show="this.firstMentoringStatus === 5">
                    멘토평가
                  </button>
                </div>
              </div>
              <!-- 두번째 멘토링 -->
              <div class="col mentoring">
                <p class="mentoringName">{{}}멘토님의 {{}}멘토링 제목</p>
                <button class="btn btn-primary">
                  <i class="bi bi-check-circle-fill"></i>
                </button>

                <button
                  class="btn btn-primary"
                  v-show="this.SecondMentoringStatus > 1">
                  <i class="bi bi-check-circle-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="SecondMentoringStatus === -1">
                  <i class="bi bi-file-excel-fill"></i>
                </button>

                <button
                  class="btn btn-primary"
                  v-show="this.SecondMentoringStatus > 2">
                  <i class="bi bi-check-circle-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="this.SecondMentoringStatus >= 4">
                  <i class="bi bi-check-circle-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="this.SecondMentoringStatus === 5">
                  <i class="bi bi-check-circle-fill"></i></button
                ><button
                  class="btn btn-primary"
                  v-show="
                    this.SecondMentoringStatus != -1 &&
                    this.SecondMentoringStatus < 5
                  ">
                  <i class="bi bi-circle"></i>
                </button>
                <div class="mentoringStatus">
                  <span>신청중 </span>
                  <span v-show="this.SecondMentoringStatus > 1">승인됨 </span>
                  <span v-show="this.SecondMentoringStatus === -1"
                    >반려됨
                  </span>
                  <span v-show="this.SecondMentoringStatus >= 2"
                    >결제진행
                  </span>
                  <span v-show="this.SecondMentoringStatus >= 4"
                    >멘토링중
                  </span>
                  <span v-show="this.SecondMentoringStatus === 5">완료 </span>
                </div>
                <div class="mentoringBtn">
                  <button
                    class="btn btn-outline-secondary"
                    v-show="this.SecondMentoringStatus === 2">
                    결제
                  </button>
                  <button
                    class="btn btn-outline-secondary"
                    v-show="this.SecondMentoringStatus > 2"
                    disabled>
                    결제
                  </button>
                  <button
                    class="btn btn-outline-secondary"
                    v-show="this.SecondMentoringStatus === 4">
                    멘토링종료
                  </button>
                  <button
                    class="btn btn-outline-secondary"
                    v-show="this.SecondMentoringStatus > 4"
                    disabled>
                    멘토링종료
                  </button>
                  <button
                    class="btn btn-outline-secondary"
                    v-show="this.SecondMentoringStatus === 5">
                    멘토평가
                  </button>
                </div>
              </div>
            </div>
            <div class="row">
              <!-- 세번째 멘토링 -->
              <div class="col mentoring">
                <p class="mentoringName">{{}}멘토님의 {{}}멘토링 제목</p>
                <button class="btn btn-primary">
                  <i class="bi bi-check-circle-fill"></i>
                </button>

                <button
                  class="btn btn-primary"
                  v-show="this.ThirdMentoringStatus > 1">
                  <i class="bi bi-check-circle-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="ThirdMentoringStatus === -1">
                  <i class="bi bi-file-excel-fill"></i>
                </button>

                <button
                  class="btn btn-primary"
                  v-show="this.ThirdMentoringStatus > 2">
                  <i class="bi bi-check-circle-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="this.ThirdMentoringStatus >= 4">
                  <i class="bi bi-check-circle-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="this.ThirdMentoringStatus === 5">
                  <i class="bi bi-check-circle-fill"></i></button
                ><button
                  class="btn btn-primary"
                  v-show="
                    this.ThirdMentoringStatus != -1 &&
                    this.ThirdMentoringStatus < 5
                  ">
                  <i class="bi bi-circle"></i>
                </button>
                <div class="mentoringStatus">
                  <span>신청중 </span>
                  <span v-show="this.ThirdMentoringStatus > 1">승인됨 </span>
                  <span v-show="this.ThirdMentoringStatus === -1">반려됨 </span>
                  <span v-show="this.ThirdMentoringStatus >= 2">결제진행 </span>
                  <span v-show="this.ThirdMentoringStatus >= 3">멘토링중 </span>
                  <span v-show="this.ThirdMentoringStatus >= 4">완료 </span>
                </div>
                <div class="mentoringBtn">
                  <button
                    class="btn btn-outline-secondary"
                    v-show="this.ThirdMentoringStatus === 2">
                    결제
                  </button>
                  <button
                    class="btn btn-outline-secondary"
                    v-show="this.ThirdMentoringStatus > 2"
                    disabled>
                    결제
                  </button>
                  <button
                    class="btn btn-outline-secondary"
                    v-show="this.ThirdMentoringStatus === 4">
                    멘토링종료
                  </button>
                  <button
                    class="btn btn-outline-secondary"
                    v-show="this.ThirdMentoringStatus > 4"
                    disabled>
                    멘토링종료
                  </button>
                  <button
                    class="btn btn-outline-secondary"
                    v-show="this.ThirdMentoringStatus === 5">
                    멘토평가
                  </button>
                </div>
              </div>
              <!-- 네번째 멘토링 -->
              <div class="col mentoring">
                <p class="mentoringName">{{}}멘토님의 {{}}멘토링 제목</p>
                <button class="btn btn-primary">
                  <i class="bi bi-check-circle-fill"></i>
                </button>

                <button
                  class="btn btn-primary"
                  v-show="this.FourthMentoringStatus > 1">
                  <i class="bi bi-check-circle-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="FourthMentoringStatus === -1">
                  <i class="bi bi-file-excel-fill"></i>
                </button>

                <button
                  class="btn btn-primary"
                  v-show="this.FourthMentoringStatus > 2">
                  <i class="bi bi-check-circle-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="this.FourthMentoringStatus >= 4">
                  <i class="bi bi-check-circle-fill"></i>
                </button>
                <button
                  class="btn btn-primary"
                  v-show="this.FourthMentoringStatus === 5">
                  <i class="bi bi-check-circle-fill"></i></button
                ><button
                  class="btn btn-primary"
                  v-show="
                    this.FourthMentoringStatus != -1 &&
                    this.FourthMentoringStatus < 5
                  ">
                  <i class="bi bi-circle"></i>
                </button>
                <div class="mentoringStatus">
                  <span>신청중 </span>
                  <span v-show="this.FourthMentoringStatus > 1">승인됨 </span>
                  <span v-show="this.FourthMentoringStatus === -1"
                    >반려됨
                  </span>
                  <span v-show="this.FourthMentoringStatus >= 2"
                    >결제진행
                  </span>
                  <span v-show="this.FourthMentoringStatus >= 4"
                    >멘토링중
                  </span>
                  <span v-show="this.FourthMentoringStatus >= 4">완료 </span>
                </div>
                <div class="mentoringBtn">
                  <button
                    class="btn btn-outline-secondary"
                    v-show="this.FourthMentoringStatus === 2">
                    결제
                  </button>
                  <button
                    class="btn btn-outline-secondary"
                    v-show="this.FourthMentoringStatus > 2"
                    disabled>
                    결제
                  </button>
                  <button
                    class="btn btn-outline-secondary"
                    v-show="this.FourthMentoringStatus === 4">
                    멘토링종료
                  </button>
                  <button
                    class="btn btn-outline-secondary"
                    v-show="this.FourthMentoringStatus > 4"
                    disabled>
                    멘토링종료
                  </button>
                  <button
                    class="btn btn-outline-secondary"
                    v-show="this.FourthMentoringStatus === 5">
                    멘토평가
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
import Project from "@vueform/multiselect";
import TeamStatus from "@vueform/multiselect";
import RegisterbtnLayout from "../components/layouts/RegisterbtnLayout.vue";
import { ref, onMounted } from "vue";

export default {
  components: {
    Status,
    Project,
    TeamStatus,
    RegisterbtnLayout
  },
  data() {
    return {
      selectedProjectCode: "",
      datetime: "2011-08-03tdst324324234234",
      correctionMode: true,
      projectList: [
        {
          // 팀장id="",
          // 멘토여부=""
          statusCode: "01",
          statusName: "진행중",
          projectCode: "01",
          projectName: "파이썬으로 만드는 TODO LIST"
        },
        //projectCode->projectId
        {
          statusCode: "01",
          statusName: "진행중",
          projectCode: "02",
          projectName: "파이썬으로 만드는 TODO LIST"
        },
        {
          statusCode: "02",
          statusName: "진행완료",
          projectCode: "02",
          projectName: "자바스크립트 따라잡기"
        }
      ],
      selectedStatus: "",
      selectedProject: "",
      btnText: "수정하기",
      btnText2: "저장하기",
      // projectContents: {
      //   projectid
      //   urlName: "",
      //   urlAddress: "",
      //   teamStatus: "모집중",
      //   teamStatusList: [
      //     "모집중",
      //     "진행 중",
      //     "추가 모집",
      //     "진행 완료"
      //   ],
      //   deposit: 0,
      //   recruitingUrl: "",
      //   applicants: [
      //     {
      //       applyAdminId: "",
      //       applicantID: "",
      //       applicantNickName: "",
      //       likeStackCode: [],
      //       applyDeptId: "",
      //       applyStatus: "NEW",
      //       insertDate: ""
      //     }
      //   ],
      //   teamMember: [
      //     {
      //       memberId: "",
      //       memberNickName: "",
      //       memberEmail: "",
      //       role: "",
      //       likeStackCode: []
      //     }
      //   ],
      //   mentoring: [
      //     (mentoringId = ""),
      //     (mentorInfoId = ""),
      //     (MentoringStatus = "")
      //   ]
      // },
      deposit: "",
      TeamStatus: "모집중",
      TeamStatusList: ["모집중", "모집완료(진행 중)", "추가 모집", "활동 종료"],

      firstMentoringStatus: 5,
      SecondMentoringStatus: 2,
      ThirdMentoringStatus: 3,
      FourthMentoringStatus: 5
      // ,
      // projectContents: [
      //   {
      //     projectCode: "01" ,
      //     teamUrlCode:
      // }]
    };
  },
  setup() {
    const date = ref();

    onMounted(() => {
      let startDate = new Date();
      let endDate = new Date();
      date.value = [startDate, endDate];
    });
    return {
      date
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
    }
  }
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style scoped>
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
  font-size: 20%;
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
  left: 52px;
  font-size: 12px;
}
.mentoringStatus > span {
  margin-right: 38px;
}
.mentoringBtn {
  position: absolute;
  top: 120px;
  left: 205px;
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
