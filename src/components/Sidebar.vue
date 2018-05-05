<template>
  <div class="sidebar">
    <ul>
      <li>
        <router-link :to="route('products')">
          {{$t('products')}}
        </router-link>
      </li>
      <li>
        <router-link :to="route('member')">
          {{$t('member')}}
        </router-link>
      </li>
      <li>
        <router-link :to="route('game')">
          {{$t('game')}}
        </router-link>
      </li>
    </ul>
    <div>
      <button @click="setLocale('tw')">TW</button>
      <button @click="setLocale('en')">EN</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
    route(name) {
      return `/${this.$i18n.locale}/${name}`;
    },
  },
};
</script>

<style scoped>
.sidebar{
}
.router-link-active{
  color:black;
  font-weight: bolder;
}
</style>
