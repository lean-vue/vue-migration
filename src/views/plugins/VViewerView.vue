<template>
  <div>
    <!-- directive -->
    <div class="images" v-viewer>
      <img v-for="src in images" :key="src" :src="src" />
    </div>
    <!-- component -->
    <viewer :images="images">
      <img v-for="src in images" :key="src" :src="src" />
    </viewer>
    <!-- api -->
    <button type="button" @click="show">Click to show</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://picsum.photos/200/200",
        "https://picsum.photos/300/200",
        "https://picsum.photos/250/200",
      ],
    };
  },
  methods: {
    show() {
      // errors: vielleicht wg Version nur 1.5 (hab das aus der 1.7 Version kopiert)
      this.$viewerApi({
        images: this.images,
      });
    },
  },
};
</script>
