import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moviesAPI from '../../services';

export default class Reviews extends Component {
  static propTypes = {
    match: PropTypes.shape().isRequired,
  };

  state = { reviews: [] };

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = () => {
    const { movieId } = this.props.match.params;
    moviesAPI
      .fetchReviews(movieId)
      .then(res => this.setState({ reviews: res.results }));
  };

  render() {
    const { reviews } = this.state;
    return reviews.length === 0 ? (
      <div>No reviews</div>
    ) : (
      <ul>
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
