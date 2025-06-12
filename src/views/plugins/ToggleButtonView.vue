<template>
  <div>
    <toggle-button v-model="toggleState" />
    <hr />
    Status: {{ toggleState ? "An" : "Aus" }}
  </div>
</template>

<script>
export default {
  data() {
    return { toggleState: false };
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
}
hr {
  width: 100%;
}
</style>
