// Fetching data
// TOPICS
export const fetchTopics = () => {
  return fetch(`/api/topics`)
    .then(buffer => buffer.json())
};

// ARTICLES
export const fetchArticles = (type, param) => {
  const url = param
    ? `/api/${type}/${param}/articles` // fetch articles by type
    : `/api/articles` // fetch all articles
  return fetch(url)
    .then(buffer => buffer.json())
};

// SINGLE ARTICLE
export const fetchArticle = articleId => {
  return fetch(`/api/articles/${articleId}`)
    .then(buffer => buffer.json())
    .then(res => res.article)
};

// COMMENTS FOR ARTICLE
export const fetchComments = articleId => {
  return fetch(`/api/articles/${articleId}/comments`)
    .then(buffer => buffer.json())
    .then(res => res.comments)
};

// USER
export const fetchUser = username => {
  return fetch(`/api/users/${username}`)
    .then(buffer => buffer.json())
    .then(res => res.user)
};


// Voting (articles & comments)
export const vote = (type, id, voteOption, data) => {
  if (!data) {
    // state -> single article - object
    return fetch(`/api/articles/${id}?vote=${voteOption}`, { method: 'PUT' })
      .then(buffer => buffer.json())
      .then(res => res.article)
  };
  // state -> array of articles or comments 
  return fetch(`/api/${type}/${id}?vote=${voteOption}`, { method: 'PUT' })
    .then(buffer => buffer.json())
    .then(res => {
      const key = Object.keys(res)[0];
      return res[key];
    })
    .then(newArticle => {
      return data.map(article => {
        if (article._id === newArticle._id) return newArticle;
        return article;
      });
    });
};


// Adding comment
export const addComment = (articleId, body) => {
  return fetch(`/api/articles/${articleId}/comments`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(buffer => buffer.json())
    .then(res => res.comment)
    .then(comment => {
      const updatedArticle = fetchArticle(articleId);
      return Promise.all([updatedArticle, comment]);
    });
}


// Deleting comment
export const deleteComment = (commentId, articleId) => {
  return fetch(`/api/comments/${commentId}`, { method: 'DELETE' })
    .then(() => fetchArticle(articleId));
}