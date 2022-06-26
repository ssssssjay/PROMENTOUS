<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light shadow-sm">
      <div class="container px-5">
        <div class="logo">
          <a
            class="navbar-brand mainLogo"
            :class="{ active: $route.path == '/home' }"
            @click="goToMenu('/home')"
            style="font-size: 30px"
            >PROMENTOUS</a
          >
        </div>
        <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
          <span class="dropdown">
            <a
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <span
                :class="{
                  active:
                    $route.path == '/project/recruit' ||
                    $route.path == '/project/review'
                }"
                style="font-size: 20px"
                >프로젝트</span
              >
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a
                  class="dropdown-item"
                  :class="{ active: $route.path == '/project/recruit' }"
                  @click="goToMenu('/project/recruit')"
                  >모집</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  :class="{ active: $route.path == '/project/review' }"
                  @click="goToMenu('/project/review')"
                  >리뷰</a
                >
              </li>
            </ul>
          </span>
          <span class="dropdown">
            <a
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              :class="{ active: $route.path == '/mentolist' }"
              @click="goToMenu('/mentolist')">
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
              :class="{ active: $route.path == '/teammanage' }"
              @click="goToMenu('/teammanage')">
              <span>팀관리</span>
            </a>
          </span>
          <span class="dropdown">
            <a
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              :class="{ active: $route.path == '/myPage/info' }"
              @click="goToMenu('/myPage/info')"
              style="font-size: 20px">
              <span>마이페이지</span>
            </a>
          </span>
        </div>
        <div class="siglog">
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
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap");
.mainLogo {
  font-family: "Merriweather", serif;
}
.active {
  color: #1379d2;
}
span > a {
  text-decoration: none;
}
span > a:hover {
  color: #1379d2;
}
header {
  font-family: "Roboto";
  margin-bottom: 10px;
}
div > button {
  margin: 5px;
}
.dropdown > a {
  font-size: 20px;
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
