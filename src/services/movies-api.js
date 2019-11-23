import axios from 'axios';

function fetchTrending(period) {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/${period}?api_key=18bb13bff55f0c72a15d89a6d24ad59c`,
    )
    .then(res => res.data);
}
function fetchMovie(id) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=18bb13bff55f0c72a15d89a6d24ad59c`,
    )
    .then(res => {
      return res.data;
    });
}

function fetchMovieByQuery(query, pageNum = 1) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=18bb13bff55f0c72a15d89a6d24ad59c&language=en-US&query=${query}&page=${pageNum}&include_adult=false`,
    )
    .then(res => {
      return res.data;
    });
}

function fetchReviews(movieId, pageNum = 1) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=18bb13bff55f0c72a15d89a6d24ad59c&language=en-US&page=${pageNum}`,
    )
    .then(res => res.data);
}

function fetchCast(movieId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=18bb13bff55f0c72a15d89a6d24ad59c`,
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
