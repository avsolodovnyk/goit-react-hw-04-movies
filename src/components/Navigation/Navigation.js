import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

export default function Navigation() {
  return (
    <ul>
      <li>
        <NavLink
          to={routes.MOVIES}
          style={{ color: 'blue' }}
          activeStyle={{ color: 'green' }}
        >
          Movies
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to={routes.HOME}
          style={{ color: '#912121' }}
          activeStyle={{ color: 'yellow' }}
        >
          Home
        </NavLink>
      </li>
    </ul>
  );
}
