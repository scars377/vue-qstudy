<template>
  <nav class="breadcrumb">
    <span
      v-for="(route, index) in $route.matched"
      :key="index"
    >
      {{$t(route.meta.breadcrumb)}}
    </span>
  </nav>
</template>

<script>
export default {
};
</script>
