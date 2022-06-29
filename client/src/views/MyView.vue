<template>
  <div class="container mt-5">
    <div class="row">
      <!-- 페이지좌측 -->
      <div class="col-lg-3">
        <div class="side-bar text-center py-1">
          <!-- 메뉴탭 -->
          <div
            class="widget widget-box py-4 px-1"
            style="border: 1px solid gray; border-radius: 10px; width: 220px">
            <div class="widget-title h3"><strong>My Page</strong></div>
            <div>
              <router-link to="/mypage/info" class="link-dark" id="link"
                >내 정보</router-link
              >
            </div>
            <div>
              <router-link to="/mypage/post" class="link-dark" id="link"
                >내 글 모아보기</router-link
              >
            </div>
            <div>
              <router-link to="/mypage/apply" class="link-dark" id="link"
                >스터디 & 프로젝트 신청내역</router-link
              >
            </div>
            <div>
              <router-link to="/mypage/pay" class="link-dark" id="link"
                >결제내역</router-link
              >
            </div>
            <div>
              <router-link to="/mypage/mento" class="link-dark" id="link"
                >멘토의 메뉴</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <!-- 페이지우측  -->
      <div class="col-lg-9 m-lg-auto text-start">
        <div class="content text-start">
          <!-- 글 제목 -->
          <div class="h1"><strong>내 정보</strong></div>
          <hr />
          <!-- 글 내용 상단 -->
          <div class="row">
            <div class="col-2">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt=""
                style="width: 130px; vertical-align: middle" />
            </div>
            <div class="col-10">
              <p class="h2">자기소개</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
            </div>
            <div class="mt-3" style="height: 30px">
              <p class="row" style="vertical-align: middle">
                <span class="col-2 text-center ps-2"
                  ><strong>닉네임</strong></span
                >|
                <span class="col-2 text-center">팀원평판</span>
                <span class="col-2 text-start">
                  <i class="bi bi-star-fill pro_star_color"></i>4.5/5 (23) </span
                >|
                <span class="col-2 text-center">멘토평판</span>
                <span class="col-2 text-start"
                  ><i class="bi bi-star-fill pro_star_color"></i>4.5/5
                  (23)</span
                >
              </p>
              <hr />
              <!-- 글 내용 하단 -->
              <div class="h5 py-3">
                <p class="row py-4">
                  <span class="col-2 text-center"
                    ><strong>로그인 계정</strong></span
                  >
                  <span class="col-10 text-start px-4"
                    >joans.dev@gmail.com</span
                  >
                </p>
                <p class="row py-4" style="vertical-align: middle">
                  <span class="col-2 text-center"
                    ><strong>관심분야</strong></span
                  >
                  <span class="col-10 px-4"
                    ><button type="button" class="btn btn-primary">
                      프론트엔드
                    </button>
                    <button type="button" class="btn btn-primary">
                      백엔드
                    </button>
                    <button type="button" class="btn btn-primary">
                      풀스택
                    </button></span
                  >
                </p>
                <p class="row py-4">
                  <span class="col-2 text-center"
                    ><strong>관심 스택</strong></span
                  >
                  <span class="col-10 px-4"
                    ><button type="button" class="btn btn-primary">
                      Vue.js
                    </button></span
                  >
                </p>
                <p class="row py-4">
                  <span class="col-2 text-center"
                    ><strong>소셜정보</strong></span
                  >
                  <span class="col-10 px-4">
                    <a href="https://github.com/joansdev">GitHub</a>
                  </span>
                </p>
              </div>
            </div>
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
      sampleData: ""
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
#link {
  text-decoration-line: none;
}
</style>
