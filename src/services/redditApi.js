import axios from 'axios';

export async function fetchPostsBySubreddit(subreddit = 'reactjs') {
  const { data } = await axios.get(`https://www.reddit.com/r/${subreddit}.json`);
  return data.data.children.map(({ data }) => ({
    id: data.id,
    title: data.title,
    author: data.author,
    thumbnail: data.thumbnail,
    ups: data.ups,
    numComments: data.num_comments,
    permalink: data.permalink,
    subreddit: data.subreddit,
  }));
}

export async function searchPosts(term) {
  const { data } = await axios.get('https://www.reddit.com/search.json', { params: { q: term } });
  return data.data.children.map(({ data }) => ({
    id: data.id,
    title: data.title,
    author: data.author,
    permalink: data.permalink,
    subreddit: data.subreddit,
    ups: data.ups,
  }));
}

export async function fetchComments(permalink) {
  const { data } = await axios.get(`https://www.reddit.com${permalink}.json`);
  const post = data[0].data.children[0]?.data || null;
  const comments = data[1].data.children
    .filter(c => c.kind === 't1')
    .map(({ data }) => ({
      id: data.id,
      author: data.author,
      body: data.body,
      ups: data.ups,
    }));
  return { post, comments };
}