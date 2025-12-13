import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPostsBySubreddit } from './postsSlice';
import { Link } from 'react-router-dom';

export default function PostsList() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((s) => s.posts);

  // Load posts on first render if idle
  useEffect(() => {
    if (status === 'idle') {
      dispatch(loadPostsBySubreddit('reactjs'));
    }
  }, [status, dispatch]);

  // Loading state
  if (status === 'loading') {
    return <p>Loading…</p>;
  }

  // Error state
  if (error) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <p>Error: {error}</p>
        <button
          onClick={() => dispatch(loadPostsBySubreddit('reactjs'))}
          style={{ marginTop: 8 }}
        >
          Retry
        </button>
      </div>
    );
  }

  // Empty state
  if (status === 'succeeded' && items.length === 0) {
    return <p>No posts found.</p>;
  }

  // Success state
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {items.map((p) => (
        <li key={p.id} style={{ borderBottom: '1px solid #eee', padding: 12 }}>
          <Link to={`/post/${p.id}`} state={{ permalink: p.permalink }}>
            {p.title}
          </Link>
          <div style={{ fontSize: 12, color: '#666' }}>
            by {p.author} • r/{p.subreddit} • ⬆️ {p.ups} • 💬 {p.numComments}
          </div>
        </li>
      ))}
    </ul>
  );
}