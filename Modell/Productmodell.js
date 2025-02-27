import mongoose from "mongoose";
const {Schema,model}= mongoose;

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: String,
      required: false,
    },
    productCategory: {
      type: String,
      required: true,
    },
    productDiscount: {
      type: String, // Fixed `int` to `Number`
      default: 0,
    },
    images: {
      type: Array,
      required: false
    },
  },
  { timestamps: true } // Moved timestamps option here
);

const Product = model("Product", productSchema);

export default Product;
