import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../../api'

export const fetchQuestion = createAsyncThunk(
  'questions/fetchQuestion',
  async (questionId) => {
    const response = await API('GET', `/question/${questionId}`);
    return response.questions.map((question) => {
      question.id = question._id;
      delete question._id;
      return question;
    });
  }
);
