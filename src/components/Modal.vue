<template>
  <div
    :class="modalClass"
    v-if="show"
    @click="close"
  >
    <div
      class="content"
      @click.stop=""
    >
      <img class="img" :src="picture" />
      <div class="name">{{openID}}</div>
      <div class="price">{{score}}</div>
      <div
        class="close"
        @click="close"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      closing: false,
    };
  },
  computed: {
    modalClass() {
      return {
        modal: true,
        closing: this.closing,
      };
    },
    show() {
      return this.$store.state.modal !== null;
    },
    modal() {
      return this.$store.state.modal || {};
    },
    picture() {
      const img = this.modal.picture;
      return `https://assets-17app.akamaized.net/THUMBNAIL_${img}`;
    },
    openID() {
      return this.modal.openID;
    },
    score() {
      const score = this.modal.score || 0;
      return score.toLocaleString();
    },
  },
  methods: {
    close() {
      this.closing = true;
      setTimeout(() => {
        this.closing = false;
        this.$store.commit('closeModal');
      }, 500);
    },
  },
  // watch: {
  //   show() {
  //     this.closing = false;
  //   },
  // },
};
</script>

<style scoped>
@keyframes fadeIn{
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOut{
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.modal{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.8);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn .5s;
}
.modal.closing{
  opacity: 0;
  animation: fadeOut .5s;
}
.content{
  position: relative;
  border-radius: 20px;
  background: white;
  width: 300px;
  height: 400px;
}
.close{
  position: absolute;
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  top: 0;
  right: -50px;
  cursor: pointer;
  text-align: center;
  font-size: 26px;
}
.close:before{
  content: 'x';
  color: white;
  line-height: 40px;
}

.img{
  width: 100%;
  border-radius: 20px 20px 0 0;
}
</style>
