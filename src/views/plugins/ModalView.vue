<template>
  <div>
    <modal name="my-first-modal"> This is my first modal </modal>
    <my-button @click="show">Show</my-button>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton.vue";

export default {
  components: {
    MyButton,
  },
  methods: {
    show() {
      this.$modal.show("my-first-modal");
    },
  },
};
</script>
