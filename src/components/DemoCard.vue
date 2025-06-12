<template>
  <div :style="{ gridColumn: `span ${colspan}` }"><slot /></div>
</template>

<script>
export default {
  props: ["colspan"],
};
</script>

<style lang="scss" scoped>
div {
  height: 4rem;
  padding: 1rem;
  background-color: gray;
}
</style>
