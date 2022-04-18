const categoriesSeed = require("./category");
const productsSeed = require("./product");
const tagsSeed = require("./tag");
const productTagSeed = require("./product-tag");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await categoriesSeed();
  await productsSeed();
  await tagsSeed();
  await productTagSeed();

  process.exit(0);
};

seedAll();
