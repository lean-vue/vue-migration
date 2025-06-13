<template>
  <button @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: "my-button",

  methods: {
    onClick() {
      /**
       * Click event
       *
       * @event click
       */
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #ffffff;
  cursor: default;
  font-size: 0.875rem;
  padding: 6px 12px;
  transition: all 150ms ease-in;

  &:hover {
    background-color: #f8f8f8;
  }

  &:active {
    transform: scale3d(0.95, 0.95, 1);
  }
}
</style>
