const router = require("express").Router();
const { Category, Product } = require("../../models");
const { restore } = require("../../models/Product");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const cateData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(cateData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
  try {
    const cateData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!cateData) {
      res.status(404).json({ message: "Nothing found" });
      return;
    }
    res.status(200).json(cateData);
  } catch (err) {
    res.status(500).json(err);
  }

  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", async (req, res) => {
  try {
    const cateData = await Category.create(req.body);
    res.status(200).json(cateData);
  } catch (err) {
    res.status(500).json(err);
  }
  // create a new category
});

router.put("/:id", async (req, res) => {
  try {
    const cateData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!cateData) {
      res.status(404).json({ message: "Nothing found" });
      return;
    }
    res.status(200).json(cateData);
  } catch (err) {
    res.status(500).json(err);
  }
  // update a category by its `id` value
});

router.delete("/:id", async (req, res) => {
  try {
    const cateData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!cateData) {
      res.status(404).json({ message: "Nothing found" });
      return;
    }
    res.status(200).json(cateData);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
