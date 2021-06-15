import { FC } from 'react'
import { Toolbar } from './components/Toolbar'
import { useBooks } from './hooks'

export const Books: FC = () => {
  const { books, error, isloading } = useBooks()

  if (isloading) {
    return <>Loading...</>
  }

  return (
    <>
      <Toolbar title="Books" />
      <div>Книги</div>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </>
  )
}
