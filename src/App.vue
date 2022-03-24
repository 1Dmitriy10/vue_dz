<template>
  <div class="container">
    <PaymentForm @AddNewPayment="addData" />
    <RenderMyList :list="paymentsList" :page="numberPage" />
    <PaginationPayment
      :langList="paymentsList.length"
      @numberPage="getNumberPage"
    />
  </div>
</template>

<script>
import RenderMyList from "./components/RenderMyList.vue";
import PaymentForm from "./components/PaymentForm.vue";
import PaginationPayment from "./components/PaginationPayment.vue";

export default {
  name: "App",
  components: {
    RenderMyList,
    PaymentForm,
    PaginationPayment,
  },
  data() {
    return {
      paymentsList: [],
      numberPage: 1,
    };
  },
  methods: {
    getData() {
      return [
        {
          id: "1",
          date: "28.03.2020",
          category: "Food",
          value: "169",
        },
        {
          id: "2",
          date: "24.03.2020",
          category: "Transport",
          value: "350",
        },
        {
          id: "3",
          date: "24.03.2020",
          category: "Food",
          value: "532",
        },
        {
          id: "4",
          date: "21.03.2020",
          category: "Housing",
          value: "273",
        },
        {
          id: "5",
          date: "21.03.2020",
          category: "Healthcare",
          value: "545",
        },
        {
          id: "6",
          date: "16.03.2020",
          category: "Housing",
          value: "502",
        },
        {
          id: "7",
          date: "14.03.2020",
          category: "Clothing",
          value: "692",
        },
        {
          id: "8",
          date: "02.03.2020",
          category: "Food",
          value: "143",
        },
        {
          id: "9",
          date: "01.03.2020",
          category: "Housing",
          value: "339",
        },
        {
          id: "10",
          date: "28.03.2020",
          category: "Clothing",
          value: "913",
        },
      ];
    },
    addData(data) {
      let id = this.paymentsList.length + 1;
      data.id = id;
      this.paymentsList.push(data);
    },
    getNumberPage(p) {
      this.numberPage = p;
    },
  },
  created() {
    this.paymentsList = this.getData();
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  margin: 0 auto;
}
</style>
