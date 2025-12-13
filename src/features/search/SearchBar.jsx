import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { loadPostsBySearch } from '../posts/postsSlice';

export default function SearchBar() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();
    const term = inputRef.current.value.trim();
    if (term) dispatch(loadPostsBySearch(term));
  }

  return (
    <form onSubmit={onSubmit} style={{ padding: 16, display: 'flex', gap: 8 }}>
      <input ref={inputRef} placeholder="Search Reddit…" style={{ flex: 1, padding: 8 }} />
      <button type="submit">Search</button>
    </form>
  );
}