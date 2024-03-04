<template>
  <auth-helper />
  <products-helper />
  <AppLoader v-if="!initLoading" />
  <div v-else>
    <component :is="'default-layout'">
      <router-view />
    </component>
    <notifications group="auth" position="bottom center" />
    <notifications group="app" position="bottom right" />
  </div>
</template>

<script>
import Default from "./layouts/default.vue";
import AuthHelper from "./helpers/AuthHelper.vue";
import adminLayout from "./layouts/adminLayout.vue";
import ProductsHelper from "./helpers/ProductsHelper.vue";
import AppLoader from "./components/AppLoader.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    "default-layout": Default,
    "admin-layout": adminLayout,
    ProductsHelper,
    AuthHelper,
    AppLoader,
  },
  data: () => {
    return {
      initLoading: false,
    };
  },
  computed: {
    ...mapGetters({
      USER: "User/STATE",
    }),
  },
  created() {},
  mounted() {
    this.initLoading = true;
    setTimeout(() => {
      this.initLoading = false;
    }, 1500);
  },
  methods: {},
};
</script>

<style></style>
