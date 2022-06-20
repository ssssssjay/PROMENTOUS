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
        aria-describedby="addon-wrapping"
        v-model="searchData" />
    </div>

    <div class="row mt-n4">
      <div
        id="card1"
        class="card mb-3"
        style="max-width: 650px"
        :key="mento.mentoCode"
        v-for="mento in mentoList">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <span class="mentoNickName">{{ mento.NickName }}</span>
              <span class="mentoScore">{{ mento.score }}</span>
              <span>({{ mento.scoreCount }})</span>
              <h5 class="card-title">{{ mento.title }}</h5>
              <p class="card-text">
                {{ mento.comment }}
              </p>
              <div
                class="mentoPart"
                :key="part.code"
                v-for="part in mentoList[mento.mentoCode].part"
                style="display: inline">
                <button>{{ part.name }}</button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              class="img-fluid rounded-start"
              alt="..." />
            <button>멘토 상세보기</button>
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
      searchData: "",
      mentoList: [
        {
          mentoCode: "0",
          NickName: "가나다",
          score: 3.5,
          scoreCount: 12,
          title: "자바스크립트를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "자바스크립트" }
          ]
        },
        {
          mentoCode: "1",
          NickName: "가나다라",
          score: 4,
          scoreCount: 12,
          title: "파이썬를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "자바" }
          ]
        },
        {
          mentoCode: "2",
          NickName: "가나다라마바사",
          score: 4,
          scoreCount: 12,
          title: "파이썬를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "타입스크립트" }
          ]
        },
        {
          mentoCode: "3",
          NickName: "가나다라마",
          score: 4,
          scoreCount: 12,
          title: "파이썬를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "자바스크립트" },
            { code: "2", name: "자바스크립트" },
            { code: "2", name: "자바스크립트" }
          ]
        },
        {
          mentoCode: "4",
          NickName: "가나다라마",
          score: 4,
          scoreCount: 12,
          title: "파이썬를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "자바스크립트" }
          ]
        },
        {
          mentoCode: "5",
          NickName: "가나다라마",
          score: 4,
          scoreCount: 12,
          title: "파이썬를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "자바스크립트" }
          ]
        },
        {
          mentoCode: "6",
          NickName: "가나다라마",
          score: 4,
          scoreCount: 12,
          title: "파이썬를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "자바스크립트" }
          ]
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
<style scoped>
.mentoPart {
  position: relative;
  text-align: start;
}
.mentoPart > button {
  background-color: #8094be;
  border-radius: 5px;
  border-style: none;
  color: white;
}
.mentoNickName {
  margin: 10px;
}
#card1 {
  margin-right: 10px;
}
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
.partSearch {
  position: relative;
  right: 55px;
}
</style>
