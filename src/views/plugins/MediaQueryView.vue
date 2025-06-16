<template>
  <div>
    <p>Current: {{ $mq.current }}</p>
    <section class="demo-filter">
      <demo-card :colspan="calcCols()">A</demo-card>
      <demo-card :colspan="calcCols()">B</demo-card>
      <demo-card :colspan="calcCols()" x>C</demo-card>
    </section>
    <MqResponsive target="xs+">
      <span>Display on xs</span>
    </MqResponsive>
    <MqResponsive target="md+">
      <span> Display on md and larger </span>
    </MqResponsive>
  </div>
</template>

<script>
import DemoCard from "@/components/DemoCard.vue";

export default {
  components: {
    DemoCard,
  },
  methods: {
    calcCols() {
      return this.$mq.mdMinus ? 3 : 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-filter {
  margin: 2rem 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
}
</style>
