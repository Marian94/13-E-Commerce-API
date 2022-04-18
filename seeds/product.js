const { Product } = require("../models");

const productData = [
  {
    product_name: "Pikachu Shirt",
    price: 20.0,
    stock: 100,
    category_id: 1,
  },
  {
    product_name: "Beige Dress",
    price: 115.87,
    stock: 56,
    category_id: 2,
  },
  {
    product_name: "Dark Boots",
    price: 136.5,
    stock: 33,
    category_id: 3,
  },
  {
    product_name: "Fashion Blue Navy",
    price: 127.0,
    stock: 75,
    category_id: 4,
  },
  {
    product_name: "Denim Jacket Black",
    price: 290.0,
    stock: 22,
    category_id: 5,
  },
];

const productsSeed = () => Product.bulkCreate(productData);

module.exports = productsSeed;
