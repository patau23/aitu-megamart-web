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
import { mapActions } from "vuex";
import ProductCard from "../components/custom/ProductCard.vue";
export default {
  name: "SearchPage",
  components: {
    ProductCard,
  },
  data: () => {
    return {
      list: [],
      modal: false,
      exactProduct: {},
      rating: 4.5,
    };
  },
  async created() {
    let st = this.$router.params.query;
    console.log(this.$router);
    this.list = await this.SEARCH({ ProductName: st, ProductCategoryId: 1 });
  },
  methods: {
    ...mapActions({
      SEARCH: "User/SEARCH",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
