import axios from 'axios';

const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

function fetchTrending() {
  return axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
    .then(res => res.data);
}
function fetchMovie(id) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    .then(res => {
      return res.data;
    });
}

function fetchMovieByQuery(query, pageNum = 1) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${pageNum}&include_adult=false`,
    )
    .then(res => {
      return res.data;
    });
}

function fetchReviews(movieId, pageNum = 1) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${pageNum}`,
    )
    .then(res => res.data);
}

function fetchCast(movieId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`,
    )
    .then(res => res.data.cast);
}
export default {
  fetchTrending,
  fetchMovie,
  fetchMovieByQuery,
  fetchReviews,
  fetchCast,
};
