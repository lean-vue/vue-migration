<template>
  <toggle-button v-model="model" />
</template>

<script>
// TODO: Korrektes Wrapping der Toggle-Komponente!
import Toggle from "@vueform/toggle";
Toggle.compatConfig = { MODE: 3 };

export default {
  compatConfig: { MODE: 3 },
  components: {
    ToggleButton: Toggle,
  },
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>

<style src="@vueform/toggle/themes/default.css"></style>
