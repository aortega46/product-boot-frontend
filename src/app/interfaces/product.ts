import { Image } from './image'
import { Category } from './category'

export interface Product {
  id: number
  name: string
  price: number
  description: string
  thumbnail: string
  images: Image[]
  categories: Category[]
}
