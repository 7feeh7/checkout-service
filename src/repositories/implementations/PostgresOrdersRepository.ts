import { OrderModel } from "../../database/models/Order"
import { Order } from "../../entities/Order"
import { IOrderRepository } from "../IOrderRepository"

export class PostgresOrderRepository implements IOrderRepository {
  async save(order: Order): Promise<OrderModel> {
    return await OrderModel.create({
      ...order,
    })
  }

  async findById(id: string): Promise<OrderModel | null> {
    return await OrderModel.findOne({
      where: { id },
      raw: true,
    })
  }

  async update(order: Order): Promise<void> {
    await OrderModel.update(order, { where: { id: order.id } })
  }
}
