<template>
  <!-- 댓글 작성 영역(대댓글 아닌 기본 댓글 필드) -->
  <div class="row">
    <div class="col-12">
      <form>
        <div class="row">
          <div class="form-group mb-3 px-2">
            <textarea
              id="txtarea"
              class="form-control"
              rows="5"
              v-model="commentText"></textarea>
          </div>
        </div>
      </form>
      <div class="row">
        <!-- <div class="form-check ps-5 text-start col">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">
            비밀글
          </label>
        </div> -->
        <div class="text-end col">
          <button
            type="button"
            class="btn btn-sm pro_button"
            @click="registerComment">
            등록
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
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
      commentData: {
        pageType: "",
        commentText: "",
        projectId: null
      }
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async registerComment() {
      // 댓글 등록 시 넘겨줄 정보들
      let data = this.commentData;
      data.pageType = "projectRecruit";
      data.writerId = 1; // TODO: 추후 store에서 가져와서 넣어줄 예정
      data.commentText = this.commentText;
      data.sequence = 1; // 댓글 그룹 내 순서
      // 대댓글이 아닌 원댓글 작성 필드이므로 targetId, parentId는 null

      // 댓글 입력 없이 등록 버튼 누르는 경우 예외처리
      if (data.commentText === "" || !data.commentText) {
        return;
      }

      // TODO: 대댓글인 경우 targetId, targetSeq 설정해주는 것 필요함.!

      const r = await this.$post(`/comment/register/${this.projectId}`, data);
      // TODO: 정상 등록 -> 댓글 부분 화면 갱신 필요
      if (r.status === 200) {
        document.getElementById("txtarea").value = "";
        console.log("댓글 등록 성공");
      }
    }
  }
};
</script>
