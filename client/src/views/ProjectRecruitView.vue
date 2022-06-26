<template>
  <div>
    <section class="banner d-flex align-items-center">
      <div class="container">
        <h1>프로젝트</h1>
        <p>관심있는 프로젝트에 참여해보세요!</p>
      </div>
    </section>
    <section class="container">
      <div
        class="d-flex pb-5 align-items-start justify-content-between section_first">
        <div class="d-flex">
          <RegionSortLayout />
          <RecruitStatus />
        </div>
        <a href="#" class="btn btn-outline btn_write"
          ><i class="bi bi-pencil me-1"></i>모집글 작성</a
        >
      </div>
      <div
        class="d-flex pt-5 mb-4 align-items-start justify-content-between section_second">
        <RecruitSortLayout />
        <div class="d-flex">
          <StackSearchLayout />
          <SearchAll />
        </div>
      </div>
      <CardList />
    </section>
  </div>
</template>
<script>
import RecruitSortLayout from "../components/layouts/RecruitSortLayout.vue";
import RegionSortLayout from "@/components/layouts/RegionSortLayout.vue";
import StackSearchLayout from "@/components/layouts/StackSearchLayout.vue";
import SearchAll from "../components/SearchAll.vue";
import RecruitStatus from "@/components/layouts/RecruitStatus.vue";
import CardList from "@/components/CardList.vue";
export default {
  components: {
    RecruitSortLayout,
    RegionSortLayout,
    StackSearchLayout,
    SearchAll,
    RecruitStatus,
    CardList
  },
  data() {
    return {
      projects: [
        {
          title: "Vue-Todo",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione totamvero sint cumque at obcaecati, ullam, inventore voluptatum hic facerevoluptates dolore sequi, pariatur illo temporibus! Aliquid suscipitdolorum quo!",
          user: "devprogramming4",
          expDate: "2022-08-09",
          usingStack: ["nodeJS", "vue", "mysql"],
          bookmarkCount: 3,
          viewCount: 5,
          status: "진행중"
        },
        {
          title: "React-Todo",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione totamvero sint cumque at obcaecati, ullam, inventore voluptatum hic facerevoluptates dolore sequi, pariatur illo temporibus! Aliquid suscipitdolorum quo!",
          user: "sungjae",
          expDate: "2022-08-08",
          usingStack: ["JS", "nodeJS"],
          bookmarkCount: 2,
          viewCount: 4,
          status: "진행중"
        },
        {
          title: "뷰로 인생 끝장내버리기",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione totamvero sint cumque at obcaecati, ullam, inventore voluptatum hic facerevoluptates dolore sequi, pariatur illo temporibus! Aliquid suscipitdolorum quo!",
          user: "뷰쳐돌이",
          expDate: "2022-06-20",
          usingStack: ["Vue", "nodeJS", "mySQL", "AWS"],
          bookmarkCount: 100,
          viewCount: 1000,
          status: "진행중"
        },
        {
          title: "뷰로 인생 끝장내버리기",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione totamvero sint cumque at obcaecati, ullam, inventore voluptatum hic facerevoluptates dolore sequi, pariatur illo temporibus! Aliquid suscipitdolorum quo!",
          user: "뷰쳐돌이",
          expDate: "2022-06-20",
          usingStack: ["Vue", "nodeJS", "mySQL", "AWS"],
          bookmarkCount: 100,
          viewCount: 1000,
          status: "진행중"
        },
        {
          title: "뷰로 인생 끝장내버리기",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione totamvero sint cumque at obcaecati, ullam, inventore voluptatum hic facerevoluptates dolore sequi, pariatur illo temporibus! Aliquid suscipitdolorum quo!",
          user: "뷰쳐돌이",
          expDate: "2022-06-20",
          usingStack: ["Vue", "nodeJS", "mySQL", "AWS"],
          bookmarkCount: 100,
          viewCount: 1000,
          status: "진행중"
        },
        {
          title: "뷰로 인생 끝장내버리기",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione totamvero sint cumque at obcaecati, ullam, inventore voluptatum hic facerevoluptates dolore sequi, pariatur illo temporibus! Aliquid suscipitdolorum quo!",
          user: "뷰쳐돌이",
          expDate: "2022-06-20",
          usingStack: ["Vue", "nodeJS", "mySQL", "AWS"],
          bookmarkCount: 100,
          viewCount: 1000,
          status: "진행중"
        },
        {
          title: "뷰로 인생 끝장내버리기",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione totamvero sint cumque at obcaecati, ullam, inventore voluptatum hic facerevoluptates dolore sequi, pariatur illo temporibus! Aliquid suscipitdolorum quo!",
          user: "뷰쳐돌이",
          expDate: "2022-06-20",
          usingStack: [
            "Vue",
            "nodeJS",
            "mySQL",
            "AWS",
            "mySQL",
            "AWS",
            "mySQL",
            "AWS"
          ],
          bookmarkCount: 100,
          viewCount: 1000,
          status: "진행중"
        }
      ]
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.banner {
  color: #fff;
  height: 200px;
  background-color: #1379d2;
  margin-bottom: 42px;
}
.section_first {
  border-bottom: 1px solid #838383;
}
.stack_search {
  width: 200px;
}
.btn_write {
  border: 1px solid #363636;
  transition: 0.2s;
}
.btn_write:hover {
  background-color: #363636;
  color: #fff;
}
.project-list {
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
}
.project-list .card {
  border-radius: 15px;
  width: 18rem;
  /* max-height: 253px; */
  /* overflow: hidden; */
  margin-right: 48px;
  cursor: pointer;
  transition: all 0.3s;
}
.project-list .card:nth-child(4n) {
  margin-right: 0;
}
.project-list .card:hover {
  transform: translateY(-4px);
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.stack-icon {
  font-size: 12px;
  display: inline-block;
  padding: 0 12px;
  text-align: center;
  border-radius: 28px;
  color: white;
  background-color: #1379d2;
  box-sizing: border-box;
}
.project-status {
  display: inline-block;
  padding: 0 12px;
  font-size: 12px;
  text-align: center;
  border-radius: 28px;
  border: 1px solid black;
  box-sizing: border-box;
}
.ellipsis {
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
