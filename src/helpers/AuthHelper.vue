<script>
import { mapActions } from "vuex";
export default {
  data: () => {
    return {};
  },
  async created() {
    if (this.$cookies.get("token") || localStorage.getItem("userId")) {
      console.log("сработал хелпер");
      const response = await this.START_SESSION_WITH_USER_ID({
        userId: localStorage.getItem("userId"),
      });
      console.log(response);
    }
  },
  methods: {
    ...mapActions({
      START_SESSION_WITH_USER_ID: "Auth/START_SESSION_WITH_USER_ID",
    }),
  },
};
</script>
