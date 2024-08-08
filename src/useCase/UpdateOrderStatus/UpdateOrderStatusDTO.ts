export interface UpdateOrderStatusDTO {
  id: string
  status: "PENDING" | "COMPLETED" | "FAILED"
}
