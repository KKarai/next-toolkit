import { FC } from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { Books } from '@features/books/Books'

const BooksPage: FC = () => (
  <>
    <AppBar color="secondary" />
    <Books />
  </>
)

export default BooksPage
