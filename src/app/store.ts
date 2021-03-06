import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit'

import counterReducer from '@features/counter/counterSlice'
import { bookSlice } from '@features/books/booksSlice'

export function makeStore() {
  return configureStore({
    reducer: { counter: counterReducer, books: bookSlice.reducer }
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>

export default store
