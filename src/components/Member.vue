<template>
  <div>
    <label>{{$t('username')}}</label>
    <input/>
    <br/>
    <label>{{$t('password')}}</label>
    <input/>
    <br/>
    <Cart/>
  </div>
</template>

<script>
import Cart from './Cart';

export default {
  components: {
    Cart,
  },
};
</script>

