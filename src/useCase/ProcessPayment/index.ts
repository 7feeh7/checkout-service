import { UpdateOrderStatusUseCase } from "../UpdateOrderStatus/UpdateOrderStatusUseCase"
import { ProcessPaymentUseCase } from "./ProcessPaymentUseCase"
import { ProcessPaymentController } from "./ProcessPaymentController"
import { AxiosHttpClient } from "../../services/AxiosHttpClient"
import { PostgresOrderRepository } from "../../repositories/implementations/PostgresOrdersRepository"

const httpClient = new AxiosHttpClient()

const postgresOrderRepository = new PostgresOrderRepository()

const updateOrderStatusUseCase = new UpdateOrderStatusUseCase(
  postgresOrderRepository,
)

const processPaymentUseCase = new ProcessPaymentUseCase(
  httpClient,
  updateOrderStatusUseCase,
)

const processPaymentController = new ProcessPaymentController(
  processPaymentUseCase,
)

export { processPaymentUseCase, processPaymentController }
