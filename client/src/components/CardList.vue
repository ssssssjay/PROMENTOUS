<template>
  <div>
    <section class="project_list">
      <div class="card" v-for="(project, i) in projects" :key="i">
        <!-- TODO: 밑의 goToDetail안의 인자는 API 연결이후 project.project_id로 변경해야할 듯 -->
        <section class="card-body" @click="goToDetail(1)">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-start text-muted"
              >시작예정일 : {{ project.expDate }}</span
            >
            <span class="project-status">{{ project.status }}</span>
          </div>
          <h2 class="fs-5">{{ project.title }}</h2>
          <p class="project-desc ellipsis">
            {{ project.desc }}
          </p>
          <div
            class="d-flex justify-content-between align-items-end border-bottom mb-2">
            <span class="mb-1">{{ project.user }}</span>
            <div class="d-flex flex-column mb-1">
              <div>
                <i class="bi bi-eye me-1"></i>
                <span> {{ project.viewCount }}</span>
              </div>
              <div>
                <i class="bi bi-bookmark me-1"></i>
                <span> {{ project.bookmarkCount }}</span>
              </div>
            </div>
          </div>
          <div
            class="stack-icon me-1"
            v-for="(stack, i) in project.usingStack"
            :key="i">
            {{ stack }}
          </div>
          <span v-show="project.usingStack.length > 3">
            + {{ project.usingStack.length - 3 }}
          </span>

          <!-- <div class="stack-icon">+3</div> -->
        </section>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  components: {},
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
          title: "Vue를 활용한 거대 프로젝트",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione totamvero sint cumque at obcaecati, ullam, inventore voluptatum hic facerevoluptates dolore sequi, pariatur illo temporibus! Aliquid suscipitdolorum quo!",
          user: "뷰사랑꾼",
          expDate: "2022-06-20",
          usingStack: ["Vue", "nodeJS", "mySQL", "AWS"],
          bookmarkCount: 100,
          viewCount: 1000,
          status: "진행중"
        },
        {
          title: "Vue를 활용한 거대 프로젝트",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione totamvero sint cumque at obcaecati, ullam, inventore voluptatum hic facerevoluptates dolore sequi, pariatur illo temporibus! Aliquid suscipitdolorum quo!",
          user: "뷰사랑꾼",
          expDate: "2022-06-20",
          usingStack: ["Vue", "nodeJS", "mySQL", "AWS"],
          bookmarkCount: 100,
          viewCount: 1000,
          status: "진행중"
        },
        {
          title: "Vue를 활용한 거대 프로젝트",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione totamvero sint cumque at obcaecati, ullam, inventore voluptatum hic facerevoluptates dolore sequi, pariatur illo temporibus! Aliquid suscipitdolorum quo!",
          user: "뷰사랑꾼",
          expDate: "2022-06-20",
          usingStack: ["Vue", "nodeJS", "mySQL", "AWS"],
          bookmarkCount: 100,
          viewCount: 1000,
          status: "진행중"
        },
        {
          title: "Vue를 활용한 거대 프로젝트",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione totamvero sint cumque at obcaecati, ullam, inventore voluptatum hic facerevoluptates dolore sequi, pariatur illo temporibus! Aliquid suscipitdolorum quo!",
          user: "뷰사랑꾼",
          expDate: "2022-06-20",
          usingStack: ["Vue", "nodeJS", "mySQL", "AWS"],
          bookmarkCount: 100,
          viewCount: 1000,
          status: "진행중"
        },
        {
          title: "Vue를 활용한 거대 프로젝트",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione totamvero sint cumque at obcaecati, ullam, inventore voluptatum hic facerevoluptates dolore sequi, pariatur illo temporibus! Aliquid suscipitdolorum quo!",
          user: "뷰사랑꾼",
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
  methods: {
    // 카드 클릭시 id를 파라미터로 전달하고 해당 상세글로 이동
    goToDetail(id) {
      const path = `/project/recruit/${id}`;
      this.$router.push({
        path: path,
        name: "projectdetail",
        params: { projectId: id }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.project_list {
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  /* justify-content: space-between; */
}
.project_list .card {
  border-radius: 15px;
  width: 18rem;
  /* max-height: 253px; */
  /* overflow: hidden; */
  margin-right: 48px;
  cursor: pointer;
  transition: all 0.3s;
}
.project_list .card:nth-child(4n) {
  margin-right: 0;
}
.project_list .card:hover {
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
