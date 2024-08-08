import { Order } from "../../entities/Order"
import { ICreateOrderRequestDTO } from "./CreateOrderDTO"
import { v4 } from "uuid"

export class CreateOrderUseCase {
  constructor() {}

  async execute(data: ICreateOrderRequestDTO) {
    const id = v4()
    const newOrder = new Order(id, data.items, "PENDING")
    return newOrder
  }
}
