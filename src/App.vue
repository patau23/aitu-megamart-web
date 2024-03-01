<template>
  <auth-helper />
  <products-helper />
  <div v-if="!initLoading">
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
import { mapGetters, mapActions } from "vuex";

import Api from "./api/index";

export default {
  name: "App",
  components: {
    "default-layout": Default,
    "admin-layout": adminLayout,
    ProductsHelper,
    AuthHelper,
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
  async mounted() {
    const response = await Api.admin.getAllUsers();
  },
  methods: {},
};
</script>

<style></style>
