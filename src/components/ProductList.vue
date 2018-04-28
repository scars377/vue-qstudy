<template>
  <div>
    <div
      v-for="(product,index) in products"
      :key="index"
    >
      <img :src="imgSrc(product.picture)"/>
      {{product.openID}}
      {{product.score}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    fetch('https://webcdn.17app.co/campaign/1804-tw-full-of-you-5-s2.json')
      .then(response => response.json())
      .then((data) => {
        this.products = data['streamers-honey'].slice(0, 100);
      });
  },
  methods: {
    imgSrc(img) {
      return `https://assets-17app.akamaized.net/THUMBNAIL_${img}`;
    },
  },
};
</script>

<style scoped>
img{
  width: 80px;
}
</style>
