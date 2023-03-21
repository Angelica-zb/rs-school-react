import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';

function getTitle() {
  let title = 'Error 404';
  const url = location.pathname;
  if (url === '/') {
    title = 'Main';
  } else if (url === '/aboutus') {
    title = 'About Us';
  }
  return title;
}

export default class Header extends React.Component<object, { title?: string }> {
  constructor(public props: object) {
    super(props);
    this.state = {
      title: getTitle(),
    };
  }

  private changeTitle(title: string): void {
    this.setState({
      title: title,
    });
  }

  render() {
    return (
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <NavLink to="/" onClick={() => this.changeTitle('Main')}>
                Main
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" onClick={() => this.changeTitle('About Us')}>
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <h1>{this.state.title}</h1>
      </header>
    );
  }
}
