<template>
  <div class="login-frm">
    <h2>User Anmeldung</h2>
    <Form @submit="onSubmit">
      <div>
        <Field name="account" rules="required|min:3" />
        <ErrorMessage name="account" />
      </div>
      <div>
        <Field name="email" rules="required|email" />
        <ErrorMessage name="email" />
      </div>
      <div>
        <button type="submit">Absenden</button>
      </div>
    </Form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: { Form, Field, ErrorMessage },
  methods: {
    ...mapActions("auth", ["signIn"]),
    onSubmit(values) {
      this.signIn(values);
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
