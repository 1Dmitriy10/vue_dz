<template>
  <div>
    <button @click="show = !show">add new cost +</button>
    <div action="" v-show="show">
      <input placeholder="Payment description" v-model="category" />
      <input placeholder="Payment amount" v-model="value" />
      <input placeholder="Payment date" v-model="date" />
      <button @click="saveInput">ADD</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentForm",
  data() {
    return {
      show: false,
      category: "",
      value: "",
      date: "",
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    saveInput() {
      const data = {
        category: this.category,
        value: this.value,
        date: this.date || this.getCurrentDate,
      };
      this.$emit("AddNewPayment", data);
    },
  },
};
</script>

<style>
</style>