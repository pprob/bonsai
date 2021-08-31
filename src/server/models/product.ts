import mongoose from 'mongoose';

interface ProductProps {
  name: string;
  price: number;
  quantity: number;
  categories: string[];
  description: string;
  images: Buffer[];
}

interface ProductDoc extends mongoose.Document {
  name: string;
  price: number;
  quantity: number;
  categories: string[];
  description: string;
  images: Buffer[];
}

interface ProductModel extends mongoose.Model<ProductDoc> {
  build(props: ProductProps): ProductDoc;
}

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
        type: Buffer,
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

productSchema.statics.build = (props: ProductProps) => {
  return new Product(props);
};

const Product = mongoose.model<ProductDoc, ProductModel>(
  'Products',
  productSchema,
);

export default Product;
