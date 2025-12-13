import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPostsBySubreddit } from './postsSlice';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';

export default function PostsList() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((s) => s.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(loadPostsBySubreddit('reactjs'));
    }
  }, [status, dispatch]);

  if (status === 'loading') return <Loader />;
  if (error)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <p role="alert">Error: {error}</p>
        <button
          aria-label="Retry loading posts"
          onClick={() => dispatch(loadPostsBySubreddit('reactjs'))}
        >
          Retry
        </button>
      </div>
    );
  if (status === 'succeeded' && items.length === 0) return <p>No posts found.</p>;

  return (
    <ul className="posts-list">
      {items.map((p) => (
        <li key={p.id} className="post-card">
          <Link to={`/post/${p.id}`} state={{ permalink: p.permalink }}>
            <h2>{p.title}</h2>
          </Link>
          <div className="post-meta">
            by {p.author} • r/{p.subreddit} • ⬆️ {p.ups} • 💬 {p.numComments}
          </div>
        </li>
      ))}
    </ul>
  );
}