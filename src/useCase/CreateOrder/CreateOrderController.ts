import { Request, Response } from "express"
import { CreateOrderUseCase } from "./CreateOrderUseCase"

export class CreateOrderController {
  constructor(private createOrderUseCase: CreateOrderUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { items, amount } = request.body

    try {
      const order = await this.createOrderUseCase.execute({ items, amount })

      return response.status(200).json(order)
    } catch (err: unknown) {
      return response.status(400).json({
        message: (err as Error).message || "Unexpected error.",
      })
    }
  }
}
