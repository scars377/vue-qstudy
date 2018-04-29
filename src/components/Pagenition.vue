<template>
  <div class='pages'>
    <router-link
      v-for="page in pages"
      :to="pageLink(page)"
      :key="page"
      :class="linkClass(page)"
    >
      {{page}}
    </router-link>
  </div>
</template>

<script>
const MAX_PAGES = 5;

export default {
  props: ['numPages'],
  computed: {
    page() {
      return parseInt(this.$route.params.page, 10) || 1;
    },
    pages() {
      const len = Math.min(this.numPages, MAX_PAGES);

      let start = this.page - parseInt(len / 2, 10);
      if (start < 1) start = 1;
      if (start + (len - 1) > this.numPages) {
        start = this.numPages - (len - 1);
      }

      const pages = [];
      for (let i = 0; i < len; i += 1) {
        pages.push(i + start);
      }
      return pages;
    },
  },
  methods: {
    pageLink(page) {
      return `/products/${page}`;
    },
    linkClass(page) {
      return page === this.page ? 'router-link-active' : '';
    },
  },
};
</script>

<style scoped>
a{
  display: inline-block;
  color: #33f;
  text-decoration: none;
  padding: 4px 12px;
}
a:hover{
  background: #eee;
}
.router-link-active{
  color: red;
}
</style>
