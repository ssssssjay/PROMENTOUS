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
          <h2 class="fs-5 mb-3 title">{{ project.title }}</h2>
          <div class="stack mb-3">
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
          </div>
          <div class="d-flex align-items-center border-bottom mb-2">
            <!-- 이미지 데이터 연결 필요 + img태그 v-bind:src로 변경해야함  -->
            <span class="image me-1"
              ><img v-bind:src="project.user_image" alt="프사"
            /></span>
            <span class="mb-1" style="width: 130px">{{
              project.user_nickname
            }}</span>
            <div class="d-flex flex-column ms-5 mb-1" style="width: 50px">
              <div>
                <i class="bi bi-eye me-1"></i>
                <span> {{ project.viewCount }}</span>
              </div>
            </div>
          </div>
          <div class="bottom">
            <!-- 모집현황 데이터 연결 필요 -->
            <span
              >모집현황{{ project.acceptedCnt }} /
              {{ project.totalPeople }}</span
            >
            <button class="progressMethod btn-primary">
              {{ project.progress_method }}
            </button>
          </div>
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
  setup() {
    // props.projects = this.d;
  },
  created() {
    // passProjects();
  },
  mounted() {},
  unmounted() {},
  methods: {
    // 카드 클릭시 id를 파라미터로 전달하고 해당 상세글로 이동
    goToDetail(id) {
      window.scrollTo(0, 0);
      const path = `/project/recruit/${id}`;
      this.$router.push({
        path: path,
        name: "projectdetail",
        params: { projectId: id }
      });
    }
    // passProjects(data) {
    //   const d = data;
    // }
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
.title {
  height: 40px;
}
.image > img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.progressMethod {
  font-size: 15px;
  float: right;
  margin: 0px;
  border-radius: 5px;
  background-color: #1379d2;
}
</style>
