export interface ICreateOrderRequestDTO {
  items: { productId: string; quantity: number; price: number }[]
  amount: number
}
