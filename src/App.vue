<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="add">+{{step}}</button>
    <ProductList/>
    <Slider :images="images"/>
  </div>
</template>

<script>
import Menu from './components/Menu';
import ProductList from './components/ProductList';
import Slider from './components/Slider';

import image1 from './assets/29D1CE5B-38F5-417E-9FFE-648D67706E0B.jpg';
import image2 from './assets/B3A21FA7-B481-4D50-9834-C33A055C04FB.jpg';
import image3 from './assets/C020BF0E-DA4A-4B26-A42E-CFF1A6090CD6.jpg';

export default {
  components: {
    Menu,
    ProductList,
    Slider,
  },
  data() {
    return {
      count: 0,
      step: 1,
      images: [
        image1,
        image2,
        image3,
      ],
    };
  },
  methods: {
    add() {
      this.count += this.step;
      this.step += 1;
    },
  },
};

</script>


<style scoped>
h1{
  color: blue;
}
</style>
