<template>
  <!-- 댓글 작성 영역 -->
  <div class="row">
    <div class="comment-form col-12">
      <form>
        <div class="row">
          <div class="form-group">
            <textarea
              name="reply"
              rows="6"
              class="form-control h-100"
              placeholder="Your Reply"></textarea>
          </div>
        </div>
      </form>
      <div class="row">
        <div class="form-check ps-5 text-start col">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">
            비밀글
          </label>
        </div>
        <div class="text-end col">
          <button type="button" class="btn btn-outline-dark btn-sm">
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
