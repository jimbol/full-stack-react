import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../../api'

export const updateQuestion = createAsyncThunk(
  'questions/updateQuestion',
  async (question) => {
    const response = await API('PUT', `/question/${question.id}`, {
      question,
    });

    return response.questions.map((question) => {
      question.id = question._id;
      delete question._id;
      return question;
    });
  }
);
