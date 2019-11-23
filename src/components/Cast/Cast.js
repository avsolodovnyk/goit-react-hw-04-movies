import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moviesAPI from '../../services';

export default class Cast extends Component {
  static propTypes = {
    match: PropTypes.shape().isRequired,
  };

  state = { cast: null };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { movieId } = this.props.match.params;
    moviesAPI.fetchCast(movieId).then(res => this.setState({ cast: res }));
  };

  render() {
    const { cast } = this.state;
    return (
      <ul>
        {cast &&
          cast.map(item => (
            <li key={item.cast_id}>
              <p>{item.name}</p>
              {item.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                  alt={item.profile_path}
                  width="100px"
                />
              )}
              <p>{item.character}</p>
            </li>
          ))}
      </ul>
    );
  }
}
