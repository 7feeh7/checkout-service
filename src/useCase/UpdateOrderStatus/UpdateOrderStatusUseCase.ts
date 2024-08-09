import { IOrderRepository } from "../../repositories/IOrderRepository"
import { UpdateOrderStatusDTO } from "./UpdateOrderStatusDTO"

export class UpdateOrderStatusUseCase {
  constructor(private ordersRepository: IOrderRepository) {}

  async execute(data: UpdateOrderStatusDTO) {
    const order = await this.ordersRepository.findById(data.id)

    if (!order) {
      throw new Error("Order not found.")
    }

    return await this.ordersRepository.update(data)
  }
}
