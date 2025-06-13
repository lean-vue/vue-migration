<template>
  <div v-if="isAuthenticated" class="user-view">
    <p>Hallo {{ user.account }}</p>
    <button @click="signOut">Log Out</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
    ...mapGetters("auth", ["isAuthenticated"]),
  },
  methods: {
    ...mapActions("auth", ["signOut"]),
  },
};
</script>

<style lang="scss" scoped>
.user-view {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 10rem;
  height: 6rem;
  padding: 0.5rem;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: white;
}
</style>
