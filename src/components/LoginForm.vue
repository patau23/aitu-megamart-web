<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          label="Email/Username"
          clearable
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          label="Password"
          placeholder="Enter your password"
          clearable
        ></v-text-field>

        <br />

        <v-btn
          :disabled="!form"
          :loading="loading"
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          block
        >
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    form: false,
    email: null,
    password: null,
    loading: false,
  }),

  computed: {
    ...mapActions({
      START_SESSION_WITH_LOGIN: "Auth/START_SESSION_WITH_LOGIN",
    }),
  },

  methods: {
    async onSubmit() {
      if (!this.form) return;
      this.loading = true;
      this.START_SESSION_WITH_LOGIN({
        userName: this.email,
        userPassword: this.password,
      });
      this.loading = false;
    },
    required(v) {
      return !!v || "Field is required";
    },
  },
};
</script>

<style lang="scss" scoped></style>
