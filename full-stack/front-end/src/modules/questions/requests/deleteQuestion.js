import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../../api'

export const deleteQuestion = createAsyncThunk(
  'questions/deleteQuestion',
  async (questionId) => {
    await API('DELETE', `/question/${questionId}`);
    return questionId;
  }
);
