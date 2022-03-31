<template>
  <div>
    <form action="#" class="add-item">
      <input type="text" v-model="description" />
      <input type="text" v-model="amount" />
      <input type="date" v-model="date" />
      <button @click="addCost" type="submit" class="btn-add-item">ADD +</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddCosts",
  data() {
    return {
      description: "",
      amount: "",
      date: "",
    };
  },
  methods: {
    addCost() {
      const data = {
        date: this.date || this.getDate,
        category: this.description,
        value: this.amount,
      };
      this.$emit("getNewData", data);
    },
  },
  computed: {
    getDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
};
</script>

<style lang="scss" type="scoped">
.add-item {
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 30px;
}
.btn-add-item {
  width: 80px;
  height: 50px;
  margin-bottom: 50px;
}
</style>