import fs from "fs";
import formidable from "formidable";
import _ from "lodash";

import Product from "../models/productSchema.js";

const createProduct = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (error, fields, files) => {
    if (error) {
      return res.status(400).json({ error: "image could not be uploaded" });
    }
    const { name, description, unitPrice, category, quantity } = fields;
    if (!name || !description || !unitPrice || !category || !quantity) {
      return res.status(400).json({ error: "Missing fields. All fields are required." });
    }
    let product = new Product(fields);
    if (files.photo) {
      if (files.photo) {
        if (files.photo.size > 512000) {
          return res.status(400).json({ error: "File size should be below 512 KB" });
        }
      }
      product.photo.data = fs.readFileSync(files.photo.filepath);
      product.photo.contentType = files.photo.mimetype;
    }
    product.save((error, result) => {
      if (error) {
        return res.status(400).json({ error: "error saving file" });
      }
      res.json(result);
    });
  });
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(200).send("Error. Please try again");
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error. Please try again");
  }
};

const updateProduct = async (req, res) => {
  let { name, description, category, unitPrice, quantity, photo } = req.body;
  try {
    let product = await Product.findByIdAndUpdate(req.params.id);
    if (!product) return res.status(400).send("Error. Please try again");

    if (name) product.name = name;
    if (description) product.description = description;
    if (category) product.category = category;
    if (unitPrice) product.unitPrice = unitPrice;
    if (quantity) product.quantity = quantity;
    if (photo) product.photo = photo;

    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error, Please try again");
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedProduct);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export { createProduct, getProducts, getProduct, updateProduct, deleteProduct };
