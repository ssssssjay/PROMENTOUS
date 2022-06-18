<template>
  <header>
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
      id="mainNav"
    >
      <div class="container px-5">
        <div class="logo">
          <a
            class="navbar-brand"
            href=""
            :class="{ active: $route.path == '/home' }"
            @click="goToMenu('/home')"
            >PROMENTOUS</a
          >
        </div>
        <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
          <span class="dropdown">
            <a
              class="btn btn-light"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style="background-color: #0bc0eb"
            >
              <span style="color: white">프로젝트</span>
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  :class="{ active: $route.path == '/' }"
                  @click="goToMenu('/home')"
                  >모집</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  :class="{ active: $route.path == '/about' }"
                  @click="goToMenu('/about')"
                  >리뷰</a
                >
              </li>
            </ul>
          </span>
          <span class="dropdown">
            <a
              class="btn btn-light"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style="background-color: #0bc0eb"
            >
              <span style="color: white">멘토링</span>
            </a>
          </span>
          <span class="dropdown">
            <a
              class="btn btn-light"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style="background-color: #0bc0eb"
            >
              <span style="color: white">팀관리</span>
            </a>
          </span>
        </div>
        <div class="siglog">
          <button
            type="button"
            class="btn btn-light"
            style="background-color: #0bc0eb"
          >
            <span span style="color: white">회원가입</span>
          </button>
          <button
            type="button"
            class="btn btn-light"
            style="background-color: #0bc0eb"
          >
            <span span style="color: white">로그인</span>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goToMenu(path) {
      this.$router.push({ path: path });
    },
  },
};
</script>
<style>
header {
  font-family: "Roboto";
  margin-bottom: 70px;
}
div > button {
  margin: 5px;
}
.logo > a {
  background: linear-gradient(to right, #0bc0eb, #8094be);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 25px;
}
.dropdown {
  margin: 10px;
}
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
</style>
