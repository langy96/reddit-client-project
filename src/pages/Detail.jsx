import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { loadComments } from '../features/comments/commentsSlice';

export default function Detail() {
  const { state } = useLocation();
  const permalink = state?.permalink;
  const dispatch = useDispatch();
  const entry = useSelector(s => permalink ? s.comments.byPermalink[permalink] : null);

  useEffect(() => {
    if (permalink && (!entry || entry.status === 'idle')) {
      dispatch(loadComments(permalink));
    }
  }, [permalink, entry, dispatch]);

  if (!permalink) return <p style={{ padding: 16 }}>No permalink provided.</p>;
  if (!entry || entry.status === 'loading') return <p style={{ padding: 16 }}>Loading…</p>;
  if (entry.error) return <p style={{ padding: 16 }}>Error: {entry.error}</p>;

  const { post, comments } = entry;

  return (
    <div style={{ padding: 16 }}>
      <h2>{post?.title}</h2>
      <div style={{ fontSize: 12, color: '#666' }}>
        by {post?.author} • r/{post?.subreddit}
      </div>

      <div style={{ marginTop: 16 }}>
        <h3>Comments</h3>
        {comments.length === 0 ? (
          <p>No comments.</p>
        ) : (
          comments.map(c => (
            <div key={c.id} style={{ borderTop: '1px solid #eee', paddingTop: 8, marginTop: 8 }}>
              <div style={{ fontSize: 12, color: '#666' }}>by {c.author} • ⬆️ {c.ups}</div>
              <ReactMarkdown>{c.body}</ReactMarkdown>
            </div>
          ))
        )}
      </div>
    </div>
  );
}