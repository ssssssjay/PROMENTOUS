<template>
  <div class="mb-5">
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <h2>후기 모아보기</h2>
        <div
          id="myCarousel"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel">
          <!-- Carousel indicators -->
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <!-- Wrapper for carousel items -->
          <div class="carousel-inner">
            <div
              class="carousel-item"
              v-for="review in reviewList"
              :key="review.id"
              :class="{ active: review.id == '1' }">
              <p class="d-block fs-4">
                {{ review.title }}
              </p>
              <p class="d-block">
                {{ review.content }}
              </p>
            </div>
          </div>

          <!-- Carousel controls -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev">
            <i class="bi bi-chevron-left"></i>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      reviewList: [
        {
          id: 1,
          title: "XX 프로젝트 참여 후기",
          content:
            "후기 내용111. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eusem tempor, varius quam at, luctus dui. Mauris magna metus,dapibus nec turpis vel, semper malesuada ante. Idac bibendumscelerisque non non purus. Suspendisse varius nibh non aliquet.",
          insert_date: "2022/06/05 13:01",
          writer: "떡볶이"
        },
        {
          id: 2,
          title: "OO 프로젝트 참여 후기",
          content:
            "후기 내용222. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eusem tempor, varius quam at, luctus dui. Mauris magna metus,dapibus nec turpis vel, semper malesuada ante. Idac bibendumscelerisque non non purus. Suspendisse varius nibh non aliquet.",
          insert_date: "2022/06/05 13:01",
          writer: "오뎅"
        },
        {
          id: 3,
          title: "ABCD 프로젝트 참여 후기",
          content:
            "후기 내용333. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eusem tempor, varius quam at, luctus dui. Mauris magna metus,dapibus nec turpis vel, semper malesuada ante. Idac bibendumscelerisque non non purus. Suspendisse varius nibh non aliquet.",
          insert_date: "2022/06/05 13:01",
          writer: "순대"
        }
      ]
    };
  },
  setup() {},
  created() {},
  mounted() {
    // 캐러셀 item 넘어가는 시간 간격 옵션 추가
    let firstCarouselItem = document.querySelector(".carousel-item");
    firstCarouselItem.setAttribute("data-bs-interval", 7000);
  },
  unmounted() {},
  methods: {}
};
</script>
<style scoped>
/* body {
  font-family: "Open Sans", sans-serif;
} */
h2 {
  color: #333;
  text-align: center;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  position: relative;
  margin: 30px 0 60px;
}
h2::after {
  content: "";
  width: 100px;
  position: absolute;
  margin: 0 auto;
  height: 3px;
  background: #49c0d0;
  left: 0;
  right: 0;
  bottom: -10px;
}
.col-center {
  margin: 0 auto;
  float: none !important;
}
.carousel {
  padding: 0 70px;
}
/* .carousel .carousel-item {
  color: #999;
  font-size: 14px;
  text-align: center;
  overflow: hidden;
  min-height: 290px;
} */
.carousel .carousel-item {
  color: #999;
  font-size: 15px;
  /* text-align: center; */
  overflow: hidden;
  /* min-height: 290px; */
}

/* .carousel .testimonial {
  padding: 30px 0 10px;
} */

.carousel-control-prev,
.carousel-control-next {
  width: 40px;
  height: 40px;
  margin-top: -20px;
  top: 50%;
  background: none;
}
.carousel-control-prev i,
.carousel-control-next i {
  font-size: 68px;
  line-height: 42px;
  position: absolute;
  display: inline-block;
  color: rgba(0, 0, 0, 0.8);
  text-shadow: 0 3px 3px #e6e6e6, 0 0 0 #000;
}
.carousel-indicators {
  bottom: -40px;
}
.carousel-indicators li,
.carousel-indicators li.active {
  width: 11px;
  height: 11px;
  margin: 1px 3px;
  border-radius: 50%;
  border: none;
}
.carousel-indicators li {
  background: #999;
  border-color: transparent;
  box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.2);
}
.carousel-indicators li.active {
  background: #555;
  box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.2);
}
</style>
