<template>
  <v-sheet class="d-flex flex-column justify-center align-center" max-width="1300">
    <!--  -->
    <div>
      <h2>CART</h2>
      <v-slide-group show-arrows center-active>
        <v-slide-group-item v-for="product in cart" :key="product._id">
          <div>
            <ProductCard
              :productEntity="product"
              @add-to-cart="addToCart($event)"
              @add-to-wishlist="addToWishlist($event)"
            />
          </div>
        </v-slide-group-item>
      </v-slide-group>
    </div>

    <!--  -->
    <div>
      <h2>WISHLIST</h2>
      <v-slide-group show-arrows center-active>
        <v-slide-group-item v-for="product in wishlist" :key="product._id">
          <div>
            <ProductCard
              :productEntity="product"
              @add-to-cart="addToCart($event)"
              @add-to-wishlist="addToWishlist($event)"
            />
          </div>
        </v-slide-group-item>
      </v-slide-group>
    </div>

    <!--  -->
    <div>
      <h2>HISTORY</h2>
      <v-slide-group show-arrows center-active>
        <v-slide-group-item
          v-for="product in history.reverse()"
          :key="product._id"
        >
          <div>
            <ProductCard
              :productEntity="product"
              @add-to-cart="addToCart($event)"
              @add-to-wishlist="addToWishlist($event)"
            />
          </div>
        </v-slide-group-item>
      </v-slide-group>
    </div>

    <!--  -->
    <div>
      <h2>LIKES</h2>
      <v-slide-group show-arrows center-active>
        <v-slide-group-item v-for="product in likes" :key="product._id">
          <div>
            <ProductCard
              :productEntity="product"
              @add-to-cart="addToCart($event)"
              @add-to-wishlist="addToWishlist($event)"
            />
          </div>
        </v-slide-group-item>
      </v-slide-group>
    </div>

    <!--  -->
    <div>
      <h2>RECOMENDATIONS</h2>
      <v-slide-group show-arrows center-active>
        <v-slide-group-item v-for="product in recs" :key="product._id">
          <div>
            <ProductCard
              :productEntity="product"
              @add-to-cart="addToCart($event)"
              @add-to-wishlist="addToWishlist($event)"
            />
          </div>
        </v-slide-group-item>
      </v-slide-group>
    </div>
  </v-sheet>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductCard from "../components/custom/ProductCard.vue";

export default {
  name: "UserProfilePage",
  components: {
    ProductCard,
  },
  data: () => {
    return {
      modal: false,
      exactProduct: {},
      rating: 4.5,
      recs: [],
      likes: [],
      wishlist: [],
      cart: [],
      history: [],
    };
  },
  computed: {
    ...mapGetters({
      USER: "User/STATE",
      PRODUCTS: "Products/STATE",
    }),
  },
  async created() {
    await this.GET_USER_INFO({
      UserId: localStorage.getItem("userId"),
    });
    this.cart = await this.GET_CART({ UserId: this.USER.user.userId });
    this.wishlist = await this.GET_WISHLIST({ UserId: this.USER.user.userId });
    this.history = await this.GET_HISTORY({ UserId: this.USER.user.userId });
    this.likes = await this.GET_LIKES({ UserId: this.USER.user.userId });
    this.recs = await this.GET_RECS({ UserId: this.USER.user.userId });
  },
  methods: {
    ...mapActions({
      ADD_TO_HISTORY: "User/ADD_TO_HISTORY",
      GET_WISHLIST: "User/GET_WISHLIST",
      GET_CART: "User/GET_CART",
      GET_HISTORY: "User/GET_HISTORY",
      GET_LIKES: "User/GET_LIKES",
      GET_USER_INFO: "User/GET_USER_INFO",
      GET_RECS: "User/GET_RECS",
    }),
    async deleteFromWishlist() {
      //
    },
    async deleteFromWishlist() {
      //
    },
  },
};
</script>

<style lang="scss" scoped></style>
