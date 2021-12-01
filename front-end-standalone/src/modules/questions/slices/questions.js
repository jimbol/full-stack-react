import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: {
    1: {
      id: 1,
      text: 'How tall is Mt. Everest?',
    },
    2: {
      id: 2,
      text: 'When was javascript created?',
    },
    3: {
      id: 3,
      text: 'Who am I?',
    },
  },
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addQuestions: (state, action) => {
      state.items = {
        ...state.items,
        ...action.payload.reduce((acc, question) => {
          acc[question.id] = question;
          return acc;
        }, {}),
      };
    },
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
});

export const questionActions = questionsSlice.actions;
export const questions = questionsSlice.reducer;
