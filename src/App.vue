<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="add">+{{step}}</button>
    <Slider/>
    <Menu/>
  </div>
</template>

<script>
import Menu from './components/Menu';
import Slider from './components/Slider';

export default {
  components: {
    Menu,
    Slider,
  },
  data() {
    return {
      count: 0,
      step: 1,
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
<style>
h1{
  color: blue;
}
</style>
