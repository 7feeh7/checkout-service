import { Request, Response } from "express"
import { ProcessPaymentUseCase } from "./ProcessPaymentUseCase"

export class ProcessPaymentController {
  constructor(private processPaymentUseCase: ProcessPaymentUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { orderId, amount } = request.body

    try {
      const payment = await this.processPaymentUseCase.execute({
        orderId,
        amount,
      })

      return response.status(200).json(payment)
    } catch (err: unknown) {
      return response.status(400).json({
        message: (err as Error).message || "Unexpected error.",
      })
    }
  }
}
