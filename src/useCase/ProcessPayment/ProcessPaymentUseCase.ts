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
      const payment = await this.httpClient.post<{ status: string }>(
        `${process.env.API_PAYMENT_URL}/pay`,
        {
          orderId: data.orderId,
          amount: data.amount,
        },
      )

      if (payment.status === "SUCCESS") {
        this.updateOrderStatusUseCase.execute({
          id: data.orderId,
          status: "COMPLETED",
        })
      } else {
        this.updateOrderStatusUseCase.execute({
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
