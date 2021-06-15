import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import { fetchBooks } from './bookAPI'
import { Book } from '@app/types'

export const booksAdapter = createEntityAdapter<Book>({
  selectId: book => book.id
})

export const fetchAllBooks = createAsyncThunk('books/fetchAll', async () => {
  const data = await fetchBooks()
  return data
})

const initialState = {
  ...booksAdapter.getInitialState(),
  isloading: false,
  error: null
}

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
      booksAdapter.upsertMany(state, action.payload)
      state.isloading = false
    })
    builder.addCase(fetchAllBooks.pending, state => {
      state.isloading = true
    })
    builder.addCase(fetchAllBooks.rejected, (state, action) => {
      state.isloading = false
      state.error = action.payload
    })
  }
})
