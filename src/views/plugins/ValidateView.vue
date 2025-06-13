<template>
  <div class="login-frm">
    <h2>User Anmeldung</h2>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form novalidate @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider name="Account" rules="required" v-slot="{ errors }">
          <input
            name="acc"
            v-model="account"
            type="text"
            placeholder="Accountname"
          />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          name="E-mail"
          rules="required|email"
          v-slot="{ errors }"
        >
          <input
            name="email"
            v-model="email"
            type="email"
            placeholder="Gültige Email-Adresse"
          />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <div>
          <button type="submit">Absenden</button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    account: "",
    email: "",
  }),
  methods: {
    ...mapActions("auth", ["signIn"]),
    onSubmit() {
      this.signIn({
        account: this.account,
        email: this.email,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
span {
  display: block;
}
</style>
