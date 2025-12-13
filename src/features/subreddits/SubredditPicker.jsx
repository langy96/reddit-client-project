import { useDispatch, useSelector } from 'react-redux';
import { setCurrent } from './subredditsSlice';
import { loadPostsBySubreddit } from '../posts/postsSlice';

export default function SubredditPicker() {
  const dispatch = useDispatch();
  const { options, current } = useSelector((s) => s.subreddits);

  return (
    <div style={{ padding: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {options.map((opt) => (
        <button
          key={opt}
          className={`subreddit-button ${current === opt ? 'active' : ''}`}
          onClick={() => {
            dispatch(setCurrent(opt));
            dispatch(loadPostsBySubreddit(opt));
          }}
        >
          r/{opt}
        </button>
      ))}
    </div>
  );
}