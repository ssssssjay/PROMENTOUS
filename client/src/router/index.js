import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
  },
  {
    path: "/project/recruit",
    name: "projectRecruit",
    component: () =>
      import(
        /* webpackChunkName: "projectRecruit" */ "../views/ProjectRecruitView.vue"
      )
  },
  {
    path: "/project/review",
    name: "projectReview",
    component: () =>
      import(
        /* webpackChunkName: "projectReview" */ "../views/ProjectReviewView.vue"
      )
  },
  {
    path: "/mentolist",
    name: "mentolist",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "mentolist" */ "../views/MentoListView.vue")
  },
  {
    path: "/projectdetail",
    name: "projectdetail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "projectdetail" */ "../views/ProjectDetailView.vue"
      )
  },

  {
    path: "/mypage/post",
    name: "myPostView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "mypage" */ "../views/myPage/myPostView.vue")
  },
  {
    path: "/mypage/apply",
    name: "myApplyView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "mypage" */ "../views/myPage/myApplyView.vue")
  },
  {
    path: "/mypage/pay",
    name: "myPayView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "mypage" */ "../views/myPage/myPayView.vue")
  },
  {
    path: "/mypage/mento",
    name: "myMentoView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "mypage" */ "../views/myPage/myMentoView.vue")
  },
  {
    path: "/mypage/info",
    name: "myPageView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "mypage" */ "../views/MyPageView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
