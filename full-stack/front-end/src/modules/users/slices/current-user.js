import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: '',
}

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
  },
});


export const currentUserActions = currentUserSlice.actions;
export const currentUser = currentUserSlice.reducer;
