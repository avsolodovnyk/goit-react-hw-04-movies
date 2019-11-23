import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moviesAPI from '../services';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

export default class MovieDetailsPage extends Component {
  state = { movie: null };

  static propTypes = {
    history: PropTypes.shape().isRequired,
    match: PropTypes.shape().isRequired,
    location: PropTypes.shape().isRequired,
    prevPage: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = () => {
    const { movieId } = this.props.match.params;
    moviesAPI.fetchMovie(movieId).then(data => this.setState({ movie: data }));
  };

  onGoBack = () => {
    if (this.props.location.state && this.props.location.state.from) {
      this.props.history.push(this.props.location.state.from);
      return;
    }
    this.props.history.push(this.props.prevPage);
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;
    const { path, url } = match;
    return (
      <div>
        <button type="button" onClick={this.onGoBack}>
          Back
        </button>
        {movie && (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.poster_path}
              width="300px"
            />
            <Link to={`${url}/cast`}>Cast</Link>
            <Link to={`${url}/reviews`}>Reviews</Link>
            <Route path={`${path}/cast`} component={Cast} />
            <Route path={`${path}/reviews`} component={Reviews} />
          </>
        )}
      </div>
    );
  }
}
