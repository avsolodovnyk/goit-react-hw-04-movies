import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moviesAPI from '../../services';

export default class Reviews extends Component {
  static propTypes = {
    match: PropTypes.shape().isRequired,
  };

  state = { reviews: null };

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = () => {
    const { movieId } = this.props.match.params;
    moviesAPI.fetchReviews(movieId).then(res => {
      if (!res.total_results) {
        return;
      }
      this.setState({ reviews: res.results });
    });
  };

  render() {
    const { reviews } = this.state;
    return (
      <ul>
        {!reviews && <div>no reviews</div>}
        {reviews &&
          reviews.map(item => (
            <li key={item.id}>
              {item.author}
              <div>{item.content}</div>
              <a href={item.url}>{item.url}</a>
            </li>
          ))}
      </ul>
    );
  }
}
