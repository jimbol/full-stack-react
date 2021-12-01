export const getQuestion = (questionId) => (state) => {
  return state.questions.items[questionId];
}
