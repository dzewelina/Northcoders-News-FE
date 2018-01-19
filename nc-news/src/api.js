const API_URL = 'https://northcoders-news-api.herokuapp.com';

// Fetching data
// TOPICS
export const fetchTopics = () => {
  return fetch(`${API_URL}/api/topics`)
    .then(buffer => buffer.json())
};

// ARTICLES
export const fetchArticles = (type, param) => {
  const url = param
    ? `${API_URL}/api/${type}/${param}/articles` // fetch articles by type
    : `${API_URL}/api/articles` // fetch all articles
  return fetch(url)
    .then(buffer => buffer.json())
};

// SINGLE ARTICLE
export const fetechArticle = articleId => {
  return fetch(`${API_URL}/api/articles/${articleId}`)
    .then(buffer => buffer.json())
};

// COMMENTS FOR ARTICLE
export const fetechComments = articleId => {
  return fetch(`${API_URL}/api/articles/${articleId}/comments`)
    .then(buffer => buffer.json())
};

// USER
export const fetchUser = username => {
  return fetch(`${API_URL}/api/users/${username}`)
    .then(buffer => buffer.json())
};


// Voting (articles & comments)
export const vote = (type, id, voteOption, data) => {
  if (!data) {
    // state -> single article - object
    return fetch(`${API_URL}/api/articles/${id}?vote=${voteOption}`, { method: 'PUT' })
      .then(buffer => buffer.json())
  };
  // state -> array of articles or comments 
  return fetch(`${API_URL}/api/${type}/${id}?vote=${voteOption}`, { method: 'PUT' })
    .then(buffer => buffer.json())
    .then(newArticle => {
      return data.map(article => {
        if (article._id === newArticle._id) return newArticle;
        return article;
      });
    });
};