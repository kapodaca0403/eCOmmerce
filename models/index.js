// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "categories_tag",
});

// Categories have many Products
Category.hasMany(Products, {
  foreignKey: "categories_tag",
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tags, {
  through: ProductTag,
  foreignKey: "product_tag",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "product_tag",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
