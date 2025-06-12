<template>
  <div>
    <p>Current: {{ $mq }}</p>
    <section class="demo-filter">
      <demo-card :colspan="$mq | mq({ sm: 3, lg: 1 })">A</demo-card>
      <demo-card :colspan="$mq | mq({ sm: 3, lg: 1 })">B</demo-card>
      <demo-card :colspan="$mq | mq({ sm: 3, lg: 1 })">C</demo-card>
    </section>
    <mq-layout mq="sm">
      <span> Display on sm </span>
    </mq-layout>
    <mq-layout mq="md+">
      <span> Display on md and larger </span>
    </mq-layout>
  </div>
</template>

<script>
import DemoCard from "@/components/DemoCard.vue";

export default {
  components: {
    DemoCard,
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
