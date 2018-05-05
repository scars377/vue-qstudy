<template>
  <div>
    <label>{{$t('username')}}</label>
    <input/>
    <br/>
    <label>{{$t('password')}}</label>
    <input/>
    <br/>

    <div>
      <router-link :to="registerLink">
        {{$t('register')}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    registerLink() {
      return `/${this.$i18n.locale}/member/register`;
    },
  },
};
</script>

