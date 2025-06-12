<template>
  <div>
    <article>
      <section v-on-clickaway="awayFromA">Sektion A</section>
      <section v-on-click-away="awayFromB">Sektion B</section>
    </article>
    <ul>
      <li v-for="(m, index) in messages" :key="index">{{ m }}</li>
    </ul>
  </div>
</template>

<script>
import { directive as onClickAway } from "vue-clickaway";
// import { mixin as clickaway } from "vue-clickaway";
export default {
  directives: {
    onClickAway,
  },
  // mixins: [ clickaway ],
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    awayFromA: function () {
      this.messages.push("Away from A");
    },
    awayFromB: function () {
      this.messages.push("Away from B");
    },
  },
};
</script>

<style lang="scss" scoped>
article {
  display: flex;
  justify-content: space-around;
  gap: 0 2rem;
}
section {
  padding: 4rem;
  background-color: aqua;
}
ul {
  margin-top: 2rem;
}
</style>
