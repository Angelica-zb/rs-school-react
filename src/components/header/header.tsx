import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';
import pageData from '../../constants/constants';

const getTitle = () => {
  let title = pageData.pageTitle[2];
  const url = location.pathname;

  if (url === pageData.pagePath[0]) {
    title = pageData.pageTitle[0];
  } else if (url === pageData.pagePath[1]) {
    title = pageData.pageTitle[1];
  } else if (url === pageData.pagePath[2]) {
    title = pageData.pageTitle[3];
  }

  return title;
};

class Header extends React.Component<object, { title?: string }> {
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
              <NavLink
                to={pageData.pagePath[0]}
                onClick={() => this.changeTitle(pageData.pageTitle[0])}
              >
                Main
              </NavLink>
            </li>
            <li>
              <NavLink
                to={pageData.pagePath[1]}
                onClick={() => this.changeTitle(pageData.pageTitle[1])}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={pageData.pagePath[2]}
                onClick={() => this.changeTitle(pageData.pageTitle[3])}
              >
                Forms
              </NavLink>
            </li>
          </ul>
        </nav>
        <h2>{this.state.title}</h2>
      </header>
    );
  }
}

export default Header;
