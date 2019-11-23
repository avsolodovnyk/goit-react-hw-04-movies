import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moviesAPI from '../services';
import routes from '../routes';

export default class HomePage extends Component {
  static propTypes = {
    location: PropTypes.shape().isRequired,
  };

  state = { results: [] };

  componentDidMount() {
    moviesAPI.fetchTrending().then(data => {
      return this.setState({ results: data.results });
    });
  }

  render() {
    const { results } = this.state;
    const { location } = this.props;
    return (
      <>
        <ul>
          {results.map(item => {
            return (
              <li key={item.id}>
                <Link
                  to={{
                    pathname: `${routes.MOVIES}/${item.id}`,
                    state: { from: location },
                  }}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
