const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Shirts",
  },
  {
    category_name: "Dress",
  },
  {
    category_name: "Shoes",
  },
  {
    category_name: "Jump suits",
  },
  {
    category_name: "Jackets",
  },
];

const categoriesSeed = () => Category.bulkCreate(categoryData);

module.exports = categoriesSeed;
