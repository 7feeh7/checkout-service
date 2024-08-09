import { DataTypes, Model } from "sequelize"
import { sequelize } from "../sequelize"

export class OrderModel extends Model {
  public id!: string
  public items!: object
  public status!: "PENDING" | "COMPLETED" | "FAILED"

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

OrderModel.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    items: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("PENDING", "COMPLETED", "FAILED"),
      allowNull: false,
      defaultValue: "PENDING",
    },
  },
  {
    tableName: "orders",
    timestamps: true,
    sequelize,
  },
)
