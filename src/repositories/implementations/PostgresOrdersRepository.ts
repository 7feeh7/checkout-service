import { OrderModel } from "../../database/models/Order"
import { Order } from "../../entities/Order"
import { IOrderRepository } from "../IOrderRepository"

export class PostgresOrderRepository implements IOrderRepository {
  async save(order: Order): Promise<OrderModel> {
    return await OrderModel.create({
      ...order,
    })
  }
}
