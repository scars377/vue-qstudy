<template>
  <div class="slider" :style="sliderStyle">
    <div class="container" :style="containerStyle">
      <div class="content" :style="contentStyle">
        <div
          class="img"
          v-for="image in images"
          :style="imageStyle(image)"
          :key="image"
        />
        <div
          class="img"
          :style="imageStyle(images[0])"
        />
      </div>
    </div>
    <div class="btns">
      <button
        v-for="(image, index) in images"
        :class="btnClass(index)"
        @click="setIdx(index)"
        :key="index"
      >
        {{index}}
      </button>
    </div>
  </div>
</template>

<script>

export default{
  props: ['images', 'width', 'height'],
  data() {
    return {
      transition: true,
      idx: 0,
    };
  },
  computed: {
    sliderStyle() {
      return {
        width: this.width,
      };
    },
    containerStyle() {
      return {
        height: this.height,
      };
    },
    contentStyle() {
      return {
        transition: this.transition ? 'transform .3s ease-in-out' : 'none',
        transform: `translateX(${-this.idx * 100}%)`,
      };
    },
  },
  methods: {
    imageStyle(img) {
      return {
        backgroundImage: `url('${img}')`,
      };
    },
    btnClass(index) {
      return index === this.idx ? 'active' : '';
    },
    setIdx(index) {
      clearInterval(this.autoTimer);
      this.idx = index;
    },
    autoNext() {
      if (this.idx === this.images.length) {
        this.transition = false;
        this.idx = 0;
        setTimeout(() => {
          this.transition = true;
        }, 100);
      } else if (this.idx === this.images.length - 1) {
        this.idx += 1;
        setTimeout(() => {
          this.autoNext();
        }, 300);
      } else {
        this.idx += 1;
      }
    },
  },
  mounted() {
    this.autoTimer = setInterval(this.autoNext, 2000);
  },
};
</script>

<style>
.slider{
  width: 600px;
}
.container{
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.content{
  width: 100%;
  height: 100%;
  white-space: nowrap;
}
.img{
  display: inline-block;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.btns{
  text-align: center;
}
button.active{
  color: red;
}
</style>
