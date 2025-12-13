import { configureStore } from '@reduxjs/toolkit';
import posts from '../features/posts/postsSlice';
import subreddits from '../features/subreddits/subredditsSlice';
import comments from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: { posts, subreddits, comments }
});