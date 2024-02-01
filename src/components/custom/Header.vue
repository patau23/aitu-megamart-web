<template>
  <v-container dense fluid fill-height>
    <v-row align="center" justify="center">
      <v-col>
        <v-row>
          <v-text-field
            v-model="searchInput"
            density="compact"
            variant="solo"
            label="Search your templates"
            append-inner-icon="mdi-magnify"
            single-line
            rounded
            hide-details
            @click:append-inner="search"
          ></v-text-field>
        </v-row>
      </v-col>
      <v-spacer></v-spacer>
      <v-col v-if="AUTH.isAuth" cols="1">
        <Avatar />
      </v-col>
      <v-col v-else cols="auto">
        <LoginModal />
        <RegisterModal />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/*eslint-disable*/
import Avatar from "./Avatar.vue";
import RegisterModal from "./modal/RegisterModal.vue";
import LoginModal from "./modal/LoginModal.vue";
import { mapGetters } from "vuex";
export default {
  name: "CustomHeader",
  components: {
    Avatar,
    RegisterModal,
    LoginModal,
  },
  data: () => {
    return {
      searchInput: "",
      signUpModal: false,
      signInModal: false,
    };
  },
  computed: {
    ...mapGetters({
      AUTH: "Auth/STATE",
    }),
  },
  mounted() {},
  methods: {
    search() {
      console.log(1);
      const query = this.searchInput;
      this.$router.push({ path: "/search/" + query, params: { query } });
    },
  },
};
</script>

<style lang="scss" scoped></style>
