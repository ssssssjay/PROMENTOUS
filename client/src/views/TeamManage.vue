<template>
  <div class="rounded container">
    <div class="rounded banner tmg_background_color">
      <div class="rounded comment">
        <h1>팀 개요</h1>
        <div>팀 상태 및 공유링크를 확인하고 팀원/멘토를 평가해요</div>
        <select name="" id="">
          <option value="">진행 중</option>
        </select>
        <select name="" id="">
          <option value="">VUE+NODEJS프로젝트</option>
          <option value="">Vanila JS 스터디</option>
        </select>
      </div>
      <div>
        <div class="input-group">생략 예정</div>
        <div class="form-check form-switch input-group">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault" />
          <label class="form-check-label" for="flexSwitchCheckDefault"> </label>
        </div>
      </div>
    </div>

    <div class="rounded mt-4">
      <div class="rounded col-md-10" style="display: inline-block">
        <h3 class="rounded">VUE+NODEJS프로젝트</h3>
      </div>

      <div class="rounded button col-md-2" style="display: inline-block">
        <button type="button" class="rounded btn btn-secondary">
          수정하기
        </button>
      </div>
    </div>

    <div class="rounded rounded-3 div_brder_toDel">
      <div id=" " class="rounded rounded-3">
        <div class="rounded row g-0">
          <div class="rounded col-md-2 div_brder_toDel3 tmg_mainfield_name">
            팀 모임 URL
          </div>

          <div class="rounded col-md-10">
            <div class="rounded input-group mb-3">
              <div class="rounded input-group-prepend">
                <span class="rounded tmg_input_title" id="">링크 제목</span>
              </div>
              <input
                type="text"
                class="rounded form-control"
                placeholder="11111"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2" />
              <div class="rounded input-group-prepend">
                <span class="rounded tmg_input_title" id="">URL</span>
              </div>
              <input
                type="text"
                class="rounded form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2" />
            </div>

            <!-- <div class="rounded LO">d</div> -->
          </div>
        </div>
      </div>

      <div id=" " class="rounded rounded-3">
        <div class="rounded row g-0">
          <div class="rounded col-md-2 div_brder_toDel3">팀 STATUS</div>
          <div class="rounded col-md-10">
            <select name="teamStatus" id="teamStatusSelect">
              <option value="ING">진행 중</option>
              <option value="FIN">완료</option>
            </select>
          </div>
        </div>
      </div>
      <div id=" " class="rounded rounded-3">
        <div class="rounded row g-0">
          <div class="rounded col-md-2 div_brder_toDel3">진행 기간</div>
          <!-- https://vue3datepicker.com/ -->
          <div class="rounded col-md-10"></div>
        </div>
      </div>
      <div id=" " class="rounded rounded-3">
        <div class="rounded row g-0">
          <div class="rounded col-md-2 div_brder_toDel3">보증금</div>
          <div class="rounded col-md-10"></div>
        </div>
      </div>
      <div id=" " class="rounded rounded-3">
        <div class="rounded row g-0">
          <div class="rounded col-md-2 div_brder_toDel3">관련 링크</div>
          <div class="rounded col-md-10"></div>
        </div>
      </div>
      <div id=" " class="rounded rounded-3">
        <div class="rounded row g-0">
          <div class="rounded col-md-2 div_brder_toDel3">모집글 링크</div>
          <div class="rounded col-md-10">
            <a href="/home" class="tmg_recruitUrl"
              >VUE웹앱 프로젝트 모집합니다</a
            >
          </div>
        </div>
      </div>
      <div id=" " class="rounded rounded-3">
        <div class="rounded row g-0">
          <div class="rounded col-md-2 div_brder_toDel3">지원자 관리</div>
          <!-- 카드warp위치할 우측단 -->
          <div class="rounded col-md-10 tmg_applicant">
            <!-- 카드wrap -->
            <div class="rounded tmg_ucardwrap text-start" style="">
              <!-- DIV 오른쪽으로만 붙여서 - X축 스크롤만 생기도록 -->
              <!-- 카드단위들 시작 -->
              <div class="rounded tmg_ucard">
                <div class="tmg_usercard_profile rounded tmg_cardrow">
                  <div id="applicant_top">
                    <div id="applicant_img" class="tmg_inlinediv">
                      <img
                        class=" "
                        src="https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s32-c-mo"
                        srcset="
                          https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s32-c-mo 1x,
                          https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s64-c-mo 2x
                        "
                        alt=""
                        aria-hidden="true"
                        data-noaft="" />
                    </div>
                    <div id="applicant_nickname" class="tmg_inlinediv">
                      username001
                    </div>
                  </div>
                  <div id="applicant_email1">unoesellar@gmail.com</div>
                </div>
                <div class="tmg_usercard_appDate tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv tmg_float_left">
                    신청일시
                  </div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    2022.06.24 11:11
                  </div>
                </div>
                <div class="tmg_profile_appDept tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv tmg_float_left">
                    신청분야
                  </div>
                  <div
                    id="applicant_nickname"
                    class="tmg_inlinediv btn-success">
                    백엔드
                  </div>
                </div>
                <div class="tmg_profile_favStack tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv tmg_float_left">
                    관심스택
                  </div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    2022.06.24 11:11
                  </div>
                </div>
                <div class="tmg_profile_respond tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv">
                    <button>승인</button>
                  </div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    <button>거절</button>
                  </div>
                </div>
              </div>
              <div class="rounded tmg_ucard">
                <div class="tmg_usercard_profile rounded tmg_cardrow">
                  <div id="applicant_top">
                    <div id="applicant_img" class="tmg_inlinediv">
                      <img
                        class=" "
                        src="https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s32-c-mo"
                        srcset="
                          https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s32-c-mo 1x,
                          https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s64-c-mo 2x
                        "
                        alt=""
                        aria-hidden="true"
                        data-noaft="" />
                    </div>
                    <div id="applicant_nickname" class="tmg_inlinediv">
                      username001
                    </div>
                  </div>
                  <div id="applicant_email1">unoesellar@gmail.com</div>
                </div>
                <div class="tmg_usercard_appDate tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv tmg_float_left">
                    신청일시
                  </div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    2022.06.24 11:11
                  </div>
                </div>
                <div class="tmg_profile_appDept tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv tmg_float_left">
                    신청분야
                  </div>
                  <div
                    id="applicant_nickname"
                    class="tmg_inlinediv btn-success">
                    백엔드
                  </div>
                </div>
                <div class="tmg_profile_favStack tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv tmg_float_left">
                    관심스택
                  </div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    2022.06.24 11:11
                  </div>
                </div>
                <div class="tmg_profile_respond tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv">
                    <button>승인</button>
                  </div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    <button>거절</button>
                  </div>
                </div>
              </div>
              <div class="rounded tmg_ucard">
                <div class="tmg_usercard_profile rounded tmg_cardrow">
                  <div id="applicant_top">
                    <div id="applicant_img" class="tmg_inlinediv">
                      <img
                        class=" "
                        src="https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s32-c-mo"
                        srcset="
                          https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s32-c-mo 1x,
                          https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s64-c-mo 2x
                        "
                        alt=""
                        aria-hidden="true"
                        data-noaft="" />
                    </div>
                    <div id="applicant_nickname" class="tmg_inlinediv">
                      username001
                    </div>
                  </div>
                  <div id="applicant_email1">unoesellar@gmail.com</div>
                </div>
                <div class="tmg_usercard_appDate tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv tmg_float_left">
                    신청일시
                  </div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    2022.06.24 11:11
                  </div>
                </div>
                <div class="tmg_profile_appDept tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv tmg_float_left">
                    신청분야
                  </div>
                  <div
                    id="applicant_nickname"
                    class="tmg_inlinediv btn-success">
                    백엔드
                  </div>
                </div>
                <div class="tmg_profile_favStack tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv tmg_float_left">
                    관심스택
                  </div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    2022.06.24 11:11
                  </div>
                </div>
                <div class="tmg_profile_respond tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv">
                    <button>승인</button>
                  </div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    <button>거절</button>
                  </div>
                </div>
              </div>
              <div class="rounded tmg_ucard">
                <div class="tmg_usercard_profile rounded tmg_cardrow">
                  <div id="applicant_top">
                    <div id="applicant_img" class="tmg_inlinediv">
                      <img
                        class=" "
                        src="https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s32-c-mo"
                        srcset="
                          https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s32-c-mo 1x,
                          https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s64-c-mo 2x
                        "
                        alt=""
                        aria-hidden="true"
                        data-noaft="" />
                    </div>
                    <div id="applicant_nickname" class="tmg_inlinediv">
                      username001
                    </div>
                  </div>
                  <div id="applicant_email1">unoesellar@gmail.com</div>
                </div>
                <div class="tmg_usercard_appDate tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv tmg_float_left">
                    신청일시
                  </div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    2022.06.24 11:11
                  </div>
                </div>
                <div class="tmg_profile_appDept tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv tmg_float_left">
                    신청분야
                  </div>
                  <div
                    id="applicant_nickname"
                    class="tmg_inlinediv btn-success">
                    백엔드
                  </div>
                </div>
                <div class="tmg_profile_favStack tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv tmg_float_left">
                    관심스택
                  </div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    2022.06.24 11:11
                  </div>
                </div>
                <div class="tmg_profile_respond tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv">
                    <button>승인</button>
                  </div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    <button>거절</button>
                  </div>
                </div>
              </div>
              <div class="rounded tmg_ucard">
                <div class="tmg_usercard_profile rounded tmg_cardrow">
                  <div id="applicant_top">
                    <div id="applicant_img" class="tmg_inlinediv">
                      <img
                        class=" "
                        src="https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s32-c-mo"
                        srcset="
                          https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s32-c-mo 1x,
                          https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s64-c-mo 2x
                        "
                        alt=""
                        aria-hidden="true"
                        data-noaft="" />
                    </div>
                    <div id="applicant_nickname" class="tmg_inlinediv">
                      username001
                    </div>
                  </div>
                  <div id="applicant_email1">unoesellar@gmail.com</div>
                </div>
                <div class="tmg_usercard_appDate tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv tmg_float_left">
                    신청일시
                  </div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    2022.06.24 11:11
                  </div>
                </div>
                <div class="tmg_profile_appDept tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv tmg_float_left">
                    신청분야
                  </div>
                  <div
                    id="applicant_nickname"
                    class="tmg_inlinediv btn-success">
                    백엔드
                  </div>
                </div>
                <div class="tmg_profile_favStack tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv tmg_float_left">
                    관심스택
                  </div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    2022.06.24 11:11
                  </div>
                </div>
                <div class="tmg_profile_respond tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv">
                    <button>승인</button>
                  </div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    <button>거절</button>
                  </div>
                </div>
              </div>
              <div class="rounded tmg_ucard">
                <div class="tmg_usercard_profile rounded tmg_cardrow">
                  <div id="applicant_top">
                    <div id="applicant_img" class="tmg_inlinediv">
                      <img
                        class=" "
                        src="https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s32-c-mo"
                        srcset="
                          https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s32-c-mo 1x,
                          https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s64-c-mo 2x
                        "
                        alt=""
                        aria-hidden="true"
                        data-noaft="" />
                    </div>
                    <div id="applicant_nickname" class="tmg_inlinediv">
                      username001
                    </div>
                  </div>
                  <div id="applicant_email1">unoesellar@gmail.com</div>
                </div>
                <div class="tmg_usercard_appDate tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv tmg_float_left">
                    신청일시
                  </div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    2022.06.24 11:11
                  </div>
                </div>
                <div class="tmg_profile_appDept tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv tmg_float_left">
                    신청분야
                  </div>
                  <div
                    id="applicant_nickname"
                    class="tmg_inlinediv btn-success">
                    백엔드
                  </div>
                </div>
                <div class="tmg_profile_favStack tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv tmg_float_left">
                    관심스택
                  </div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    2022.06.24 11:11
                  </div>
                </div>
                <div class="tmg_profile_respond tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv">
                    <button>승인</button>
                  </div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    <button>거절</button>
                  </div>
                </div>
              </div>
              <!-- cards 끝 -->
            </div>
            <!-- cardWrap끝     -->
          </div>
        </div>
      </div>
      <div id=" " class="rounded rounded-3">
        <div class="rounded row g-0">
          <div class="rounded col-md-2 div_brder_toDel3">팀원</div>
          <div class="rounded col-md-10">
            <!-- 카드wrap -->
            <div class="rounded tmg_ucardwrap text-start">
              <!-- DIV 오른쪽으로만 붙여서 - X축 스크롤만 생기도록 -->
              <!-- 카드단위들 시작 -->
              <div class="rounded tmg_ucard">
                <div class="tmg_usercard_profile rounded tmg_cardrow">
                  <div id="applicant_top">
                    <div id="applicant_img" class="tmg_inlinediv">
                      <img
                        class=" "
                        src="https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s32-c-mo"
                        srcset="
                          https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s32-c-mo 1x,
                          https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s64-c-mo 2x
                        "
                        alt=""
                        aria-hidden="true"
                        data-noaft="" />
                    </div>
                    <div id="applicant_nickname" class="tmg_inlinediv">
                      username001
                    </div>
                  </div>
                  <div id="applicant_email1">unoesellar@gmail.com</div>
                </div>
                <div class="tmg_usercard_appDate tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv">신청일시</div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    2022.06.24 11:11
                  </div>
                </div>
                <div class="tmg_profile_appDept tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv">신청분야</div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    백엔드
                  </div>
                </div>
                <div class="tmg_profile_favStack tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv">관심스택</div>
                  <div
                    id="applicant_nickname"
                    class="tmg_inlinediv tmg_fcont"></div>
                </div>
                <div class="tmg_profile_respond tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv">
                    <button>팀원 평가</button>
                  </div>
                </div>
              </div>
              <div class="rounded tmg_ucard">
                <div class="tmg_usercard_profile rounded tmg_cardrow">
                  <div id="applicant_top">
                    <div id="applicant_img" class="tmg_inlinediv">
                      <img
                        class=" "
                        src="https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s32-c-mo"
                        srcset="
                          https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s32-c-mo 1x,
                          https://lh3.googleusercontent.com/ogw/ADea4I6QiB1knSWtsj4IF_tZvaDWX33MD6Kc3FpOd8wi=s64-c-mo 2x
                        "
                        alt=""
                        aria-hidden="true"
                        data-noaft="" />
                    </div>
                    <div id="applicant_nickname" class="tmg_inlinediv">
                      username001
                    </div>
                  </div>
                  <div id="applicant_email1">unoesellar@gmail.com</div>
                </div>
                <div class="tmg_usercard_appDate tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv">신청일시</div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    2022.06.24 11:11
                  </div>
                </div>
                <div class="tmg_profile_appDept tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv">신청분야</div>
                  <div id="applicant_nickname" class="tmg_inlinediv">
                    백엔드
                  </div>
                </div>
                <div class="tmg_profile_favStack tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv">관심스택</div>
                  <div
                    id="applicant_nickname"
                    class="tmg_inlinediv tmg_fcont"></div>
                </div>
                <div class="tmg_profile_respond tmg_cardrow">
                  <div id="applicant_img" class="tmg_inlinediv">
                    <button>팀원 평가</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id=" " class="rounded rounded-3">
        <div class="rounded row g-0">
          <div class="rounded col-md-2 div_brder_toDel3">멘토링</div>
          <!-- 카드warp위치할 우측단 -->
          <div class="rounded col-md-10 tmg_mentoring">
            <!-- 카드wrap -->
            <div class="rounded tmg_mcardwrap">
              <!-- DIV 오른쪽으로만 붙여서 - X축 스크롤만 생기도록 -->
              <!-- 카드단위들 시작 -->
              <div class="rounded tmg_mcard">
                <div class="tmg_mentoringcard_profile tmg_cardrow">
                  <div
                    id="mentoring_title"
                    class="tmg_inlinediv mentoring_title">
                    <span class=""> 멘토 2 님의</span>
                    <span class="">VUE/ NODEJS 멘토링</span>
                  </div>
                  <div class="tmg_mentoring_stat_wrap">
                    <!-- DIV / css -->
                    <div
                      class="tmg_metntoring_stat tmg_inlinediv tmg_float_left">
                      <ul>
                        <li style="list-style: none">
                          <img
                            class="tmg_mentoring_img"
                            alt="Vue logo"
                            src="../assets/tmg_check.png" />
                        </li>
                        <li style="list-style: none"><span>신청중</span></li>
                        <li
                          class="tmg_mentoring_datetime"
                          style="list-style: none">
                          <span></span>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="tmg_metntoring_stat tmg_inlinediv tmg_float_left">
                      <ul>
                        <li style="list-style: none">
                          <img
                            class="tmg_mentoring_img"
                            alt="Vue logo"
                            src="../assets/tmg_check.png" />
                        </li>
                        <li style="list-style: none"><span>승인됨</span></li>
                        <li
                          class="tmg_mentoring_datetime"
                          style="list-style: none">
                          <span></span>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="tmg_metntoring_stat tmg_inlinediv tmg_float_left">
                      <ul>
                        <li style="list-style: none">
                          <img
                            class="tmg_mentoring_img"
                            alt="Vue logo"
                            src="../assets/tmg_check.png" />
                        </li>
                        <li style="list-style: none"><span>결제완료</span></li>
                        <li
                          class="tmg_mentoring_datetime"
                          style="list-style: none">
                          <span></span>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="tmg_metntoring_stat tmg_inlinediv tmg_float_left">
                      <ul>
                        <li style="list-style: none">
                          <img
                            class="tmg_mentoring_img"
                            alt="Vue logo"
                            src="../assets/tmg_check.png" />
                        </li>
                        <li style="list-style: none"><span>멘토링중</span></li>
                        <li
                          class="tmg_mentoring_datetime"
                          style="list-style: none">
                          <span></span>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="tmg_metntoring_stat tmg_inlinediv tmg_float_left">
                      <ul>
                        <li style="list-style: none">
                          <img
                            class="tmg_mentoring_img"
                            alt="Vue logo"
                            src="../assets/tmg_check.png" />
                        </li>
                        <li style="list-style: none">
                          <span>멘토링완료</span>
                        </li>
                        <li
                          class="tmg_mentoring_datetime"
                          style="list-style: none">
                          <span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="rounded tmg_mcard">
                <div class="tmg_mentoringcard_profile tmg_cardrow">
                  <div
                    id="mentoring_title"
                    class="tmg_inlinediv mentoring_title">
                    <span class=""> 멘토 2 님의</span>
                    <span class="">VUE/ NODEJS 멘토링</span>
                  </div>
                  <div class="tmg_mentoring_stat_wrap">
                    <!-- DIV / css -->
                    <div
                      class="tmg_metntoring_stat tmg_inlinediv tmg_float_left">
                      <ul>
                        <li style="list-style: none">
                          <img
                            class="tmg_mentoring_img"
                            alt="Vue logo"
                            src="../assets/tmg_check.png" />
                        </li>
                        <li style="list-style: none"><span>신청중</span></li>
                        <li
                          class="tmg_mentoring_datetime"
                          style="list-style: none">
                          <span></span>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="tmg_metntoring_stat tmg_inlinediv tmg_float_left">
                      <ul>
                        <li style="list-style: none">
                          <img
                            class="tmg_mentoring_img"
                            alt="Vue logo"
                            src="../assets/tmg_check.png" />
                        </li>
                        <li style="list-style: none"><span>승인됨</span></li>
                        <li
                          class="tmg_mentoring_datetime"
                          style="list-style: none">
                          <span></span>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="tmg_metntoring_stat tmg_inlinediv tmg_float_left">
                      <ul>
                        <li style="list-style: none">
                          <img
                            class="tmg_mentoring_img"
                            alt="Vue logo"
                            src="../assets/tmg_check.png" />
                        </li>
                        <li style="list-style: none"><span>결제완료</span></li>
                        <li
                          class="tmg_mentoring_datetime"
                          style="list-style: none">
                          <span></span>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="tmg_metntoring_stat tmg_inlinediv tmg_float_left">
                      <ul>
                        <li style="list-style: none">
                          <img
                            class="tmg_mentoring_img"
                            alt="Vue logo"
                            src="../assets/tmg_check.png" />
                        </li>
                        <li style="list-style: none"><span>멘토링중</span></li>
                        <li
                          class="tmg_mentoring_datetime"
                          style="list-style: none">
                          <span></span>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="tmg_metntoring_stat tmg_inlinediv tmg_float_left">
                      <ul>
                        <li style="list-style: none">
                          <img
                            class="tmg_mentoring_img"
                            alt="Vue logo"
                            src="../assets/tmg_check.png" />
                        </li>
                        <li style="list-style: none">
                          <span>멘토링완료</span>
                        </li>
                        <li
                          class="tmg_mentoring_datetime"
                          style="list-style: none">
                          <span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="rounded tmg_mcard">
                <div class="tmg_mentoringcard_profile tmg_cardrow">
                  <div
                    id="mentoring_title"
                    class="tmg_inlinediv mentoring_title">
                    <span class=""> 멘토 2 님의</span>
                    <span class="">VUE/ NODEJS 멘토링</span>
                  </div>
                  <div class="tmg_mentoring_stat_wrap">
                    <!-- DIV / css -->
                    <div
                      class="tmg_metntoring_stat tmg_inlinediv tmg_float_left">
                      <ul>
                        <li style="list-style: none">
                          <img
                            class="tmg_mentoring_img"
                            alt="Vue logo"
                            src="../assets/tmg_check.png" />
                        </li>
                        <li style="list-style: none"><span>신청중</span></li>
                        <li
                          class="tmg_mentoring_datetime"
                          style="list-style: none">
                          <span></span>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="tmg_metntoring_stat tmg_inlinediv tmg_float_left">
                      <ul>
                        <li style="list-style: none">
                          <img
                            class="tmg_mentoring_img"
                            alt="Vue logo"
                            src="../assets/tmg_check.png" />
                        </li>
                        <li style="list-style: none"><span>승인됨</span></li>
                        <li
                          class="tmg_mentoring_datetime"
                          style="list-style: none">
                          <span></span>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="tmg_metntoring_stat tmg_inlinediv tmg_float_left">
                      <ul>
                        <li style="list-style: none">
                          <img
                            class="tmg_mentoring_img"
                            alt="Vue logo"
                            src="../assets/tmg_check.png" />
                        </li>
                        <li style="list-style: none"><span>결제완료</span></li>
                        <li
                          class="tmg_mentoring_datetime"
                          style="list-style: none">
                          <span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tmg_pagination LO2">페이징</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      /*teamManage   */
      teamManage: {
        teamstatus: [
          { teamStatusCode: "ING", name: "진행 중" },
          { teamStatusCode: "FIN", name: "완료" }
        ],
        during: [{}, {}]
      },
      options: [
        { optionCode: "1", name: "프론트엔드" },
        { optionCode: "2", name: "백엔드" },
        { optionCode: "3", name: "풀스택" },
        { optionCode: "4", name: "디자인" },
        { optionCode: "5", name: "UI/ UX" },
        { optionCode: "6", name: "기획" },
        { optionCode: "7", name: "PM" },
        { optionCode: "8", name: "데이터베이스" },
        { optionCode: "9", name: "알고리즘,자료구조" },
        { optionCode: "10", name: "퍼블리싱" },
        { optionCode: "11", name: "데브옵스" },
        { optionCode: "12", name: "데이터사이언스" }
      ],
      selectedOptionList: [],
      stacks: [
        {
          stackCode: "1",
          label: "프론트엔드",
          options: ["Javascript", "TypeScript", "React"]
        },
        {
          stackCode: "2",
          label: "백엔드",
          options: ["Java", "Spring", "Node.js"]
        },
        {
          stackCode: "3",
          label: "모바일",
          options: ["Flutter", "Swift", "Kotlin"]
        },
        {
          stackCode: "4",
          label: "기타",
          options: ["AWS", "Kubernetes", "Docker"]
        }
      ],
      selectedStackList: [], //'1', '2' ...
      selectedStackOption: [] //
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    userChange() {
      alert("1");
    },
    changeNickname() {
      this.user.nickname = prompt("변경할 닉네임을 입력하세요.");
    },
    addStack() {
      this.selectedStackOption = this.stacks.filter(
        (option) => option.stackCode === this.selectedStackList
      );
    }
  }
};
</script>

<style scoped></style>
