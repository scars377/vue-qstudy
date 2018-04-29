<template>
  <div class='pages'>
    <button
      v-for="page in pages"
      :class="btnClass(page)"
      @click="setPage(page)"
      :key="page"
    >
      {{page}}
    </button>
  </div>
</template>

<script>
const MAX_PAGES = 5;

export default {
  props: ['numPages', 'value'],
  computed: {
    pages() {
      let start = this.value - parseInt(MAX_PAGES / 2, 10);
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
    setPage(page) {
      this.$emit('input', page);
    },
    btnClass(page) {
      return {
        btn: true,
        active: page === this.value,
      };
    },
  },
};
</script>

<style scoped>
.btn.active{
  color: red;
}
</style>
