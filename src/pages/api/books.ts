import type { NextApiHandler } from 'next'
import { BookCollection } from '@db'

const booksHandler: NextApiHandler = async (_, resp) => {
  await new Promise(resolve => setTimeout(resolve, 500))
  const data = BookCollection.all()

  resp.json({ data })
}

export default booksHandler
