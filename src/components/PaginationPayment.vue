<template>
  <div class="pagination">
    <button class="previous">previous</button>
    <button @click="savePage(i)" v-for="i in page" :key="i">{{ i }}</button>
    <button class="next">next</button>
  </div>
</template>

<script>
export default {
  name: "PaginationPayment",
  props: {
    langList: [],
  },
  data() {
    return {
      page: "",
    };
  },
  computed: {
    pageLength() {
      let result = 0;
      result = Math.ceil(this.langList / 5);
      return result;
    },
  },
  methods: {
    savePage(i) {
      this.$emit("numberPage", i);
    },
  },
  created() {
    this.page = this.pageLength;
  },
  updated() {
    this.page = this.pageLength;
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
}
</style>