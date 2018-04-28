<template>
  <div class="menu">
    <transition name="slide">
      <div class="menu-content" v-if="show">
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
      </div>
    </transition>

    <div :class="btnClass" @click="toggle">
      <div class="menu-btn-bar top"/>
      <div class="menu-btn-bar mid"/>
      <div class="menu-btn-bar bot"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  computed: {
    btnClass() {
      return {
        'menu-btn': true,
        active: this.show,
      };
    },
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
.menu{
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.menu-content{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.9);
  color: white;
}
.menu-btn{
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
  background: rgba(0,0,0,0.8);
  color: white;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
.slide-enter,
.slide-leave-to{
  transform: translateX(100%)
}
.slide-enter-active,
.slide-leave-active{
  transition: transform .3s;
}

.menu-btn-bar{
  position: absolute;
  width: 20px;
  height: 2px;
  background: white;
  left: 11px;
}
.top{
  top: 12px;
  transition: transform .5s cubic-bezier(0.41, 1.71, 0.53, 0.78);
}
.active .top{
  transform: translateY(7px) rotate(-135deg);
}
.mid{
  top: 19px;
  transition: opacity .3s;
}
.active .mid{
  opacity: 0;
}
.bot{
  top: 26px;
  transition: transform .5s cubic-bezier(0.41, 1.71, 0.53, 0.78);
}
.active .bot{
  transform: translateY(-7px) rotate(135deg);
}
</style>
