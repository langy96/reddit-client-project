import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchComments } from '../../services/redditApi';

export const loadComments = createAsyncThunk(
  'comments/load',
  async (permalink) => {
    const { post, comments } = await fetchComments(permalink);
    return { post, comments, permalink };
  }
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    byPermalink: {}, // { [permalink]: { post, comments, status, error } }
  },
  reducers: {
    clearComments(state, action) {
      delete state.byPermalink[action.payload];
    }
  },
  extraReducers: (b) => {
    b.addCase(loadComments.pending, (s, a) => {
      const key = a.meta.arg;
      s.byPermalink[key] = s.byPermalink[key] || { post: null, comments: [], status: 'idle', error: null };
      s.byPermalink[key].status = 'loading';
      s.byPermalink[key].error = null;
    })
    .addCase(loadComments.fulfilled, (s, a) => {
      const { permalink, post, comments } = a.payload;
      s.byPermalink[permalink] = { post, comments, status: 'succeeded', error: null };
    })
    .addCase(loadComments.rejected, (s, a) => {
      const key = a.meta.arg;
      s.byPermalink[key] = s.byPermalink[key] || { post: null, comments: [], status: 'idle', error: null };
      s.byPermalink[key].status = 'failed';
      s.byPermalink[key].error = a.error.message;
    });
  }
});

export const { clearComments } = commentsSlice.actions;
export default commentsSlice.reducer;