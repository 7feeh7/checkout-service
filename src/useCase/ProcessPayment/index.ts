import { UpdateOrderStatusUseCase } from "../UpdateOrderStatus/UpdateOrderStatusUseCase"
import { ProcessPaymentUseCase } from "./ProcessPaymentUseCase"
import { ProcessPaymentController } from "./ProcessPaymentController"
import { AxiosHttpClient } from "../../services/AxiosHttpClient"

const httpClient = new AxiosHttpClient()
const updateOrderStatusUseCase = new UpdateOrderStatusUseCase()
const processPaymentUseCase = new ProcessPaymentUseCase(
  httpClient,
  updateOrderStatusUseCase,
)
const processPaymentController = new ProcessPaymentController(
  processPaymentUseCase,
)

export { processPaymentUseCase, processPaymentController }
