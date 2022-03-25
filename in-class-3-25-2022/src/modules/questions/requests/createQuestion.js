import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../../api'

export const createQuestion = createAsyncThunk(
  'questions/createQuestion',
  async ({ questionText, navigate }) => {
    const response = await API('POST', '/question', {
      question: {
        text: questionText,
      },
    });

    navigate(`/question/${response.insertedId}`);
  }
);
