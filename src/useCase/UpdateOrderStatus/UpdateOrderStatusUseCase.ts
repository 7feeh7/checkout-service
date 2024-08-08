import { Order } from "../../entities/Order"
import { UpdateOrderStatusDTO } from "./UpdateOrderStatusDTO"

const orders: Order[] = []

export class UpdateOrderStatusUseCase {
  constructor() {}

  async execute(data: UpdateOrderStatusDTO) {
    const order = orders.find((order) => order.id === data.id)
    if (order) {
      order.status = data.status
    }
    return order
  }
}
