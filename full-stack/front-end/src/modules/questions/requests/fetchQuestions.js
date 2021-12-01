import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../../api'

export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async () => {
    const response = await API('GET', '/questions');
    return response.questions.map((question) => {
      question.id = question._id;
      delete question._id;
      return question;
    });
  }
);

export const deleteQuestion = createAsyncThunk(
  'questions/deleteQuestion',
  async (questionId) => {
    await API('DELETE', `/question/${questionId}`);
    return questionId;
  }
);
