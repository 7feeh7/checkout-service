import { CreateOrderUseCase } from "./CreateOrderUseCase"
import { CreateOrderController } from "./CreateOrderController"
import { PostgresOrderRepository } from "../../repositories/implementations/PostgresOrdersRepository"

const postgresOrderRepository = new PostgresOrderRepository()

const createOrderUseCase = new CreateOrderUseCase(
    postgresOrderRepository
)
const createOrderController = new CreateOrderController(createOrderUseCase)

export { createOrderUseCase, createOrderController }
