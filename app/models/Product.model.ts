import { DataTypes, Model } from "sequelize";

import { ProductAttributes } from "../../interfaces/products/productAttributes.interface";
import sequelize from "../config/sequelize/config";

 class Product extends Model<ProductAttributes> implements ProductAttributes {
  id!: number;
  name!: string;
  price!: number;
  quantity!: number;

  readonly createdAt!: Date;
  readonly updatedAt!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Product",
  }
);

export default Product;
