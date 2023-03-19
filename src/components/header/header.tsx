import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';

export default class Heder extends React.Component {
  render() {
    return (
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
