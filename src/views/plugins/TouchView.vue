<template>
  <div>
    <my-button v-touch="handleTouch">Tap me!</my-button>
    <hr />
    <p>Event: {{ evType }}</p>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton.vue";

export default {
  components: {
    MyButton,
  },
  data() {
    return { evType: "" };
  },
  methods: {
    handleTouch(ev) {
      this.evType = ev.type;
    },
  },
};
</script>
