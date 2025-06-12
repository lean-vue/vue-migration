<template>
  <div>
    <article class="scroll-area">
      <div id="sec1">
        <h2>Heading 1</h2>
      </div>
      <div id="sec2">
        <h2>Heading 2</h2>
      </div>
      <div id="sec3">
        <h2>Heading 3</h2>
      </div>
      <div id="sec4">
        <h2>Heading 4</h2>
      </div>
      <div id="sec5">
        <h2>Heading 5</h2>
      </div>
    </article>
    <my-button @click="toTop">Top</my-button>
    <aside class="scroll-btn">
      <a href="#" v-scroll-to="'#sec1'">Scroll to Section 1</a>
      <a href="#" v-scroll-to="'#sec2'">Scroll to Section 2</a>
      <a href="#" v-scroll-to="'#sec3'">Scroll to Section 3</a>
      <a href="#" v-scroll-to="'#sec4'">Scroll to Section 4</a>
      <a href="#" v-scroll-to="'#sec5'">Scroll to Section 5</a>
    </aside>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton.vue";

export default {
  components: {
    MyButton,
  },
  methods: {
    toTop() {
      //this.$scrollTo("#sec1");
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-area {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    padding: 1rem;
    border: 1px solid #dedede;
    border-radius: 6px;
    height: 240px;
  }
}
.scroll-btn {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
