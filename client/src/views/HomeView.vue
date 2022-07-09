<template>
  <div>
    <div
      id="carouselExampleControls"
      class="carousel slide mt-5"
      data-bs-ride="carousel">
      <div id="user-wrap" class="carousel-inner">
        <div id="user-image" class="carousel-item active">
          <img src="../assets/back.png" class="d-block w-200" alt="..." />
          <div class="user-text">
            <h1 style="font-size: 80px"><strong>프로젝트</strong></h1>
            <p>프로젝트에 참여할 사람을 모집하거나, 참여하세요.</p>
          </div>
          <div class="user-img">
            <img src="../assets/플젝1.png" alt="" />
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/back.png" class="d-block w-200" alt="..." />
          <div class="user-text">
            <h1 style="font-size: 80px"><strong>멘토링</strong></h1>
            <p>프로젝트가 막막할 때, 당신의 멘토가 기다리고 있습니다.</p>
          </div>
          <div class="user-img2">
            <img src="../assets/멘토링.png" alt="" />
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="container">
      <div class="row mt-5">
        <p class="col-2 text-start h4"><strong>프로젝트 리스트</strong></p>
        <p class="col-10 text-end">
          <a href="../project/recruit">프로젝트 더보기</a>
        </p>
        <hr />
      </div>
      <!-- 패러셀 -->

      <!-- 상단 : 프로젝트 리스트 -->
      <CardList class="mt-3"></CardList>
      <!-- <div class="project-list">
        <div class="row" style="vertical-align: middle">
          <div
            id="card"
            class="card col my-3 p-0"
            style="border-radius: 10px; max-width: 286px; min-width: 286px"
            v-for="(project, i) in projects"
            :key="i">
            <p class="card-title text-start text-muted p-2">
              시작예정일 : {{ project.expDate }}
            </p>
            <div class="card-body">
              <h2 class="fs-5 text-center">
                <strong>{{ project.title }}</strong>
              </h2>
              <p class="text-start text-muted">
                {{ project.info }}
              </p>
              <div class="card-subtitle text-end">
                <i class="bi bi-eye me-1"></i>{{ project.viewCount }}
                <div class="row text-center">
                  <p class="col-8 text-start">{{ project.writter }}</p>
                  <p class="col-4 text-end">
                    <i class="bi bi-bookmark me-1"></i
                    >{{ project.bookmarkCount }}
                  </p>
                  <hr />
                  <div class="text-center" style="justify-content: center">
                    <div
                      class="stack-icon mx-1"
                      style="width: auto"
                      v-for="(stack, index) in project.stacks"
                      :key="index">
                      {{ stack }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <!-- 하단 : 멘토리스트 -->
      <div style="margin-top: 120px"></div>
      <div class="row mt-5">
        <p class="col-2 text-start h4"><strong>멘토 리스트</strong></p>
        <p class="col-10 text-end">
          <a href="../mentolist">멘토 더보기</a>
        </p>
        <hr />
      </div>
      <div class="mentorList">
        <div class="row text-center">
          <div
            id="card2"
            class="col card my-3"
            style="
              max-width: 400px;
              min-width: 400px;
              min-height: 400px;
              max-height: 400px;
            "
            v-for="(mentor, index) in mentors"
            :key="index">
            <div class="card-title text-center mt-4 mb-0">
              <img
                src="../assets/default.jpg"
                alt="../assets/default.jpg"
                style="border-radius: 70%; width: 150px" />
            </div>
            <div class="card-body">
              <h2 class="fs-5 mt-0">
                <strong>{{ mentor.name }}</strong>
              </h2>
              <i class="bi bi-star-fill pro_star_color"></i>5.0 / (14)
              <p class="mt-2">
                {{ mentor.info }}
              </p>
              <hr />
              <div
                class="stack-icon mx-1"
                style="width: auto"
                v-for="(part, index) in mentor.part"
                :key="index">
                {{ part }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardList from "@/components/CardList.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { CardList },
  data() {
    return {
      // projects: [
      //   {
      //     expDate: "2022/07/24",
      //     title: "프로젝트 멘토링 서비스",
      //     info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      //     viewCount: "201",
      //     bookmarkCount: "14",
      //     writter: "joansdev",
      //     stacks: ["JS", "TS", "React"]
      //   },
      //   {
      //     expDate: "2022/11/13",
      //     title: "찰리와 초콜릿 기계 설계해보기",
      //     info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      //     viewCount: "20198",
      //     bookmarkCount: "281",
      //     writter: "찰리",
      //     stacks: ["JS", "TS"]
      //   },
      //   {
      //     expDate: "2023/03/03",
      //     title: "맛집 추천 프로그램",
      //     info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      //     viewCount: "9",
      //     bookmarkCount: "2",
      //     writter: "김준현",
      //     stacks: ["JS", "TS", "React", "Spring", "AWS"]
      //   },
      //   {
      //     expDate: "2022/05/01",
      //     title: "동물 건강진료 서비스",
      //     info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      //     viewCount: "521",
      //     bookmarkCount: "21",
      //     writter: "강형욱",
      //     stacks: ["JS", "TS", "React", "Kotlin"]
      //   },
      //   {
      //     expDate: "2022/02/09",
      //     title: "음악 선곡 프로그램",
      //     info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      //     viewCount: "21",
      //     bookmarkCount: "4",
      //     writter: "김범수",
      //     stacks: ["JS", "TS", "React"]
      //   },
      //   {
      //     expDate: "2023/12/24",
      //     title: "크리스마스 데이팅 어플",
      //     info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      //     viewCount: "22106",
      //     bookmarkCount: "6892",
      //     writter: "Santa Claus",
      //     stacks: ["JS", "TS", "React", "Node.js", "Kotlin"]
      //   },
      //   {
      //     expDate: "2022/04/20",
      //     title: "엑셀 자동화 프로그램",
      //     info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      //     viewCount: "1",
      //     bookmarkCount: "0",
      //     writter: "김대리",
      //     stacks: ["JS", "TS", "React"]
      //   },
      //   {
      //     expDate: "2021/02/28",
      //     title: "집 지키는 로봇 설계",
      //     info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      //     viewCount: "31202",
      //     bookmarkCount: "560",
      //     writter: "케빈",
      //     stacks: ["JS", "React"]
      //   }
      // ],
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
      ],

      mentors: [
        {
          img: "../assets/profile.jpg",
          name: "joansdev",
          score: "5.0",
          scoreCount: "14",
          info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          part: ["프론트엔드", "디자인"]
        },
        {
          img: "../assets/profile2.jpg",
          name: "캡틴안산",
          score: "4.5",
          scoreCount: "9",
          info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          part: ["백엔드", "모바일"]
        },
        {
          img: "../assets/profile.jpg",
          name: "스티브잡스",
          score: "5.0",
          scoreCount: "201",
          info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          part: ["모바일"]
        },
        {
          img: "../assets/profile.jpg",
          name: "joansdev",
          score: "5.0",
          scoreCount: "14",
          info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          part: ["프론트엔드", "디자인"]
        },
        {
          img: "../assets/profile.jpg",
          name: "joansdev",
          score: "5.0",
          scoreCount: "14",
          info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          part: ["프론트엔드", "디자인"]
        },
        {
          img: "../assets/profile.jpg",
          name: "joansdev",
          score: "5.0",
          scoreCount: "14",
          info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          part: ["프론트엔드", "디자인"]
        }
      ]
    };
  }
};
</script>

<style scoped>
.d-block {
  width: 100%;
  height: 500px;
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
  width: auto;
}

.row {
  vertical-align: middle;
}

.card {
  justify-content: center;
}

#card {
  cursor: pointer;
  transition: all 0.3s;
  margin-left: 35px;
}

#card:hover {
  transform: translateY(-4px);
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

#card2 {
  cursor: pointer;
  transition: all 0.3s;
  margin-left: 30px;
}

#card2:hover {
  transform: translateY(-4px);
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.user-text {
  position: absolute;
  top: 50%;
  left: 113%;
  width: 200%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  text-align: start;
  color: white;
}

.user-img {
  position: absolute;
  top: 58%;
  left: 70%;
  transform: translate(-50%, -50%);
}

.user-img2 {
  position: absolute;
  top: 59%;
  left: 70%;
  transform: translate(-50%, -50%);
}

#user-wrap {
  width: 100%;
  margin: 10px auto;
  position: relative;
}

#user-image {
  width: 100%;
  vertical-align: middle;
}
</style>
