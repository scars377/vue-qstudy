<template>
  <router-view/>
</template>

<script>
export default {
  created() {
    this.$i18n.locale = this.$route.params.locale;
  },
};
</script>
