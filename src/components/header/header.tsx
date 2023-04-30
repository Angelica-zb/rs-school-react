import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import pageData from '../../constants/constants';
import classes from './Header.module.scss';

const getTitle = () => {
  let title = pageData.pageTitle.error;
  const url = location.pathname;

  if (url === pageData.pagePath.main) {
    title = pageData.pageTitle.main;
  } else if (url === pageData.pagePath.about) {
    title = pageData.pageTitle.about;
  } else if (url === pageData.pagePath.form) {
    title = pageData.pageTitle.form;
  }

  return title;
};

const Header = () => {
  const [titleValue, setTitle] = useState(getTitle());

  const changeTitle = (title: string): void => {
    setTitle(title);
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              to={pageData.pagePath.main}
              onClick={() => changeTitle(pageData.pageTitle.main)}
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              to={pageData.pagePath.about}
              onClick={() => changeTitle(pageData.pageTitle.about)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={pageData.pagePath.form}
              onClick={() => changeTitle(pageData.pageTitle.form)}
            >
              Forms
            </NavLink>
          </li>
        </ul>
      </nav>
      <h2>{titleValue}</h2>
    </header>
  );
};

export default Header;
