import { Order } from "../../entities/Order"
import { IOrderRepository } from "../../repositories/IOrderRepository"
import { ICreateOrderRequestDTO } from "./CreateOrderDTO"

export class CreateOrderUseCase {
  constructor(private ordersRepository: IOrderRepository) {}

  async execute(data: ICreateOrderRequestDTO) {
    const order = new Order(data.items, "PENDING")
    return await this.ordersRepository.save(order)
  }
}
