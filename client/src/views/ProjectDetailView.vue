<template>
  <div class="container mt-5">
    <div class="row">
      <!-- 페이지 좌측 -->
      <div class="col-lg-9 pe-xl-1-9 mb-1-9 mb-lg-0">
        <div class="content">
          <!-- 글 제목 -->
          <div class="row text-start">
            <div class="col-2 pt-2">
              <span class="badge pro_badge_color fs-5"> 모집중 </span>
            </div>
            <span class="fs-1 col-8"> 프로젝트 이름 </span>
            <span class="text-end col-2 pt-4"> 2022/06/02 </span>
            <hr />
          </div>
          <!-- 글 내용 -->
          <div class="h4" style="text-align: left">
            <p class="row">
              <span class="text-muted col-2">시작예정일</span>
              <span class="px-4 col-4">2022/07/01</span>
              <span class="text-muted col-2">진행기간</span>
              <span class="px-4 col-4">3개월</span>
            </p>
            <p class="row">
              <span class="text-muted col-2">모집인원</span>
              <span class="px-4 col-4">5명</span>
            </p>
            <p class="row">
              <span class="text-muted col-2">진행방식</span>
              <span class="px-4 col-4">오프라인</span>
              <span class="text-muted col-2">보증금</span>
              <span class="px-4 col-4">X</span>
            </p>
            <p class="row">
              <span class="text-muted col-2">연락수단</span>
              <span class="px-4 col-10">http:qwerty.com</span>
            </p>
            <p class="row">
              <span class="text-muted col-2">언어/스택</span>
              <span class="px-4 col-10">
                <!-- v-for로 변경 -->
                <span class="badge pro_badge_color rounded-pill me-1"
                  >VueJS</span
                >
                <span class="badge pro_badge_color rounded-pill me-1"
                  >Node.js</span
                >
                <span class="badge pro_badge_color rounded-pill me-1"
                  >MySQL</span
                >
              </span>
            </p>
            <div>
              <span class="text-muted">프로젝트 소개</span>
              <div class="widget-box fs-4 py-4 px-5">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </div>
            </div>
            <p class="row">
              <span class="text-muted col-2">참고링크</span>
              <span class="col-10">
                <!-- v-for로 변경 -->
                <button
                  type="button"
                  class="btn btn-secondary btn-sm disabled me-2">
                  링크 제목1
                </button>
                <button
                  type="button"
                  class="btn btn-secondary btn-sm disabled me-2">
                  링크 제목2
                </button>
                <button type="button" class="btn btn-secondary btn-sm disabled">
                  링크 제목3
                </button>
              </span>
            </p>
            <!-- <div>
              <span class="text-muted">후기 모아보기</span>
            </div> -->
            <div class="py-5">
              <review-carousel />
            </div>
          </div>
        </div>
        <hr />

        <!-- 댓글 -->
        <write-comment-view />
        <comment-view />
        <!-- </div> -->
      </div>

      <!-- 페이지 우측 -->
      <div class="col-lg-3 pro_fixed">
        <div class="side-bar">
          <div class="text-start">
            <p class="ps-4">
              <!-- 버튼 UI 추후 수정 예정 -->
              <button
                type="button"
                class="btn btn-outline-dark btn-sm mx-1 pro-circle">
                <i class="bi bi-bookmark"></i>
                <i class="bi bi-bookmark-fill"></i>
              </button>
              <button
                type="button"
                class="btn btn-outline-dark btn-sm pro-circle">
                <i class="bi bi-link-45deg pro-circle-icon"></i>
              </button>
              <button type="button" class="btn btn-outline-dark btn-sm mx-1">
                수정
              </button>
              <button type="button" class="btn btn-outline-dark btn-sm">
                삭제
              </button>
            </p>
          </div>
          <!-- div 테두리 -->
          <div class="widget widget-box ps-3">
            <div class="widget-title h4">
              <span>리더 정보</span>
            </div>
            <div class="row">
              <div class="col">
                <img
                  style="width: 90px"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt="리더 정보 사진" />
              </div>
              <div class="col">
                <p class="fs-4">닉네임</p>
                <p><i class="bi bi-star-fill pro_star_color"></i> 4.5/5 (23)</p>
              </div>
            </div>
            <div class="ps-1">
              <p class="fs-5 mt-3">프로젝트 진행 이력</p>
              <p>제목1 - qwerty</p>
              <p>제목2 - qwerty</p>
            </div>
            <div class="text-end">
              <button type="button" class="btn btn-outline-dark btn-sm">
                상세보기
              </button>
            </div>
          </div>

          <div class="widget widget-box ps-3">
            <div class="widget-title h4">
              <span>분야별 모집 현황</span>
            </div>
            <ul class="list-unstyled ps-0">
              <li class="row">
                <div class="col-6">
                  <p class="fs-5 mb-0">백엔드</p>
                  <p class="fs-6 text-muted ps-1">24명 지원</p>
                  <!-- <p>24명 지원</p> -->
                </div>
                <span class="col-2">1/3</span>
                <span class="col-4">
                  <button type="button" class="btn btn-outline-dark btn-sm">
                    지원
                  </button>
                </span>
              </li>
              <li class="row">
                <div class="col-6">
                  <p class="fs-5 mb-0">프론트엔드</p>
                  <p class="fs-6 text-muted ps-1">16명 지원</p>
                  <!-- <p>24명 지원</p> -->
                </div>
                <span class="col-2">2/3</span>
                <span class="col-4">
                  <button type="button" class="btn btn-outline-dark btn-sm">
                    지원
                  </button>
                </span>
              </li>
            </ul>
          </div>

          <div class="widget widget-box ps-3">
            <div class="widget-title h4">
              <span>팀원 정보 보기</span>
            </div>
            <ul class="list-unstyled ps-0">
              <li class="row">
                <div class="col-6">
                  <p class="fs-6 text-muted mb-0">백엔드</p>
                </div>
                <p class="row ps-4">
                  <span class="col-7 pt-1">닉네임</span>
                  <span class="col-5">
                    <button type="button" class="btn btn-outline-dark btn-sm">
                      상세보기
                    </button>
                  </span>
                </p>
                <p class="row ps-4">
                  <span class="col-7 pt-1">닉네임</span>
                  <span class="col-5">
                    <button type="button" class="btn btn-outline-dark btn-sm">
                      상세보기
                    </button>
                  </span>
                </p>
              </li>
              <li class="row">
                <div class="col-6">
                  <p class="fs-6 text-muted mb-0">프론트엔드</p>
                </div>
                <p class="row ps-4">
                  <span class="col-7 pt-1">닉네임</span>
                  <span class="col-5">
                    <button type="button" class="btn btn-outline-dark btn-sm">
                      상세보기
                    </button>
                  </span>
                </p>
                <p class="row ps-4">
                  <span class="col-7 pt-1">닉네임</span>
                  <span class="col-5">
                    <button type="button" class="btn btn-outline-dark btn-sm">
                      상세보기
                    </button>
                  </span>
                </p>
                <p class="row ps-4">
                  <span class="col-7 pt-1">닉네임</span>
                  <span class="col-5">
                    <button type="button" class="btn btn-outline-dark btn-sm">
                      상세보기
                    </button>
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentView from "@/components/CommentView.vue";
import ReviewCarousel from "@/components/ReviewCarousel.vue";
import WriteCommentView from "../components/WriteCommentView.vue";

export default {
  name: "ProjectDetailView",
  components: { CommentView, ReviewCarousel, WriteCommentView },
  data() {
    return {
      project: {
        writer: "거북이",
        projectId: 1,
        projectName: "프로젝트 모집 플랫폼 개발",
        expectedStartDate: "2022/07/01"
      },
      stackList: ["VueJS", "Node.js", "Typescript"],
      linkList: [
        {
          linkName: "링크제목1",
          linkAddress: "http://localhost:8080/abc",
          linkId: 1
        },
        {
          linkName: "링크제목2",
          linkAddress: "http://localhost:8080/def",
          linkId: 2
        },
        {
          linkName: "링크제목3",
          linkAddress: "http://localhost:8080/ghi",
          linkId: 3
        }
      ],
      mentoList: [
        {
          mentoCode: "0",
          NickName: "가나다",
          score: 3.5,
          scoreCount: 12,
          title: "자바스크립트를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "자바스크립트" }
          ]
        },
        {
          mentoCode: "1",
          NickName: "가나다라",
          score: 4,
          scoreCount: 12,
          title: "파이썬를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "자바" }
          ]
        },
        {
          mentoCode: "2",
          NickName: "가나다라마바사",
          score: 4,
          scoreCount: 12,
          title: "파이썬를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "타입스크립트" }
          ]
        },
        {
          mentoCode: "3",
          NickName: "가나다라마",
          score: 4,
          scoreCount: 12,
          title: "파이썬를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "자바스크립트" },
            { code: "2", name: "자바스크립트" },
            { code: "2", name: "자바스크립트" }
          ]
        },
        {
          mentoCode: "4",
          NickName: "가나다라마",
          score: 4,
          scoreCount: 12,
          title: "파이썬를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "자바스크립트" }
          ]
        },
        {
          mentoCode: "5",
          NickName: "가나다라마",
          score: 4,
          scoreCount: 12,
          title: "파이썬를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "자바스크립트" }
          ]
        },
        {
          mentoCode: "6",
          NickName: "가나다라마",
          score: 4,
          scoreCount: 12,
          title: "파이썬를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "자바스크립트" }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
.widget-box {
  border: 1.5px solid gray;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  text-align: left;
}

.pro_fixed {
  /* position: sticky; */
  top: 0;
  height: 400px;
  /* position: fixed; */
}

.pro-circle {
  width: 30px;
  height: 30px;
  border-radius: 70%;
  overflow: hidden;
}

.pro-circle-icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
