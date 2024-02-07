<script>
import { mapActions } from "vuex";
export default {
  data: () => {
    return {};
  },
  async created() {
    if (this.$cookies.get("token") || localStorage.getItem("userId")) {
      console.log("сработал хелпер");
    }
  },
  methods: {
    ...mapActions({}),
  },
};
</script>
