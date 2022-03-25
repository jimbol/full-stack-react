import { createSlice } from '@reduxjs/toolkit';
import { fetchQuestions, createQuestion, fetchQuestion } from '../requests';

const initialState = {
  loading: false,
  items: {}
};

const addQuestions = (state, action) => {
  state.items = {
    ...state.items,
    ...action.payload.reduce((acc, question) => {
      acc[question.id] = question;
      return acc;
    }, {}),
  }
  state.loading = false;
};

const setLoading = (state) => {
  state.loading = true;
};

export const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addQuestions,
    addAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      const answers = state.items[questionId].answers || {};
      answers[answer.id] = answer;
      state.items[questionId].answers = answers;
    },
    removeQuestion: (state, action) => {
      delete state.items[action.payload.id];
    },
    upvote: (state, action) => {
      const { questionId } = action.payload;

      const upvotes = (state.items[questionId].upvotes || 0) + 1;
      state.items[questionId].upvotes = upvotes;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, addQuestions);
    builder.addCase(fetchQuestions.pending, setLoading);

    builder.addCase(createQuestion.fulfilled, addQuestions);
    builder.addCase(createQuestion.pending, setLoading);

    builder.addCase(fetchQuestion.fulfilled, addQuestions);
    builder.addCase(fetchQuestion.pending, setLoading);
  }
});

export const questionActions = questionSlice.actions;
export const questions = questionSlice.reducer;
