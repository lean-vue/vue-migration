<template>
  <div>
    <div ref="el" class="swipeable">Make a Swipe</div>
    <hr />
    <p>Event: {{ evType }}</p>
  </div>
</template>

<script>
// Demo wie vueuse eingebaut werden kann
// Einfacher vielleicht: npm install vue3-touch-events
import { useSwipe } from "@vueuse/core";
import { useTemplateRef } from "vue";

export default {
  data() {
    return { evType: "" };
  },
  methods: {
    handleSwipe(direction) {
      this.evType = direction;
    },
  },
  watch: {
    direction(dir) {
      this.handleSwipe(dir);
    },
  },
  setup() {
    const el = useTemplateRef("el");
    const { isSwiping, direction } = useSwipe(el);

    return { el, isSwiping, direction };
  },
};
</script>

<style lang="scss" scoped>
.swipeable {
  height: 8rem;
  line-height: 8rem;
  background-color: aquamarine;
  text-align: center;
}
</style>
