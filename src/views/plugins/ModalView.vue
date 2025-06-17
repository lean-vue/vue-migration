<template>
  <div>
    <native-modal name="my-first-modal">
      This is my first custom modal
    </native-modal>
    <my-button @click="show">Show</my-button>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton.vue";
import NativeModal from "@/components/ui/native-modal.vue";
// import AppModal from "@/components/ui/app-modal.vue";

export default {
  components: {
    MyButton,
    // AppModal,
    NativeModal,
  },
  methods: {
    show() {
      // this.$modal.show("my-first-modal");
      document.getElementById("my-first-modal").showModal();
    },
  },
};
</script>
