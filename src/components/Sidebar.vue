<template>
  <div class="sidebar">
    <ul>
      <li>
        <router-link to="/products">Products</router-link>
      </li>
      <li>
        <router-link to="/member">Member</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar{
}
.router-link-active{
  color:black;
  font-weight: bolder;
}
</style>
