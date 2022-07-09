<script>
import { decodeCredential } from "vue3-google-login";

export default {
  components: {},
  data() {
    return {
      buttonConfig: {
        type: "icon"
        // theme: "outline",
        // size: "large",
        // text: "signup_with",
        // shape: "",
        // logo_alignment: "",
        // width: "",
        // locale: "",
      }
    };
  },
  methods: {
    callback(response) {
      // This callback will be triggered when the user selects or login to
      // his Google account from the popup
      const userData = decodeCredential(response.credential);
      console.log("Handle the response", response);
      console.log("DecodeCredential", userData);
      // 포스트요청을 먼저보내고
      // 세션스토리지에 로그인 데이터를 담고
      // vuex에도 담고
      // 페이지를 마이페이지로 이동시킨다
      // this.$router.push("myPageInfo");
      location.href = "http://localhost:8080/myPageinfo";
      // 로그인버튼은 사라지고 로그아웃 버튼이 생긴다.
    }
  }
};

// const callback = (response) => {
//   // This callback will be triggered when the user selects or login to
//   // his Google account from the popup
//   const userData = decodeCredential(response.credential);
//   console.log("Handle the response", response);
//   console.log("DecodeCredential", userData);
//   // 포스트요청을 먼저보내고
//   // 세션스토리지에 로그인 데이터를 담고
//   // 페이지를 마이페이지로 이동시킨다
//   location.href = "http://localhost:8080/myPageinfo";
//   // 로그인을하게되면, 로그아웃버튼
// };
</script>

<template>
  <div>
    <h1>로그인 하세요!</h1>
    <GoogleLogin :callback="callback" :buttonConfig="buttonConfig" />
  </div>
</template>
