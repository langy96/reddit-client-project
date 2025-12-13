import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPostsBySubreddit, searchPosts } from '../../services/redditApi';

export const loadPostsBySubreddit = createAsyncThunk('posts/loadBySubreddit', async (subreddit = 'reactjs') => {
  return await fetchPostsBySubreddit(subreddit);
});

export const loadPostsBySearch = createAsyncThunk('posts/loadBySearch', async (term) => {
  return await searchPosts(term);
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(loadPostsBySubreddit.pending, (s) => { s.status = 'loading'; })
     .addCase(loadPostsBySubreddit.fulfilled, (s, a) => { s.items = a.payload; s.status = 'succeeded'; s.error = null; })
     .addCase(loadPostsBySubreddit.rejected, (s, a) => { s.status = 'failed'; s.error = a.error.message; })
     .addCase(loadPostsBySearch.pending, (s) => { s.status = 'loading'; })
     .addCase(loadPostsBySearch.fulfilled, (s, a) => { s.items = a.payload; s.status = 'succeeded'; s.error = null; })
     .addCase(loadPostsBySearch.rejected, (s, a) => { s.status = 'failed'; s.error = a.error.message; });
  }
});

export default postsSlice.reducer;