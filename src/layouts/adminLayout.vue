<template>
  <v-app>
    <v-app-bar color="#1E1E1E">
      <v-container class="" dense fill-height fluid>
        <v-row align="center" justify="center">
          <!--  -->
        </v-row>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" color="#F3F3F3">
      <div class="d-flex flex-column">
        <!-- HEADER -->
      </div>
    </v-navigation-drawer>
    <v-main height="100%">
      <v-container
        v-if="!loading"
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
      adminAppLoading: false,
      adminDrawer: true,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped></style>
