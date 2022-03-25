import { configureStore } from '@reduxjs/toolkit';
import { reducers as questionReducers } from '../questions';

console.log(questionReducers);
export const store = configureStore({
  reducer: {
    ...questionReducers,
  }
});
