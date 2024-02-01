import request from "../core/request";
// import Vue from 'vue'

export default {
  addProductToUsersWishlist: ({ userId, productId }) => {
    return request.execute(
      'put',
      '/User/Add_to_Users_Wishlist',
      {
        data: {
          userId,
          productId
        }
      }
    )
  },

  addViewedProductToUsersHistory: ({ userId, productId }) => {
    return request.execute(
      'put',
      '/User/Add_to_Users_History',
      {
        data: {
          userId,
          productId
        }
      }
    )
  },

  addProductToUsersCart: ({ userId, productId }) => {
    return request.execute(
      'put',
      '/User/Add_to_Users_Cart',
      {
        data: {
          userId,
          productId
        }
      }
    )
  },

  deleteProductFromUsersWishlist: ({ userId, productId }) => {
    return request.execute(
      'put',
      '/User/Delete_from_Users_Wishlist',
      {
        data: {
          userId,
          productId
        }
      }
    )
  },

  deleteProductFromUsersHistory: ({ userId, productId }) => {
    return request.execute(
      'put',
      '/User/Delete_from_Users_History',
      {
        data: {
          userId,
          productId
        }
      }
    )
  },

  deleteProductFromUsersCart: ({ userId, productId }) => {
    return request.execute(
      'put',
      '/User/Delete_from_Users_Cart',
      {
        data: {
          userId,
          productId
        }
      }
    )
  },

  getUsersWishlistProducts: (UserId) => {
    return request.execute(
      'get',
      '/User/Get_Products_from_Wishlist',
      {
        params: {
          UserId
        }
      }
    )
  },

  getUsersCartProducts: (UserId) => {
    return request.execute(
      'get',
      '/User/Get_Products_from_Cart',
      {
        params: {
          UserId
        }
      }
    )
  },

  getUsersHistoryProducts: (UserId) => {
    return request.execute(
      'get',
      '/User/Get_Products_from_History',
      {
        params: {
          UserId
        }
      }
    )
  },

  getUsersRecsBasedOnHistory: (UserId) => {
    return request.execute(
      'get',
      '/User/Get_Recomendations_based_on_History',
      {
        params: {
          UserId
        }
      }
    )
  },

  getUsersRecsBasedOnOtherUsers: (UserId) => {
    return request.execute(
      'get',
      '/User/Get_Users_Likes',
      {
        params: {
          UserId
        }
      }
    )
  },
}