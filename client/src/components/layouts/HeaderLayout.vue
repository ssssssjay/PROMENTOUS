<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light shadow-sm" id="mainNav">
      <div class="container px-5">
        <div class="logo">
          <a
            class="navbar-brand"
            href=""
            :class="{ active: $route.path == '/home' }"
            @click="goToMenu('/home')"
            style="font-size: 30px"
            >PROMENTOUS</a
          >
        </div>
        <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
          <span class="dropdown">
            <a
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <span style="font-size: 20px">프로젝트</span>
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
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              :class="{ active: $route.path == '/mentolist' }"
              @click="goToMenu('/mentolist')"
              style="font-size: 20px">
              <span>멘토링</span>
            </a>
          </span>
          <span class="dropdown">
            <a
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style="font-size: 20px">
              <span>팀관리</span>
            </a>
          </span>
        </div>
        <div class="siglog">
          <button class="btn btn-outline-dark" type="button">
            <span>회원가입</span>
          </button>
          <button class="btn btn-outline-dark" type="button">
            <span>로그인</span>
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
    }
  }
};
</script>
<style>
.active {
  color: #0bc0eb;
}
span > a {
  text-decoration: none;
}
span > a:hover {
  color: #0bc0eb;
}
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
