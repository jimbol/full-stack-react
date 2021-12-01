import { configureStore } from '@reduxjs/toolkit'
import { reducers as questionReducers } from '../questions'

export const store = configureStore({
  reducer: {
    ...questionReducers,
  },
});
