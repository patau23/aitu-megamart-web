import request from "../core/request";

export default {

  getAllMainCategories: () => {
    return request.execute(
      'get',
      '/Category/Get_All_Categories'
    )
  },

  getCategory: (CategoryId) => {
    return request.execute(
      'get',
      '/Category/Get_Category',
      {
        params: {
          CategoryId
        }
      }
    )
  },

  addNewCategory: ({ categoryName, categoryDescription }) => {
    return request.execute(
      'post',
      '/Category/Add_Category',
      {
        data: {
          categoryDescription,
          categoryName
        }
      }
    )
  },

  deleteCategory: (CategoryId) => {
    return request.execute(
      'get',
      '/Category/Delete_Category',
      {
        params: {
          CategoryId
        }
      }
    )
  }

}