# vue-train

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

Entities:

product entity {
  \_id: string // хранит в себе уникальные id сущности продукта, нужна для обращения в mongodb
  productCategoryID: number // содержит в себе уникальные id категории, к которой принадлежит продукт
  productDescription: string
  productId: number // уникальные номер продукта, по нему происходит запросы на поиск и т.д.
  productImage: string // содержит в себе url ссылку на стороннее хранилище в котором лежат картинки к определенному продукту
  productName: string
  productPrice: number
}

product entity example:
ProductEntity1 = {
  \_id:"6554dff70d473f892624934b"
  productCategoryID:1
  productDescription:"Натуральное молоко, богатое кальцием и витаминами."
  productId:1
  productImage:"https://utfs.io/f/c50c0998-936b-4dc2-931f-2ee79d158cc9-wwxj2q.5.jpg"
  productName:"Молоко Мое 2.5%"
  productPrice:670
}
