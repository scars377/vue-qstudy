<template>
  <div>
    <label>Username</label>
    <input/>
    <br/>
    <label>Password</label>
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

