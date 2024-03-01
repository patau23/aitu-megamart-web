<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters({
      PRODUCTS: "Products/STATE",
    }),
  },
  async created() {
    if (this.PRODUCTS.all.length <= 0) {
      console.log("сработал продукт хелпер");
      // await this.GET_ALL_PRODUCTS();
    }
  },
  methods: {
    ...mapActions({
      GET_ALL_PRODUCTS: "Products/GET_ALL_PRODUCTS",
    }),
  },
};
</script>
