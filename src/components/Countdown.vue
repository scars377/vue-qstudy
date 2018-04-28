<template>
  <div class='countdown'>
    {{countdown()}}
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: ['endTime'],
  methods: {
    countdown() {
      let time = this.endTime - Date.now();
      if (time < 0) time = 0;
      const m = moment(time);
      return m.format('DD天 HH時 mm分 ss秒');
    },
  },
  mounted() {
    setInterval(() => this.$forceUpdate(), 1000);
  },
};
</script>

<style scoped>
.countdown{
  text-align: center;
  font-size: 2em;
  margin: 1em 0;
}
</style>
