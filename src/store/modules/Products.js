
const name = "PRODUCTS";
const namespaced = true;
/*
  _id: "6554dff70d473f892624934b"
  productCategoryID: 1
  productDescription: "Натуральное молоко, богатое кальцием и витаминами."
  productId: 1
  productImage: "https://utfs.io/f/c50c0998-936b-4dc2-931f-2ee79d158cc9-wwxj2q.5.jpg"
  productName: "Молоко Мое 2.5%"
  productPrice: 670
*/

const state = {
  all: [
    {
      _id: "6554dff70d473f892624934b",
      productCategoryID: 1,
      productDescription: "Натуральное молоко, богатое кальцием и витаминами.",
      productId: 1,
      productImage: "https://utfs.io/f/c50c0998-936b-4dc2-931f-2ee79d158cc9-wwxj2q.5.jpg",
      productName: "Молоко Мое 2.5%",
      productPrice: 670,
    },
    {
      _id: "6554dff70d473f892624934b",
      productCategoryID: 1,
      productDescription: "Натуральное молоко, богатое кальцием и витаминами.",
      productId: 1,
      productImage: "https://utfs.io/f/c50c0998-936b-4dc2-931f-2ee79d158cc9-wwxj2q.5.jpg",
      productName: "Молоко Мое 2.5%",
      productPrice: 670,
    },
    {
      _id: "6554dff70d473f892624934b",
      productCategoryID: 1,
      productDescription:
        "Натуральное молоко, богатое кальцием и витаминами.",
      productId: 1,
      productImage:
        "https://utfs.io/f/c50c0998-936b-4dc2-931f-2ee79d158cc9-wwxj2q.5.jpg",
      productName: "Молоко Мое 2.5%",
      productPrice: 670,
    },
    { "_id": "6555c0639a2733e13f414088", "ProductId": 2, "ProductName": "Творог President", "productImage": "https://utfs.io/f/07a02ee3-3329-4c5e-8df4-f9bb27db3640-wjkuwu.jpg", "ProductDescription": "Идеальный выбор для приготовления легких закусок и десертов.", "ProductCategoryID": 1, "ProductPrice": 455 },
    { "_id": "6555cf721e16afe76fda1e59", "ProductId": "19", "ProductName": "Зелень сушеная Укроп", "productImage": "https://utfs.io/f/523492e7-8f67-4039-8085-d4d906a49f09-1mpody.jpg", "ProductDescription": "string", "ProductCategoryID": "3", "ProductPrice": "842" }
  ]
};
const getters = {
  STATE: (s) => s,
  ALL: (s) => s.all
};
const mutations = {
  SET_ALL: (state, data) => {

  }
};
const actions = {
  GET_ALL_PRODUCTS: async ({ commit }) => {

  }
};
export default {
  name,
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
