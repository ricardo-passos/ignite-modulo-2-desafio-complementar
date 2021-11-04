export type FoodType = {
  id: number
  name: string
  description: string
  price: string
  available: boolean
  image: string
}

export type FoodInput = Omit<FoodType, 'id' | 'available'>
