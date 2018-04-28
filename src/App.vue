<template>
  <div>
    <Slider :images="images" width="100%"/>
    <ProductList :products="products"/>
  </div>
</template>

<script>
import axios from 'axios';
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
      products: [],
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
  mounted() {
    axios.get('https://webcdn.17app.co/campaign/1804-tw-full-of-you-5-s2.json')
      .then(response => response.data)
      .then((data) => {
        this.products = data['streamers-honey'].slice(0, 100);
      });
  },
};

</script>


<style scoped>
h1{
  color: blue;
}
</style>
