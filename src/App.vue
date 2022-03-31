<template>
  <div class="container">
    <button @click="show = !show" class="add-cost">ADD NEW COST +</button>
    <AddCosts @getNewData="getNewCost" v-show="show" />
    <div class="payment-row">
      <div class="payment-item">#</div>
      <div class="payment-item">Date</div>
      <div class="payment-item">Category</div>
      <div class="payment-item">Value</div>
    </div>
    <PaymentList :page="x" />
    <CostPagination :items="getPage" @NumberPage="getPaymentList" />
  </div>
</template>

<script>
import PaymentList from "./components/PaymentList.vue";
import AddCosts from "./components/AddCosts.vue";
import CostPagination from "./components/CostPagination.vue";

export default {
  name: "App",
  components: {
    PaymentList,
    AddCosts,
    CostPagination,
  },
  data() {
    return {
      show: false,
      numberPage: "",
    };
  },
  methods: {
    getNewCost(data) {
      this.$store.dispatch("fetchNewItem", data);
    },
    getPaymentList(i) {
      this.numberPage = i;
      this.x;
    },
  },
  created() {
    this.$store.dispatch("fetchData");
    this.numberPage = "page1";
  },
  computed: {
    x() {
      return this.$store.getters.getPaymentList(this.numberPage);
    },
    getItems() {
      return this.$store.getters.getPaymentList;
    },
    getPage() {
      return this.$store.getters.getPage;
    },
  },
};
</script>

<style lang="scss" type="scoped">
* {
  margin: 0;
  padding: 0;
}
.container {
  margin: 0 auto;
  width: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.payment-row {
  display: flex;
  width: 800px;
  justify-content: space-between;
}
.add-cost {
  width: 80px;
  height: 50px;
  margin-bottom: 50px;
}
</style>
