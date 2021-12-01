export const getUsers = (state) => {
  return Array.from(
    new Set(
      Object.values(state.questions.items).map(({ user }) => user)
    )
  );
};

export const getCurrentUser = (state) => {
  return state.currentUser.user;
};
