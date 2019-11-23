import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navigation from '../Navigation';
import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import routes from '../../routes';
import 'normalize.css';

export default class App extends PureComponent {
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route exact path={routes.HOME} component={HomePage} />
          <Route
            path={routes.SHOW_DETAILS}
            render={props => {
              const { history, match, location } = props;
              return (
                <MovieDetailsPage
                  history={history}
                  match={match}
                  location={location}
                  prevPage={routes.MOVIES}
                />
              );
            }}
          />
          <Route path={routes.MOVIES} component={MoviesPage} />
          <Redirect to={routes.HOME} />
        </Switch>
      </Router>
    );
  }
}
