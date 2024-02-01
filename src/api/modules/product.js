import request from "../core/request";

export default {
  getAllMainProducts: () => {
    return request.execute(
      'get',
      '/Category/Delete_Category'
    )
  },

  searchProductsByCategoryAndName: ({ ProductCategoryId, ProductName }) => {
    return request.execute(
      'get',
      '/Product/Search_by_Category_and_Name',
      {
        params: {
          ProductCategoryId,
          ProductName
        }
      }
    )
  },

  addNewProduct: ({
    productName,
    productImage,
    productDescription,
    productCategoryId,
    productPrice
  }) => {
    return request.execute(
      'post',
      '/Product/Add_Product',
      {
        data: {
          productName,
          productImage,
          productDescription,
          productCategoryId,
          productPrice
        }
      }
    )
  },

  getProductById: (ProductId) => {
    return request.execute(
      'get',
      '/Product/Get_Product',
      {
        params: {
          ProductId
        }
      }
    )
  },

  deleteProductById: (ProductId) => {
    return request.execute(
      'get',
      '/Product/Delete_Product',
      {
        params: {
          ProductId
        }
      }
    )
  },
}