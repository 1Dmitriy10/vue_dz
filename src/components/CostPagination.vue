<template>
  <div class="pagination">
    <button
      @click="getNumberPage"
      class="pagination-item"
      v-for="item in items"
      :key="item"
    >
      {{ item }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CostPagination",
  props: {
    items: [],
  },

  methods: {
    getNumberPage(i) {
      this.$emit("NumberPage", i.target.innerText);
    },
  },
};
</script>

<style lang="scss" type="scoped">
.pagination {
  display: flex;
  justify-content: space-around;
  width: 500px;
  align-self: center;
  padding-top: 40px;
}
.pagination-item {
  width: 30px;
  height: 30px;
}
</style>