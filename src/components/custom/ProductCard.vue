<template>
  <v-card class="mx-auto my-12" max-width="374">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      max-height="250"
      :src="productEntity.productImage"
      @click="$emit('open-product', productEntity)"
    ></v-img>

    <v-card-item>
      <v-card-title>{{ productEntity.productName }}</v-card-title>

      <v-card-subtitle>
        <span class="me-1">{{ productEntity.productPrice }}</span>

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
        {{ productEntity.productPrice }}$ • Italian, Cafe
      </div>

      <div>Категория {{ productEntity.productCategoryID }}</div>
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
</template>

<script>
export default {
  name: 'CustomProductCard',
  props: {
    productEntity: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      rating: 4.5,
    };
  },
  mounted() {},
  methods: {
    async addToWishlist() {
      this.$emit("add-to-wishlist", this.productEntity.productId);
    },
    async addToCart() {
      this.$emit("add-to-cart", this.productEntity.productId);
    },
  },
};
</script>

<style lang="scss" scoped></style>
