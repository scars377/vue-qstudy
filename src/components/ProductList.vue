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
    <Pagenition
      v-if="pagenition"
      :numPages="numPages"
    />
    <div class="product-list">
      <div
        class="product"
        v-for="(product,index) in products"
        :key="index"
        @click="addToCart(product)"
      >
        <div class="product-img" :style="imgStyle(product.picture)" />
        <div class="product-name">{{product.openID}}</div>
        <div class="product-price">{{product.score.toLocaleString()}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Pagenition from './Pagenition';

const range = [
  { label: '不限', max: 10000000, min: 0 },
  { label: '100 萬以上', max: 10000000, min: 1000000 },
  { label: '50 萬 - 100 萬', max: 1000000, min: 500000 },
  { label: '5 萬 - 50 萬', max: 500000, min: 50000 },
  { label: '5000 - 5 萬', max: 50000, min: 5000 },
  { label: '5000 以下', max: 5000, min: 0 },
];

const MAX_COUNT = 20;

export default {
  props: ['url', 'pagenition', 'addToCart'],
  components: {
    Pagenition,
  },
  data() {
    return {
      loading: false,
      products: [],
      filter: '',
      selectedRange: range[0],
      range,
      startFrom: 0,
      total: 0,
    };
  },
  computed: {
    numPages() {
      return Math.ceil(this.total / MAX_COUNT);
    },
    page() {
      return parseInt(this.$route.params.page, 10) || 1;
    },
  },
  methods: {
    imgStyle(img) {
      return {
        backgroundImage: `url('https://assets-17app.akamaized.net/THUMBNAIL_${img}')`,
      };
    },
    getProducts() {
      if (this.loading) return;

      this.loading = true;
      axios.get(this.url, {
        params: {
          filter: this.filter,
          startFrom: this.startFrom,
          maxCount: MAX_COUNT,
          min: this.selectedRange.min,
          max: this.selectedRange.max,
        },
      })
        .then(response => response.data)
        .then((data) => {
          if (this.pagenition) {
            this.products = data.data;
            this.total = data.total;
          } else {
            this.products = this.products.concat(data.data);
            this.startFrom += data.data.length;
            this.onScroll();
          }
          this.loading = false;
        });
    },
    onScroll() {
      if (
        !this.pagenition && (
          window.scrollY + window.innerHeight >
          document.body.scrollHeight - 200
        )
      ) {
        this.getProducts();
      }
    },
  },
  watch: {
    filter() {
      this.startFrom = 0;
      this.products = [];
      this.$nextTick(this.onScroll);
    },
    selectedRange() {
      this.startFrom = 0;
      this.products = [];
      this.$nextTick(this.onScroll);
    },
    page(page) {
      this.startFrom = MAX_COUNT * (page - 1);
      this.getProducts();
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
    this.getProducts();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
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
  flex: 0 1 120px;
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
