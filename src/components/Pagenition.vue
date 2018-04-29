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
      let start = this.page - parseInt(MAX_PAGES / 2, 10);
      if (start < 1) start = 1;
      if (start + (MAX_PAGES - 1) > this.numPages) {
        start = this.numPages - (MAX_PAGES - 1);
      }

      const pages = [];
      for (let i = 0; i < MAX_PAGES; i += 1) {
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
.router-link-active{
  color: red;
}
</style>
