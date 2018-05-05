<template>
  <div>
    <div class="grids">
      <div
        class="grid"
        v-for="(value, index) in grids"
        :key="index"
        @click="setGrid(index)"
      >
        {{symbol(value)}}
      </div>
    </div>
    <div class="info">
      <div>
        <label>Player</label>
        <span>{{symbol(player)}}</span>
      </div>
      <div>
        <label>Winner</label>
        <span>{{symbol(winner)}}</span>
      </div>
      <div>
        <button @click="reset">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue';

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default {
  data() {
    return {
      player: 1,
      grids: [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0,
      ],
    };
  },
  computed: {
    winner() {
      // for (let i = 0; i < lines.length; i += 1) {
      //   const [a, b, c] = lines[i];
      //   const sum = this.grids[a] + this.grids[b] + this.grids[c];
      //   if (sum === 3) return 1;
      //   if (sum === -3) return -1;
      // }
      // return 0;

      return lines.reduce((winner, [a, b, c]) => {
        if (winner) return winner;

        const sum = this.grids[a] + this.grids[b] + this.grids[c];
        if (sum === 3) return 1;
        if (sum === -3) return -1;
        return 0;
      }, 0);
    },
  },
  methods: {
    symbol(value) {
      switch (value) {
        case 1: return 'O';
        case -1: return 'X';
        default: return '';
      }
    },
    setGrid(index) {
      if (this.grids[index] !== 0) {
        return;
      }
      if (this.winner !== 0) {
        return;
      }
      // Vue.set(this.grids, index, this.player);
      // this.$set(this.grids, index, this.player);

      // this.grids[index] = this.player;
      // this.$forceUpdate();

      this.grids = this.grids.map((value, idx) => (
        (idx === index) ? this.player : value
      ));

      this.player = -this.player;
    },
    reset() {
      this.player = 1;
      this.grids = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0,
      ];
    },
  },
};
</script>

<style scoped>
.grids{
  width: 300px;
  height: 300px;
  display: inline-flex;
  flex-flow: row wrap;
}
.grid{
  flex: 0 0 30%;
  height: 30%;
  border: 1px solid #ccc;
  font-size: 50px;
  text-align: center;
  line-height: 88px;
  cursor: pointer;
  user-select: none;
}
.info{
  display: inline-block;
}
</style>
