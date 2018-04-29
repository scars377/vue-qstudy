<template>
  <div>
    <Cart :cart="cart"/>
    <Slider :images="images" width="100%"/>
    <Countdown :endTime="endTime"/>
    <div class="container">
      <div class="menu">
        <Sidebar/>
      </div>
      <div class="content">
        <router-view
          :addToCart="addToCart"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import Member from './components/Member';
import Slider from './components/Slider';
import Countdown from './components/Countdown';
import Cart from './components/Cart';

import image1 from './assets/29D1CE5B-38F5-417E-9FFE-648D67706E0B.jpg';
import image2 from './assets/B3A21FA7-B481-4D50-9834-C33A055C04FB.jpg';
import image3 from './assets/C020BF0E-DA4A-4B26-A42E-CFF1A6090CD6.jpg';


export default {
  components: {
    Sidebar,
    ProductList,
    Slider,
    Countdown,
    Member,
    Cart,
  },
  data() {
    return {
      endTime: new Date('2018-05-15T00:00:00').getTime(),
      images: [
        image1,
        image2,
        image3,
      ],
      cart: [],
    };
  },
  methods: {
    add() {
      this.count += this.step;
      this.step += 1;
    },
    addToCart(item) {
      this.cart = this.cart.concat(item);
    },
  },
};

</script>

<style scoped>
h1{
  color: blue;
}
.container{
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
}
.menu{
  flex: 0 0 200px;
  height: 100%;
  background: #cde;
}
.content{
  margin: 12px;
}
</style>
