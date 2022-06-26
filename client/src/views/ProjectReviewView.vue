<template>
  <div>
    <section class="banner d-flex align-items-center">
      <div class="container">
        <h1>프로젝트 후기</h1>
        <p>우리는 이런걸 만들었어요</p>
      </div>
    </section>
    <section class="container">
      <div class="d-flex pt-4 pb-4 justify-content-end section_first">
        <a href="#" class="btn btn-outline btn_write"
          ><i class="bi bi-pencil me-1"></i>프로젝트 후기 작성</a
        >
      </div>
      <div class="d-flex pt-4 mb-4 align-items-start justify-content-between">
        <RecruitSortLayout />
        <div class="d-flex">
          <StackSearchLayout />
          <SearchAll />
        </div>
      </div>
      <main class="review_list d-flex flex-wrap">
        <div
          class="card"
          style="width: 40rem; height: 240px"
          v-for="(review, i) in reviews"
          :key="i">
          <div class="d-flex">
            <img
              style="width: 15rem"
              src="@/assets/reviewThumbnail.png"
              class="card-img-top thumbnail"
              alt="후기썸네일이미지" />
            <div class="card-body">
              <h5 class="card-title">{{ review.title }}</h5>
              <p class="card-text ellipsis">
                {{ review.desc }}
              </p>
              <div class="mb-3">
                <i class="bi bi-eye me-1"></i>
                <span class="me-1">{{ review.viewCount }}</span>
                <i class="bi bi-bookmark me-2"></i>
                <span class="me-1">{{ review.bookmarkCount }}</span>
                <i class="bi bi-chat-right-text me-2"></i>
                <span class="me-1">{{ review.commentCount }}</span>
                <i class="bi bi-heart me-2"></i>
                <span>{{ review.likeCount }}</span>
              </div>
              <div class="mb-3">
                <div
                  v-for="(stack, i) in review.usingStack"
                  :key="i"
                  class="stack-icon me-1">
                  {{ stack }}
                </div>
              </div>
              <a
                class="btn btn-sm btn-outline-dark"
                :href="review.distributeURL"
                target="_blank"
                >배포 페이지 보러가기</a
              >
            </div>
          </div>
        </div>
      </main>
    </section>
  </div>
</template>
<script>
import RecruitSortLayout from "@/components/layouts/RecruitSortLayout.vue";
import StackSearchLayout from "@/components/layouts/StackSearchLayout.vue";
import SearchAll from "@/components/SearchAll.vue";
export default {
  components: {
    RecruitSortLayout,
    StackSearchLayout,
    SearchAll
  },
  data() {
    return {
      reviews: [
        {
          title: "mood-indigo",
          desc: "당신의 기분을 색깔로 기록해보세요!",
          thumbnail: "@/assets/undraw_Engineering_team_re_fvat.png",
          user: "devprogramming4",
          usingStack: ["HTML", "CSS", "Javascript"],
          distributeURL: "https://ssssssjay.github.io/mood-indigo/index.html",
          bookmarkCount: 3,
          viewCount: 20,
          commentCount: 2,
          likeCount: 6
        },
        {
          title: "mood-indigo",
          desc: "당신의 기분을 색깔로 기록해보세요!",
          thumbnail: "@/assets/undraw_Engineering_team_re_fvat.png",
          user: "devprogramming4",
          usingStack: ["HTML", "CSS", "Javascript"],
          distributeURL: "https://ssssssjay.github.io/mood-indigo/index.html",
          bookmarkCount: 3,
          viewCount: 20,
          commentCount: 2,
          likeCount: 6
        },
        {
          title: "mood-indigo",
          desc: "당신의 기분을 색깔로 기록해보세요!",
          thumbnail: "@/assets/undraw_Engineering_team_re_fvat.png",
          user: "devprogramming4",
          usingStack: ["HTML", "CSS", "Javascript"],
          distributeURL: "https://ssssssjay.github.io/mood-indigo/index.html",
          bookmarkCount: 3,
          viewCount: 20,
          commentCount: 2,
          likeCount: 6
        },
        {
          title: "mood-indigo",
          desc: "당신의 기분을 색깔로 기록해보세요!",
          thumbnail: "@/assets/undraw_Engineering_team_re_fvat.png",
          user: "devprogramming4",
          usingStack: ["HTML", "CSS", "Javascript"],
          distributeURL: "https://ssssssjay.github.io/mood-indigo/index.html",
          bookmarkCount: 3,
          viewCount: 20,
          commentCount: 2,
          likeCount: 6
        },
        {
          title: "mood-indigo",
          desc: "당신의 기분을 색깔로 기록해보세요!",
          thumbnail: "@/assets/undraw_Engineering_team_re_fvat.png",
          user: "devprogramming4",
          usingStack: ["HTML", "CSS", "Javascript"],
          distributeURL: "https://ssssssjay.github.io/mood-indigo/index.html",
          bookmarkCount: 3,
          viewCount: 20,
          commentCount: 2,
          likeCount: 6
        }
      ]
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    a(e) {
      console.log("a");
      console.log(e);
    },
    b(e) {
      console.log("b");
      console.log(e);
    }
  }
};
</script>
<style lang="scss" scoped>
.review_list {
  row-gap: 20px;
}
.card {
  margin-right: 16px;
  cursor: pointer;
  transition: all 0.3s;
}
.card:nth-child(2n) {
  margin-right: 0;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.btn_write {
  border: 1px solid #363636;
  transition: 0.2s;
}
.btn_write:hover {
  background-color: #363636;
  color: #fff;
}
.banner {
  color: #fff;
  height: 200px;
  background-color: #0b72cd;
}
.section_first {
  border-bottom: 1px solid #838383;
}
.thumbnail {
  width: 100%;
  /* height: auto; */
}
.stack-icon {
  font-size: 14px;
  display: inline-block;
  padding: 0 12px;
  text-align: center;
  border-radius: 28px;
  color: white;
  background-color: #1379d2;
  box-sizing: border-box;
}
.ellipsis {
  width: 360px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
