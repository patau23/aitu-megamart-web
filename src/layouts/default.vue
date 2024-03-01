<template>
  <v-app>
    <v-app-bar color="#1E1E1E">
      <v-container class="" dense fill-height fluid>
        <v-row align="center" justify="center">
          <v-col cols="auto">
            <v-btn icon="mdi-menu" @click="appDrawer = !appDrawer"> </v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn icon="mdi-home" :to="'/'"> </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="9">
            <!-- HEADER -->
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="appDrawer" color="#F3F3F3">
      <div class="d-flex flex-column">
        <!--  -->
      </div>
    </v-navigation-drawer>
    <v-main height="100%">
      <v-container
        v-if="!appLoading"
        class="d-flex flex-column align-center"
        :fluid="true"
      >
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DefaultLayout",
  components: {},
  data: () => {
    return {
      appLoading: false,
      appDrawer: false,
      historyList: [],
    };
  },
  computed: {
    ...mapGetters({
      USER: "User/STATE",
    }),
  },
  async mounted() {
    // this.historyList = await this.GET_HISTORY({ UserId: this.USER.id });
  },
  methods: {
    // ...mapActions({
    //   GET_HISTORY: "User/GET_HISTORY",
    // }),
    search() {
      console.log(1);
    },
  },
};
</script>

<style scoped></style>
