<template></template>
<script>
import { mapActions } from "vuex";
export default {
  async created() {
    const userId = localStorage.getItem("userId");
    const token = this.$cookies.get("token");
    if (token || userId) {
      const response = await this.START_SESSION_WITH_USER_ID({
        userId: localStorage.getItem("userId"),
      });
      console.log("сработал хелпер авторизации: " + response);
    }
  },
  methods: {
    ...mapActions({
      START_SESSION_WITH_USER_ID: "Auth/START_SESSION_WITH_USER_ID",
    }),
  },
};
</script>
