import { v4 } from "uuid"

export class Order {
  public readonly id?: string

  constructor(
    public items: { productId: string; quantity: number; price: number }[],
    public status: "PENDING" | "COMPLETED" | "FAILED",
    id?: string,
  ) {
    this.items = items
    this.status = status

    if (!id) {
      this.id = v4()
    }
  }
}
