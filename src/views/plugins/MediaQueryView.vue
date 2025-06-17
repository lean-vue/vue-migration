<template>
  <div>
    <p>Current: {{ $mq.current }}</p>
    <section class="demo-filter">
      <demo-card :colspan="mq()">A</demo-card>
      <demo-card :colspan="mq()">B</demo-card>
      <demo-card :colspan="mq()" x>C</demo-card>
    </section>
    <MqResponsive target="sm-">
      <span>Display on sm</span>
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
    mq() {
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
