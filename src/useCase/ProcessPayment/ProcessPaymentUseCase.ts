import { IHttpClient } from "../../services/IHttpClient"
import { UpdateOrderStatusUseCase } from "../UpdateOrderStatus/UpdateOrderStatusUseCase"
import { IProcessPaymentRequestDTO } from "./ProcessPaymentDTO"

export class ProcessPaymentUseCase {
  constructor(
    private httpClient: IHttpClient,
    private updateOrderStatusUseCase: UpdateOrderStatusUseCase,
  ) {}

  async execute(data: IProcessPaymentRequestDTO) {
    try {
      const payment = await this.httpClient.post(
        `${process.env.API_PAYMENT_URL}/pay`,
        {
          orderId: data.orderId,
          amount: data.amount,
        },
      )

      if (payment === "SUCCESS") {
        return this.updateOrderStatusUseCase.execute({
          id: data.orderId,
          status: "COMPLETED",
        })
      } else {
        return this.updateOrderStatusUseCase.execute({
          id: data.orderId,
          status: "FAILED",
        })
      }
    } catch (error) {
      this.updateOrderStatusUseCase.execute({
        id: data.orderId,
        status: "FAILED",
      })
    }
  }
}
