<template>
  <v-dialog width="500">
    <template v-slot:activator="{ props }">
      <v-btn rounded variant="text" v-bind="props" text="Sign Up"> </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card rounded title="SIGN UP">
        <v-form> </v-form>
        <v-card-subtitle> please enter all data </v-card-subtitle>

        <v-card-text>
          <!-- username -->
          <v-text-field
            v-model="username"
            label="Type your user name"
            loading
            placeholder="Come up with a creative username ⭐️"
          >
            <template v-slot:loader>
              <v-progress-linear
                :active="loading"
                height="7"
                indeterminate
              ></v-progress-linear>
            </template>
          </v-text-field>

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

          <v-sheet class="d-flex flex-column flex-wrap">
            <!-- password -->
            <v-text-field
              class=""
              v-model="password"
              label="Type your password"
              loading
              placeholder="password"
              hint="must be more than 8 letters and includes numbers"
              :append-inner-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPass ? 'text' : 'password'"
              counter
              @click:append-inner="showPass = !showPass"
            >
              <template v-slot:loader>
                <v-progress-linear
                  :active="loading"
                  height="7"
                  indeterminate
                ></v-progress-linear>
              </template>
            </v-text-field>
            <!-- repeat -->
            <v-text-field
              class=""
              v-model="passwordRepeat"
              loading
              counter
              label="Repeat password"
              placeholder="repeat your password"
              hint="must be more than 8 letters and includes numbers"
              :append-inner-icon="showRepeat ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showRepeat ? 'text' : 'password'"
              :rules="[...rules]"
              @click:append-inner="showRepeat = !showRepeat"
            >
              <template v-slot:loader>
                <v-progress-linear
                  :active="loading"
                  height="7"
                  indeterminate
                ></v-progress-linear>
              </template>
            </v-text-field>
          </v-sheet>
        </v-card-text>

        <v-card-actions>
          <v-btn text="Close" @click="isActive.value = false"></v-btn>
          <v-spacer></v-spacer>
          <v-btn text="Sign up" @click="registNewUser(isActive)"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CustomRegisterModal",
  data() {
    return {
      loading: false,
      email: "",
      username: "",
      password: "",
      passwordRepeat: "",
      showPass: false,
      showRepeat: false,
    };
  },
  computed: {
    similarPasswords() {
      return this.password === this.passwordRepeat;
    },
    rules() {
      return [
        (v) => !!v || "Must be filled",
        (v) => v.length > 8 || "Must be more than 8 symbols",
      ];
    },
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({
      SIGN_UP_USER: "User/SIGN_UP_USER",
    }),
    async registNewUser(isActiveModalState) {
      this.loading = true;
      // request
      const response = await this.SIGN_UP_USER({
        userName: this.username,
        userEmail: this.email,
        userPassword: this.password,
      });
      this.loading = false;
      console.log(response);
      if (response?.status !== 200) {
        this.$notify({
          title: response.data,
          text: "plz try again",
          type: "error",
          group: "auth",
        });
        return;
      }
      this.$notify({
        title: "Вы успешно зарегистрировались",
        type: "success",
        group: "app",
      });
      this.email = "";
      this.username = "";
      this.password = "";
      this.passwordRepeat = "";
      isActiveModalState.value = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
