import { Router } from "express"
import { orderRouter } from "./order"
import { paymentRouter } from "./payment"

const router = Router()

router.use("/orders", orderRouter)
router.use("/payments", paymentRouter)

export { router }
