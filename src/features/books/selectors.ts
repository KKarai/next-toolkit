import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@app/types'
import { booksAdapter } from './booksSlice'

export const { selectAll, selectById, selectTotal } = booksAdapter.getSelectors<RootState>(
  state => state.books
)

export const booksSelector = createSelector(
  selectAll,
  ({ books }: RootState) => ({ isloading: books.isloading, error: books.error }),
  (books, { isloading, error }) => ({ books, isloading, error })
)
