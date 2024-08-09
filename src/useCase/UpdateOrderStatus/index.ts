import { PostgresOrderRepository } from "../../repositories/implementations/PostgresOrdersRepository"
import { UpdateOrderStatusUseCase } from "./UpdateOrderStatusUseCase"

const postgresOrderRepository = new PostgresOrderRepository()

const updateOrderStatusUseCase = new UpdateOrderStatusUseCase(
  postgresOrderRepository,
)

export { updateOrderStatusUseCase }
