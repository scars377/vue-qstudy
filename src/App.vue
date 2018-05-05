<template>
  <div>
    <!-- <Slider :images="images" width="100%"/> -->
    <Countdown :endTime="endTime"/>
    <Breadcrumbs/>
    <div class="container">
      <div class="menu">
        <Sidebar/>
      </div>
      <div class="content">
        <router-view/>
      </div>
      <Modal/>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import Member from './components/Member';
import Slider from './components/Slider';
import Countdown from './components/Countdown';
import Modal from './components/Modal';
import Breadcrumbs from './components/Breadcrumbs';

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
    Modal,
    Breadcrumbs,
  },
  data() {
    return {
      endTime: new Date('2018-05-15T00:00:00').getTime(),
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
