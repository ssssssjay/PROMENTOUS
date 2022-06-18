<template>
  <div>
    <div>
      <select
        name=""
        id="inline"
        v-model="selectedPart"
        class="form-select"
        size="4"
        aria-label="size 4 select example"
        style="overflow-y: hidden"
      >
        <option
          :value="part.partCode"
          v-for="part in stackList.filter((p) => p.stackCode === '001')"
          :key="part.partCode"
        >
          {{ part.partName }}
        </option>
      </select>
      <select
        name=""
        id="inline"
        v-model="selectedStack"
        class="form-select"
        size="10"
        aria-label="size 10 select example"
        multiple="multiple"
      >
        <option
          :value="stack.stackName"
          :key="stack.stackCode"
          v-for="stack in stackList.filter((s) => s.partCode === selectedPart)"
        >
          {{ stack.stackName }}
        </option>
      </select>
      <p>{{ selectedStack }}</p>
    </div>
    <Multiselect
      v-model="value"
      mode="tags"
      :close-on-select="false"
      :searchable="true"
      :create-option="true"
      :options="options"
    />
    <Multiselect
      v-model="value2"
      mode="tags"
      :close-on-select="false"
      :searchable="true"
      :create-option="true"
      :groups="true"
      :options="options2"
    />
    <p>{{ value }}</p>
    <p>{{ value2 }}</p>
    <p>{{ finallyStackData }}</p>
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect";

export default {
  components: {
    Multiselect,
  },
  computed: {
    finallyStackData() {
      if (this.value[0] === this.selectedStack[0]) {
        return this.value;
      } else {
        return this.value + " " + this.selectedStack;
      }
    },
  },
  data() {
    return {
      value: [],
      value2: [],
      options: [
        "Javascript",
        "TypeScript",
        "React",
        "Java",
        "Spring",
        "Node.js",
        "Flutter",
        "Swift",
        "Kotlin",
        "AWS",
        "Kubernetes",
        "Docker",
      ],
      options2: [
        { label: "프론트엔드", options: ["Javascript", "TypeScript", "React"] },
        { label: "백엔드", options: ["Java", "Spring", "Node.js"] },
        { label: "모바일", options: ["Flutter", "Swift", "Kotlin"] },
        { label: "기타", options: ["AWS", "Kubernetes", "Docker"] },
      ],
      selectedPart: "",
      selectedStack: [],
      stackList: [
        {
          partCode: "01",
          partName: "프론트엔드",
          stackCode: "001",
          stackName: "Javascript",
        },
        {
          partCode: "01",
          partName: "프론트엔드",
          stackCode: "002",
          stackName: "TypeScript",
        },
        {
          partCode: "01",
          partName: "프론트엔드",
          stackCode: "003",
          stackName: "React",
        },

        {
          partCode: "02",
          partName: "백엔드",
          stackCode: "001",
          stackName: "Java",
        },
        {
          partCode: "02",
          partName: "백엔드",
          stackCode: "002",
          stackName: "Spring",
        },
        {
          partCode: "02",
          partName: "백엔드",
          stackCode: "003",
          stackName: "Node.js",
        },

        {
          partCode: "03",
          partName: "모바일",
          stackCode: "001",
          stackName: "Flutter",
        },
        {
          partCode: "03",
          partName: "모바일",
          stackCode: "002",
          stackName: "Swift",
        },
        {
          partCode: "03",
          partName: "모바일",
          stackCode: "003",
          stackName: "Kotlin",
        },

        {
          partCode: "04",
          partName: "기타",
          stackCode: "001",
          stackName: "AWS",
        },
        {
          partCode: "04",
          partName: "기타",
          stackCode: "002",
          stackName: "Kubernetes",
        },
        {
          partCode: "04",
          partName: "기타",
          stackCode: "003",
          stackName: "Docker",
        },
      ],
    };
  },
};
</script>
<style scoped>
select {
  width: 200px;
  height: 100px;
}
#inline {
  display: inline;
}
Multiselect {
  width: 100px;
}
</style>
<style src="@vueform/multiselect/themes/default.css"></style>
