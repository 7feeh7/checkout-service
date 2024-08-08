import { CreateOrderUseCase } from "./CreateOrderUseCase"
import { CreateOrderController } from "./CreateOrderController"

const createOrderUseCase = new CreateOrderUseCase()
const createOrderController = new CreateOrderController(createOrderUseCase)

export { createOrderUseCase, createOrderController }
