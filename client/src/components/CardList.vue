<template>
  <div>
    <section class="project_list">
      <div class="card" v-for="(project, i) in projects" :key="i">
        <!-- TODO: 밑의 goToDetail안의 인자는 API 연결이후 project.project_id로 변경해야할 듯 -->
        <section class="card-body" @click="goToDetail(project.project_id)">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-start text-muted"
              >시작예정일 : {{ project.exp_start_date }}</span
            >
            <span class="project-status">{{ project.status_code }}</span>
          </div>
          <h2 class="fs-5 mb-3">{{ project.title }}</h2>
          <p class="project-desc mb-3 ellipsis">
            {{ project.project_desc }}
          </p>
          <div
            class="d-flex justify-content-between align-items-end border-bottom mb-2">
            <span class="mb-1">{{ project.user_nickname }}</span>
            <div class="d-flex flex-column mb-1">
              <div>
                <i class="bi bi-eye me-1"></i>
                <!-- TODO : view count 기능 구현(아래는 더미데이터 초기버전이라 데이터의 형태가 다를것임) -->
                <!-- <span> {{ project.viewCount }}</span> -->
              </div>
            </div>
          </div>
          <div v-if="project.stack_code.length <= 3">
            <div
              class="stack-icon me-1"
              v-for="(stack, i) in project.stack_code"
              :key="i">
              {{ stack }}
            </div>
          </div>
          <span v-else>
            <div class="stack-icon me-1">{{ project.stack_code[0] }}</div>
            <div class="stack-icon me-1">{{ project.stack_code[1] }}</div>
            <div class="stack-icon me-1">{{ project.stack_code[2] }}</div>
          </span>
          <span v-show="project.stack_code.length > 3">
            + {{ project.stack_code.length - 3 }}
          </span>
        </section>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    projects: Array
  },
  components: {},
  data() {
    return {};
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
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
