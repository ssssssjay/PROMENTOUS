<template>
  <div class="container">
    <div class="banner">
      <div class="comment">
        <h1>멘토</h1>
        <div>보다 좋은 개발자가 되기 위한 하나의 단계</div>
      </div>
    </div>
    <div>
      <h3>멘토리스트</h3>
      <div class="button">
        <button type="button" class="btn btn-secondary">
          멘토 등록 신청하기
        </button>
      </div>
    </div>
    <div class="search">
      <PartSearchLayout class="partSearch" />
      <input
        id="search"
        type="text"
        class="form-control"
        placeholder="제목,내용,작성자로 검색해보세요!"
        aria-label="Username"
        aria-describedby="addon-wrapping" />
    </div>

    <div class="cardList">
      <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://w7.pngwing.com/pngs/282/256/png-transparent-user-profile-avatar-computer-icons-google-account-black-accounting-user-interface.png"
              class="img-fluid rounded-start"
              alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PartSearchLayout from "../components/layouts/PartSearchLayout.vue";

export default {
  components: { PartSearchLayout },
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
.banner {
  text-align: left;
  color: white;
  height: 100px;
  background: linear-gradient(to right, #8094be, white);
  box-shadow: 0px 5px #e0e7ee;
  border-radius: 5px;
}
.comment {
  margin-left: 10px;
}
h3 {
  margin: 15px;
  text-align: left;
  font-weight: 600;
}
.button {
  margin-top: 15px;
  position: relative;
  bottom: 50px;
  left: 560px;
}
#search {
  width: 300px;
  position: relative;
  left: 760px;
  bottom: 55px;
}
.search {
  position: relative;
  left: 230px;
}
</style>
