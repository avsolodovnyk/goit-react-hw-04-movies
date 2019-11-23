import React, { Component } from 'react';
import shorid from 'shortid';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
  static propTypes = { handleSubmit: PropTypes.func.isRequired };

  state = { value: '' };

  handeleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    const idForm = shorid.generate();
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={idForm} className={styles.label}>
          Find Movie
          <input
            type="text"
            value={value}
            onChange={this.handeleChange}
            id={idForm}
          />
          <button type="submit">Search</button>
        </label>
      </form>
    );
  }
}
