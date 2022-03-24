<template>
  <div class="payment-box">
    <div class="title-row">
      <div class="title-number">#</div>
      <div class="title-date">Date</div>
      <div class="title-category">Category</div>
      <div class="title-value">Value</div>
    </div>
    <div class="item-row" v-for="item in pagination" :key="item">
      <div class="title-number">{{ item.id }}</div>
      <div class="title-date">{{ item.date }}</div>
      <div class="title-category">{{ item.category }}</div>
      <div class="title-value">{{ item.value }}</div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "RenderMyList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    page: [],
  },
  data() {
    return {
      size: 5,
    };
  },
  watch: {
    page() {
      this.pageCount;
    },
  },
  computed: {
    pagination() {
      const start = (this.page - 1) * this.size;
      const end = start + this.size;
      return this.list.slice(start, end);
    },
  },
};
</script>

<style lang="scss" scoped>
.title-row {
  width: 800px;
  display: flex;
  padding-bottom: 30px;
}
.item-row {
  width: 800px;
  display: flex;
  padding-top: 15px;
}
.title-number {
  width: 80px;
}
.title-date {
  width: 240px;
}
.title-category {
  width: 240px;
}
.title-value {
  width: 240px;
}
</style>