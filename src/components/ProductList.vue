<template>
  <div>
    <div>
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
    fetch('https://webcdn.17app.co/campaign/1804-tw-full-of-you-5-s2.json');
  },
};
</script>
