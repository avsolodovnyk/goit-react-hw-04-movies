import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moviesAPI from '../../services';

export default class Reviews extends Component {
  static propTypes = {
    match: PropTypes.shape().isRequired,
  };

  state = { reviews: {} };

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = () => {
    const { movieId } = this.props.match.params;
    moviesAPI.fetchReviews(movieId).then(res => {
      this.setState({ reviews: res });
    });
  };

  render() {
    const { reviews } = this.state;
    if (reviews.total_results === 0) {
      return <div>No Reviews</div>;
    }
    return (
      <ul>
        {reviews.results &&
          reviews.results.map(item => (
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
