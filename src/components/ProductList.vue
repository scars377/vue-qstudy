<template>
  <div>
    <input type='text' v-model="filter"/>
    <select v-model="selectedRange">
      <option
        v-for="(item, index) in range"
        :value="item"
        :key="index"
      >
        {{item.label}}
      </option>
    </select>
    <div class="product-list">
      <div
        class="product"
        v-for="(product,index) in filteredProducts"
        :key="index"
      >
        <div class="product-img" :style="imgStyle(product.picture)" />
        <div class="product-name">{{product.openID}}</div>
        <div class="product-price">{{product.score.toLocaleString()}}</div>
      </div>
    </div>
  </div>
</template>

<script>
const range = [
  { label: '不限', max: Number.MAX_VALUE, min: 0 },
  { label: '100 萬以上', max: Number.MAX_VALUE, min: 1000000 },
  { label: '50 萬 - 100 萬', max: 1000000, min: 500000 },
  { label: '5 萬 - 50 萬', max: 500000, min: 50000 },
  { label: '5000 - 5 萬', max: 50000, min: 5000 },
  { label: '5000 以下', max: 5000, min: 0 },
];

export default {
  props: ['products'],
  data() {
    return {
      filter: '',
      selectedRange: range[0],
      range,
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => (
        product.openID.includes(this.filter) &&
        product.score >= this.selectedRange.min &&
        product.score < this.selectedRange.max
      ));
    },
  },
  methods: {
    imgStyle(img) {
      return {
        backgroundImage: `url('https://assets-17app.akamaized.net/THUMBNAIL_${img}')`,
      };
    },
  },
};
</script>

<style scoped>
img{
  width: 80px;
}
.product-list{
  display: flex;
  flex-flow: row wrap;
}
.product{
  flex: 1 1 120px;
  max-width: 200px;
  height: 160px;
  border: 1px solid #ddd;
  margin: 8px;
  text-align: center;
  cursor: pointer;
}
.product:hover{
  transform: scale(1.05);
}
.product-img{
  width: 100%;
  height: 100px;
  background-position: center top;
  background-size: cover;
}
.product-name{
  line-height: 1.8em;
}
.product-price{
  font-size: 1.2em;
}
</style>
