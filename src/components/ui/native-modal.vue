<template>
  <dialog :id="name" closedby="any">
    <div class="wrapper">
      <div>
        <slot />
      </div>
      <form method="dialog">
        <button>X</button>
      </form>
    </div>
  </dialog>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

dialog {
  border: 1px solid #ddd;
}
dialog::backdrop {
  background-color: rgba($color: #000, $alpha: 0.5);
}
</style>
