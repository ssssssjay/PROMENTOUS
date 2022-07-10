<template>
  <div id="app">
    <VueEditor v-model="abc" :placeholder="contents"></VueEditor>
    <p></p>
  </div>
</template>

<script>
import { VueEditor } from "vue3-editor";

export default {
  props: {
    contents: {
      type: String,
      default: ""
    }
  },
  components: {
    VueEditor
  },

  data() {
    return {
      abc: this.contents
    };
  }
};
</script>
