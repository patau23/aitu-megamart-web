import request from "../core/request";

export default {
  registerUser: ({ userName, userEmail, userPassword }) => {
    return request.execute(
      'post',
      '/Auth/Register',
      {
        data: {
          userEmail,
          userName,
          userPassword,
        }
      }
    )
  },
  loginUser: ({ userPassword, userEmail }) => {
    return request.execute(
      'post',
      '/Auth/Login',
      {
        data: { userEmail, userPassword }
      }
    )
  },
  getUserId: (token) => {
    return request.execute(
      'get',
      '/Auth/GetId',
      {
        params: {
          JWT: token
        }
      },
    )
  },
  getUserInfo: (UserId) => {
    return request.execute(
      'get',
      `/Auth/GetUser`,
      {
        params: {
          UserId
        }
      },
    )
  },
  deleteUser: (UserId) => {
    return request.execute(
      'post',
      '/Auth/DeleteUser',
      {
        params: {
          UserId
        }
      }
    )
  },
  giveAdminPassForUser: ({ adminId, newAdminId }) => {
    return request.execute(
      'put',
      '/Auth/Admin_Create_Admin',
      {
        params: {
          adminId,
          newAdminId
        }
      }
    )
  }
}