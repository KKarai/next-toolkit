import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@app/hooks'
import { fetchAllBooks } from './booksSlice'
import { booksSelector } from './selectors'

export const useBooks = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector(booksSelector)

  useEffect(() => {
    dispatch(fetchAllBooks())
  }, [])

  return data
}
