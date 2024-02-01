<template>
  <v-container fluid style="">
    <v-row justify="center" align="center">
      <v-menu min-width="200px" rounded>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar image="https://mangadex.org/img/avatar.png"> </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <h3>{{ USER.userName }}</h3>
              <p class="text-caption mt-1">email: {{ USER.userEmail }}</p>
              <v-divider class="my-3"></v-divider>
              <v-btn class="" rounded :elevation="0" :to="'/user-profile'">
                <v-icon start icon="mdi-cart-arrow-right"></v-icon>
                Wishlist
                <span>{{ USER.userWishlist.length || "" }}</span>
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn class="" rounded :elevation="0" :to="'/user-profile'">
                <v-icon start icon="mdi-cart-heart"></v-icon>
                Cart
                <span>{{ USER.userCart.length || "" }}</span>
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn rounded variant="text" @click="logout"> Log Out </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CustomAvatar",
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters({
      USER: "User/INFO",
    }),
  },
  methods: {
    ...mapActions({
      LOGOUT: "User/LOGOUT",
    }),
    logout() {
      this.LOGOUT();
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped></style>
