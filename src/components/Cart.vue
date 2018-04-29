<template>
  <div class="cart">
    <label>Number</label>
    <span>{{count}}</span>
    <label>Total</label>
    <span>{{total.toLocaleString()}}</span>
  </div>
</template>

<script>
export default {
  props: ['cart'],
  computed: {
    count() {
      return this.cart.length;
    },
    total() {
      return this.cart.reduce((acc, { score }) => acc + score, 0);
    },
  },
};
</script>

<style>
.cart{
  text-align: right;
}
</style>

