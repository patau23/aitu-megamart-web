<template>
  <v-dialog
    v-model="modal"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-card-actions>
        <v-btn
          size="x-large"
          icon="window-close"
          variant="text"
          @click="modal = !modal"
        >
          X
        </v-btn>
      </v-card-actions>
      <v-img
        max-height="250"
        :src="exactProduct.productImage"
        @click="$emit('open-product', exactProduct)"
      ></v-img>

      <v-card-item>
        <v-card-title>{{ exactProduct.productName }}</v-card-title>

        <v-card-subtitle>
          <span class="me-1">{{ exactProduct.productPrice }}</span>

          <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :model-value="rating"
            color="amber"
            density="compact"
            half-increments
            size="small"
          ></v-rating>

          <div class="text-grey ms-4">4.5 (413)</div>
        </v-row>

        <div class="my-4 text-subtitle-1">
          {{ exactProduct.productPrice }}$ • Italian, Cafe
        </div>

        <div>Категория {{ exactProduct.productCategoryID }}</div>
        <div>
          {{ exactProduct.productDescription }}
        </div>
      </v-card-text>

      <v-divider class="mx-4 mb-1"></v-divider>

      <v-card-title>Delivery points</v-card-title>
      <div class="px-4">
        <v-chip-group>
          <v-chip>Delivery point #1</v-chip>
          <v-chip>Delivery point #2</v-chip>
          <v-chip>Delivery point #3</v-chip>
          <v-chip>Delivery point #4</v-chip>
        </v-chip-group>
      </div>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          size="x-large"
          icon="mdi-cart-arrow-right"
          color="deep-purple-lighten-2"
          variant="text"
          @click="addToWishlist"
        >
        </v-btn>
        <v-btn
          size="x-large"
          icon="mdi-cart-heart"
          color="deep-purple-lighten-2"
          variant="text"
          @click="addToCart"
        >
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-sheet class="mx-auto">
    <v-container class="main-products">
      <v-row dense>
        <h2>Our Products</h2>
      </v-row>
      <v-row dense>
        <div class="d-flex flex-row flex-wrap mb-6">
          <ProductCard
            v-for="product in PRODUCTS.all"
            :key="product._id"
            :productEntity="product"
            @open-product="openProduct($event)"
            @add-to-cart="addToCart($event)"
            @add-to-wishlist="addToWishlist($event)"
          />
        </div>
      </v-row>
    </v-container>
    <div v-if="USER.isAuth" class="categories">
      <!-- categories list component -->
    </div>
    <div v-if="USER.isAuth" class="similar">
      <h2>Others users like</h2>
    </div>
  </v-sheet>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductCard from "../components/custom/ProductCard.vue";
export default {
  name: "HomePage",
  components: {
    ProductCard,
  },
  data: () => {
    return {
      modal: false,
      exactProduct: {},
      rating: 4.5,
    };
  },
  computed: {
    ...mapGetters({
      USER: "User/STATE",
      PRODUCTS: "Products/STATE",
    }),
  },
  created() {},
  mounted() {
    console.log(import.meta.env.VITE_APP_API_URL);
  },
  methods: {
    ...mapActions({
      ADD_TO_HISTORY: "User/ADD_TO_HISTORY",
      ADD_TO_CART: "User/ADD_TO_CART",
      ADD_TO_WISHLIST: "User/ADD_TO_WISHLIST",
    }),
    async openProduct(product) {
      this.modal = true;
      this.exactProduct = product;
      console.log(1);
      // ЗАПРОС НА ПРОСМОТР
      await this.ADD_TO_HISTORY({ productId: product.productId });
    },
    async addToWishlist(productId) {
      await this.ADD_TO_WISHLIST({ productId });
    },
    async addToCart(productId) {
      await this.ADD_TO_CART({ productId });
    },
  },
};
</script>

<style lang="scss" scoped></style>
