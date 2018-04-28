<template>
  <div class="slider">
    <img
      class="img"
      v-for="image in images"
      :src="image"
      :key="image"
    />
  </div>
</template>

<script>
import image1 from '../assets/29D1CE5B-38F5-417E-9FFE-648D67706E0B.jpg';
import image2 from '../assets/B3A21FA7-B481-4D50-9834-C33A055C04FB.jpg';
import image3 from '../assets/C020BF0E-DA4A-4B26-A42E-CFF1A6090CD6.jpg';

export default{
  data() {
    return {
      images: [
        image1,
        image2,
        image3,
      ],
    };
  },
};
</script>

<style>
.img{
  width: 100px;
}
</style>
