import { Router } from "express"
import { createOrderController } from "../useCase/CreateOrder"

const orderRouter = Router()

orderRouter.post("/", async (request, response) => {
  return createOrderController.handle(request, response)
})

export { orderRouter }
