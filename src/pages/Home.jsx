import SearchBar from '../features/search/SearchBar';
import SubredditPicker from '../features/subreddits/SubredditPicker';
import PostsList from '../features/posts/PostsList';

export default function Home() {
  return (
    <div>
      <h1>Home feed</h1>
      <SearchBar />
      <SubredditPicker />
      <PostsList />
    </div>
  );
}