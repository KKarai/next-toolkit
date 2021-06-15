export type { AppState as RootState } from './store'
export type Book = {
  id: string
  title: string
  authors: string[]
  description?: string
  pageCount: number
  thumbnail: string
}
