<template>
  <div>
    <div class="payment-row" v-for="item in page" :key="item.room">
      <div class="payment-item">{{ item.id }}</div>
      <div class="payment-item">{{ item.date }}</div>
      <div class="payment-item">{{ item.category }}</div>
      <div class="payment-item">{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentList",
  props: {
    page: [],
  },
};
</script>

<style>
</style>