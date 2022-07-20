<template>
  <div>
    <!-- 댓글 작성 UI는 별도 컴포넌트로 빼기.. -->
    <!-- 댓글 밑 부분.. -->
    <div class="col-md-12">
      <div class="panel">
        <!-- v-for로 댓글 다 가져오는데, parent null에 따라 원댓글/대댓글 구분하기.  -->
        <div
          class="panel-body"
          v-for="comment in commentList"
          :key="comment.reply_id">
          <!-- 원댓글 -->
          <div class="media-block" v-if="comment.parent_id === null">
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
                <!-- 작성자 아이디 -> 닉네임으로 변ㄴ경..  -->
                <a
                  href="#"
                  class="btn-link text-semibold media-heading box-inline a-black fs-5"
                  >{{ comment.writer_nickname }}</a
                >
                <p class="text-muted text-sm">{{ comment.created_datetime }}</p>
              </div>
              <p>
                {{ comment.contents }}
              </p>
              <div class="pad-ver text-end pe-4">
                <!-- 누르면 취소 버튼으로 바뀌게.. -->
                <button
                  type="button"
                  class="btn pro_button btn-sm"
                  @click="comment.isRecomment = !comment.isRecomment">
                  {{ comment.isRecomment ? "취소" : "답글" }}
                </button>
              </div>
              <hr />
              <div class="mx-2 py-2" v-if="comment.isRecomment">
                <!-- props로 원댓글의 id 넘겨줘야 함. -->
                <write-comment-view />
                <hr />
              </div>
              <div v-for="recomment in commentList" :key="recomment.reply_id">
                <div
                  class="media-block"
                  v-if="recomment.parent_id == comment.reply_id">
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
                          class="btn-link text-semibold media-heading box-inline col-9 a-black fs-5"
                          >{{ recomment.writer_nickname }}</a
                        >
                        <span class="col-3 text-end">
                          <!-- 수정 여부에 따라 텍스트 필드  -->
                          <button
                            type="button"
                            class="btn btn-link com_link_blue"
                            @click="
                              recomment.isRecomment = !recomment.isRecomment
                            ">
                            {{ recomment.isRecomment ? "수정완료" : "  수정" }}
                          </button>
                          |
                          <button
                            type="button"
                            class="btn btn-link com_link_red"
                            @click="deleteComment">
                            삭제
                          </button>
                        </span>
                      </p>
                      <p class="text-muted text-sm">
                        {{ recomment.insert_date }}
                      </p>
                    </div>
                    <p>
                      {{ recomment.contents }}
                    </p>
                    <div class="pad-ver text-end pe-4">
                      <button
                        type="button"
                        class="btn pro_button btn-sm"
                        @click="recomment.isRecomment = !recomment.isRecomment">
                        {{ recomment.isRecomment ? "취소" : "답글" }}
                      </button>
                    </div>
                    <hr />
                    <div class="mx-2 py-2" v-if="recomment.isRecomment">
                      <!-- props로 원댓글의 id 넘겨줘야 함. -->
                      <write-comment-view />
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WriteCommentView from "../components/WriteCommentView.vue";
export default {
  components: { WriteCommentView },
  props: {
    // 어떤 페이지냐에 따라 API 호출 주소 분기
    pageType: {
      type: String,
      default: ""
    },
    projectId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      isRecomment: false,
      commentList: []
    };
  },
  setup() {},
  created() {
    this.getCommentList();
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getCommentList() {
      let data = {};
      data.pageType = data.pageType = "projectRecruit"; // TODO: 수정 필요
      this.commentList = await this.$get(
        `/comment/recruit/get/${this.projectId}`
      );
      // await console.log(this.commentList);
    },

    deleteCheckAlert() {
      this.$swal({
        title: "정말 삭제하시겠습니까?",
        text: "삭제한 댓글은 되돌릴 수 없습니다.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "삭제",
        cancelButtonText: "취소"
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal({
            title: "삭제 완료",
            text: "댓글이 삭제되었습니다.",
            icon: "success"
          });
        }
      });
    },

    deleteComment() {
      this.deleteCheckAlert();
      // 여기서 댓글 삭제 구현
      // 삭제를 누른 댓글의 Id를 가져오기.
    }
  }
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
  /* padding: 25px 20px; */
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

.a-black {
  color: black;
  text-decoration: none;
}
</style>
