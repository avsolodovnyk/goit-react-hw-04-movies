import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moviesAPI from '../services';
import Searchbar from '../components/Searchbar';

class MoviesPage extends Component {
  static propTypes = {
    history: PropTypes.shape().isRequired,
    match: PropTypes.shape().isRequired,
    location: PropTypes.shape().isRequired,
  };

  state = { results: [], pageNum: 0 };

  componentDidMount() {
    const { location } = this.props;
    const { search } = location;
    const currentQuery = new URLSearchParams(search).get('query');
    if (!currentQuery) {
      return;
    }
    this.fetchMovie(currentQuery);
  }

  componentDidUpdate(prevProps, prevState) {
    const { location } = this.props;
    const { search } = location;
    const prevQuery = new URLSearchParams(prevProps.location.search).get(
      'query',
    );
    const nextQuery = new URLSearchParams(search).get('query');
    if (nextQuery === prevQuery) {
      return;
    }
    this.fetchMovie(nextQuery);
  }

  setSearchQuery = searchQuery => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${searchQuery}`,
    });
  };

  fetchMovie = searchQuery => {
    const { pageNum } = this.state;
    moviesAPI.fetchMovieByQuery(searchQuery, pageNum + 1).then(res => {
      this.setState({ results: res.results, pageNum: res.page });
    });
  };

  render() {
    const { results } = this.state;
    const { match, location } = this.props;
    return (
      <>
        <Searchbar handleSubmit={this.setSearchQuery} />
        <ul>
          {results.map(item => {
            return (
              <li key={item.id}>
                <Link
                  to={{
                    pathname: `${match.url}/${item.id}`,
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

export default MoviesPage;
