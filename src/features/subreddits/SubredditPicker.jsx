// src/features/subreddits/SubredditPicker.jsx
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent } from './subredditsSlice';
import { loadPostsBySubreddit } from '../posts/postsSlice';

export default function SubredditPicker() {
  const dispatch = useDispatch();
  const { options, current } = useSelector(s => s.subreddits);

  return (
    <div style={{ padding: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {options.map(opt => (
        <button
          key={opt}
          onClick={() => { dispatch(setCurrent(opt)); dispatch(loadPostsBySubreddit(opt)); }}
          style={{
            padding: '6px 10px',
            border: '1px solid #ccc',
            borderRadius: 999,
            background: current === opt ? '#eef' : '#fff'
          }}
        >
          r/{opt}
        </button>
      ))}
    </div>
  );
}