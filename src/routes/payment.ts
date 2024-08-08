import { Router } from "express"
import { processPaymentController } from "../useCase/ProcessPayment"

const paymentRouter = Router()

paymentRouter.post("/", async (request, response) => {
  return processPaymentController.handle(request, response)
})

export { paymentRouter }
