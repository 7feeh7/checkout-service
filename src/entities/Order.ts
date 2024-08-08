export class Order {
  constructor(
    public id: string,
    public items: { productId: string; quantity: number; price: number }[],
    public status: "PENDING" | "COMPLETED" | "FAILED",
  ) {
    this.id = id
    this.items = items
    this.status = status
  }
}
