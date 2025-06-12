<template>
  <popper
    trigger="clickToToggle"
    :options="{
      placement: 'bottom',
      modifiers: { offset: { offset: '0,4px' } },
    }"
  >
    <div class="popper">Popper Content</div>
    <button slot="reference">Reference Element</button>
  </popper>
</template>

<script>
import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";

export default {
  components: {
    popper: Popper,
  },
};
</script>

<style lang="scss" scoped>
.popper {
  padding: 0.5rem;
}
</style>
