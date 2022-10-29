import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;
const Schema = mongoose.Schema;

const productSchema = Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Product name is required"],
      minLength: [3, "Product name is too short"],
      maxLength: [32, "Too many characters"],
    },
    description: { type: String, required: true, maxLength: [3000, "Way too big"] },
    category: { type: String, trim: "true", required: [true, "Category is required"] },
    unitPrice: { type: Number, required: true, maxLength: [9, "Amount out of line"] },
    quantity: { type: Number },
    editor: { type: ObjectId, ref: "User", required: true },
    photo: { data: Buffer, contentType: String },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);

export default Product;
