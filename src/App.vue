<template>
  <auth-helper />
  <products-helper />
  <div v-if="!loading">
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
import ProductsHelper from "./helpers/ProductsHelper.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    "default-layout": Default,
    AuthHelper,
    ProductsHelper,
  },
  data: () => {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapGetters({
      USER: "User/STATE",
    }),
  },
  async mounted() {},
  methods: {},
};
</script>

<style></style>
