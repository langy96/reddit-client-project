import SearchBar from '../features/search/SearchBar';
import SubredditPicker from '../features/subreddits/SubredditPicker';
import PostsList from '../features/posts/PostsList';

export default function Home() {
  return (
    <main className="layout">
      <section className="feed">
        <h1 className="page-title">Home Feed</h1>
        <SearchBar />
        <SubredditPicker />
        <PostsList />
      </section>

      <aside className="sidebar">
        <h2>Trending</h2>
        <ul>
          <li>#React</li>
          <li>#Redux</li>
          <li>#JavaScript</li>
        </ul>

        <h2>About</h2>
        <p>
          This Reddit client lets you browse posts by subreddit, search keywords, and view comments.
        </p>
      </aside>
    </main>
  );
}