<template>
  <div>
    <!-- 댓글 작성 UI는 별도 컴포넌트로 빼기.. -->
    <!-- 댓글 밑 부분.. -->
    <div class="col-md-12">
      <div class="panel">
        <!-- v-for로 댓글 다 가져오는데, parent null에 따라 원댓글/대댓글 구분하기.  -->
        <div class="panel-body">
          <!-- 원댓글1 -->
          <div class="media-block">
            <!-- 왼쪽 프사 -->
            <a class="media-left" href="#">
              <img
                class="img-circle img-sm"
                alt="Profile Picture"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
            </a>
            <!-- 우측 영역 -->
            <div class="media-body">
              <div class="mar-btm">
                <a
                  href="#"
                  class="btn-link text-semibold media-heading box-inline"
                  >Lisa D.</a
                >
                <p class="text-muted text-sm">2022/01/09 13:12</p>
              </div>
              <p>
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                enim ad minim veniam, quis nostrud exerci tation ullamcorper
                suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </p>
              <div class="pad-ver text-end pe-4">
                <button type="button" class="btn btn-outline-secondary btn-sm">
                  답글
                </button>
              </div>
              <hr />

              <!-- Comments -->
              <div>
                <!-- 대댓글 1 -->
                <div class="media-block">
                  <a class="media-left" href="#"
                    ><img
                      class="img-circle img-sm"
                      alt="Profile Picture"
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  /></a>
                  <div class="media-body">
                    <div class="mar-btm">
                      <p class="row mb-0">
                        <a
                          href="#"
                          class="btn-link text-semibold media-heading box-inline col-10"
                          >Bobby Marz</a
                        >
                        <span class="col-2">
                          <a
                            href="#"
                            class="btn-link text-semibold media-heading box-inline"
                            >수정</a
                          >
                          |
                          <a
                            href="#"
                            class="btn-link text-semibold media-heading box-inline"
                            >삭제</a
                          >
                        </span>
                      </p>
                      <p class="text-muted text-sm">2022/01/13 09:56</p>
                    </div>
                    <p>
                      Sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat.
                    </p>
                    <div class="pad-ver text-end pe-4">
                      <button
                        type="button"
                        class="btn btn-outline-secondary btn-sm">
                        답글
                      </button>
                    </div>
                    <hr />
                  </div>
                </div>
                <!-- 대댓글 2 -->
                <div class="media-block">
                  <a class="media-left" href="#"
                    ><img
                      class="img-circle img-sm"
                      alt="Profile Picture"
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                  </a>
                  <div class="media-body">
                    <div class="mar-btm">
                      <a
                        href="#"
                        class="btn-link text-semibold media-heading box-inline"
                        >Lucy Moon</a
                      >
                      <p class="text-muted text-sm">2022/01/14 19:01</p>
                    </div>
                    <p>
                      Duis autem vel eum iriure dolor in hendrerit in vulputate
                      ?
                    </p>
                    <div class="pad-ver text-end pe-4">
                      <button
                        type="button"
                        class="btn btn-outline-secondary btn-sm">
                        답글
                      </button>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 원댓글2 -->
          <div class="media-block pad-all">
            <a class="media-left" href="#"
              ><img
                class="img-circle img-sm"
                alt="Profile Picture"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            /></a>
            <div class="media-body text-start ps-4">
              <div class="mar-btm">
                <a
                  href="#"
                  class="btn-link text-semibold media-heading box-inline"
                  >John Doe</a
                >
                <p class="text-muted text-sm">2022/01/01 12:01</p>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
              <div class="pad-ver text-end pe-4">
                <button type="button" class="btn btn-outline-secondary btn-sm">
                  답글
                </button>
              </div>

              <hr />
            </div>
          </div>
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
      comments: [
        {
          id: 1,
          is_secret: false,
          content: "안녕하세요. 참가하고 싶은데 언제까지 모집하시나요?",
          insert_date: "2022/06/05 13:01",
          writer: "떡볶이",
          parent: null,
          seq: 1
        },
        {
          id: 2,
          is_secret: false,
          content: "7월 30일까지 모집할 예정입니다.",
          insert_date: "2022/06/05 18:41",
          writer: "오뎅",
          parent: 1, // 부모댓글의 id
          seq: 2
        },
        {
          id: 3,
          is_secret: true,
          content: "Node.js를 잘 다뤄야 하나요?",
          insert_date: "2022/06/06 07:34",
          writer: "순대",
          parent: null, // 부모댓글의 id
          seq: 1
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
body {
  margin-top: 20px;
  background: #ebeef0;
}

.img-sm {
  width: 46px;
  height: 46px;
}

.panel {
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.075);
  border-radius: 0;
  border: 0;
  margin-bottom: 15px;
}

.panel .panel-footer,
.panel > :last-child {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.panel .panel-heading,
.panel > :first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.panel-body {
  padding: 25px 20px;
}

.media-block .media-left {
  display: block;
  float: left;
}

.media-block .media-right {
  float: right;
}

.media-block .media-body {
  display: block;
  overflow: hidden;
  width: auto;
  text-align: left;
  padding-left: 20px;
}

.middle .media-left,
.middle .media-right,
.middle .media-body {
  vertical-align: middle;
}

.thumbnail {
  border-radius: 0;
  border-color: #e9e9e9;
}

.tag.tag-sm,
.btn-group-sm > .tag {
  padding: 5px 10px;
}

.tag:not(.label) {
  background-color: #fff;
  padding: 6px 12px;
  border-radius: 2px;
  border: 1px solid #cdd6e1;
  font-size: 12px;
  line-height: 1.42857;
  vertical-align: middle;
  -webkit-transition: all 0.15s;
  transition: all 0.15s;
}
.text-muted,
a.text-muted:hover,
a.text-muted:focus {
  color: #acacac;
}
.text-sm {
  font-size: 0.9em;
}
.text-5x,
.text-4x,
.text-5x,
.text-2x,
.text-lg,
.text-sm,
.text-xs {
  line-height: 1.25;
}

.btn-trans {
  background-color: transparent;
  border-color: transparent;
  color: #929292;
}

.btn-icon {
  padding-left: 9px;
  padding-right: 9px;
}

.btn-sm,
.btn-group-sm > .btn,
.btn-icon.btn-sm {
  padding: 5px 10px !important;
}

.mar-top {
  margin-top: 15px;
}
</style>
