import { Router } from "express"
import { orderRouter } from "./order"

const router = Router()

router.use("/orders", orderRouter)

export { router }
