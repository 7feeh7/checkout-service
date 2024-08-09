import { OrderModel } from "../database/models/Order"
import { Order } from "../entities/Order"

export interface IOrderRepository {
  save(order: Order): Promise<OrderModel>
  findById(id: string): Promise<OrderModel | null>
  update(user: any): Promise<void>
}
