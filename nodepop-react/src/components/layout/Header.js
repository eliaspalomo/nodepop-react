import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import Button from '../shared/Button';
import AuthButton from '../auth/AuthButton';
import './Header.css';


const Header = ({ className, ...props }) => {
  return (
    <header className={classNames('header', className)} {...props}>
      <nav className="header-nav">
        <Button
          as={NavLink}
          activeClassName="active"
          to="/adverts"
          variant="primary"
          className="header-button"
        >
          Home
        </Button>
        
      </nav>

      <nav className="header-nav">
        <Button
          as={NavLink}
          activeClassName="active"
          to="/newadvert"
          variant="primary"
          className="header-button"
        >
          Advert
        </Button>
        <AuthButton className="header-button" />
      </nav>
    </header>
  );
};

export default Header;
