import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    categories: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        name: String,
        data: Buffer,
        alt: String,
      },
    ],
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  },
);

const Product = mongoose.model('Products', productSchema);

export default Product;
