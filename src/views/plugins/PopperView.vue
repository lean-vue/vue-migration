<template>
  <popper hover>
    <template #content>
      <div class="popper">Popper Content</div>
    </template>
    <button slot="reference">Reference Element</button>
  </popper>
</template>

<script>
import Popper from "vue3-popper";

export default {
  components: {
    Popper,
  },
};
</script>

<style lang="scss" scoped>
.popper {
  padding: 0.5rem;
}
</style>
