<template>
  <v-dialog width="500">
    <template v-slot:activator="{ props }">
      <v-btn rounded variant="text" v-bind="props" text="Sign In"> </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="SIGN IN">
        <v-card-text>
          <!-- email -->
          <v-text-field
            v-model="email"
            label="Type your email"
            loading
            placeholder="enter your valid email"
          >
            <template v-slot:loader>
              <v-progress-linear
                :active="loading"
                height="7"
                indeterminate
              ></v-progress-linear>
            </template>
          </v-text-field>
          <!-- password -->
          <v-text-field
            v-model="password"
            label="Type your password"
            loading
            placeholder="password"
            hint="must be more than 8 letters and includes numbers"
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPass ? 'text' : 'password'"
            counter
            @click:append="showPass = !showPass"
          >
            <template v-slot:loader>
              <v-progress-linear
                :active="loading"
                height="7"
                indeterminate
              ></v-progress-linear>
            </template>
          </v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-btn text="Close" @click="isActive.value = false"></v-btn>
          <v-spacer></v-spacer>
          <v-btn text="Login" @click="loginUser"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CustomLoginModal",
  props: {},
  data() {
    return {
      loading: false,
      email: "",
      password: "",
      showPass: false,
    };
  },
  computed: {
    ...mapGetters({
      USER: "User/STATE",
    }),
  },
  methods: {
    ...mapActions({
      SIGN_IN_USER: "User/SIGN_IN_USER",
    }),
    async loginUser() {
      const response = await this.SIGN_IN_USER({
        userEmail: this.email,
        userPassword: this.password,
      });
      console.log(response);
    },
  },
};
</script>

<style lang="scss" scoped></style>
