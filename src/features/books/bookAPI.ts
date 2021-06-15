import { Book } from '@app/types'

type BookResponse = {
  data: Book[]
}

export async function fetchBooks(q?: string): Promise<Book[]> {
  const response = await fetch('/api/books')
  const body: BookResponse = await response.json()
  return body.data
}
