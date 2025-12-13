// src/features/subreddits/subredditsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initial = { options: ['reactjs', 'javascript', 'webdev', 'programming'], current: 'reactjs' };

const slice = createSlice({
  name: 'subreddits',
  initialState: initial,
  reducers: {
    setCurrent(state, action) {
      state.current = action.payload;
    }
  }
});

export const { setCurrent } = slice.actions;
export default slice.reducer;