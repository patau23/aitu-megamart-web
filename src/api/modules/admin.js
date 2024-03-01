import request from "../core/request";

export default {
  createUser: ({ userName, userEmail, userPassword }) => {
    return request.execute(
      'post',
      '/Admin/AddUser',
      {
        data: {
          userEmail,
          userName,
          userPassword,
        }
      }
    )
  },
  getAllUsers: (token) => {
    return request.execute(
      'get',
      '/Admin/Get_All_Users',
      {
        params: {
          JWT: token
        }
      },
    )
  },
  deleteUserById: ({ userId }) => {
    return request.execute(
      'delete',
      '/Admin/Delete_User',
      {
        params: {
          UserId: userId
        }
      }
    )
  },
  updateUser: ({ userName, email, userId }) => {
    return request.execute(
      'patch',
      '/Admin/Patch_User',
      {
        params: {
          UserId: userId
        },
        data: {
          userName,
          email
        }
      }
    )
  },
  addProductToWishlist: ({ productId }) => {
    return request.execute(
      'put',
      '/Admin/Add_Product_To_Wishlist',
      {
        params: {
          productId
        }
      }
    )
  }
}