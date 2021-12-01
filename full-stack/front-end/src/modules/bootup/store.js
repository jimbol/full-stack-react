import { configureStore } from '@reduxjs/toolkit'
import { reducers as questionReducers } from '../questions'
import { reducers as userReducers } from '../users'

export const store = configureStore({
  reducer: {
    ...questionReducers,
    ...userReducers,
  },
});
