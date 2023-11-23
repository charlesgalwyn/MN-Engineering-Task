import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
const authReducer = createSlice({
  initialState,
  name: 'AUTHENTICATION',
  reducers: {
    updateAuthState: (state, { payload }) => ({
      auth: payload,
    }),
  },
});

export const { updateAuthState } = authReducer.actions;

export default authReducer.reducer;