import { createSlice } from "@reduxjs/toolkit"
import { deleteQuestion } from "../requests/deleteQuestion";
import { fetchQuestions } from "../requests/fetchQuestions";

const initialState = {
  items: {},
  loading: false,
};

const addQuestions = (state, action) => {
  state.loading = false;
  state.items = {
    ...state.items,
    ...action.payload.reduce((acc, question) => {
      acc[question.id] = question;
      return acc;
    }, {}),
  };
};

const setLoading = (state) => {
  state.loading = true;
};

const removeQuestion = (state, action) => {
  delete state.items[action.payload];
};

export const questionsSlice = createSlice({
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
    removeQuestion,
    upvote: (state, action) => {
      const { questionId } = action.payload;

      const upvotes = (state.items[questionId].upvotes || 0) + 1;
      state.items[questionId].upvotes = upvotes;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, addQuestions);
    builder.addCase(fetchQuestions.pending, setLoading);

    builder.addCase(deleteQuestion.fulfilled, removeQuestion);
    builder.addCase(deleteQuestion.pending, setLoading);
  },
});

export const questionActions = questionsSlice.actions;
export const questions = questionsSlice.reducer;
