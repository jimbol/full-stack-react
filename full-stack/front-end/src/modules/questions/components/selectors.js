export const getQuestion = (questionId) => (state) => {
  return state.questions.items[questionId];
}

export const getCurrentUser = (state) => state.currentUser.user;
