<template>
  <div>
    <my-switch v-model="toggleState" />
    <hr />
    Status: {{ toggleState ? "An" : "Aus" }}
  </div>
</template>

<script>
// my-switch ist global registriert (plugins-v3.js)
// Alternativ: saubere Implementierung von components/ui/app-switch.vue
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
