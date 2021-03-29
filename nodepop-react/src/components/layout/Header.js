import React from 'react';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import Button from '../shared/Button';
import AuthButton from '../auth/AuthButton';
import './Header.css';

const Header = ({ className, ...props }) => {
  return (
    <header className={classNames('header', className)} {...props}>
      <Link to="/">
        <div className="header-logo">
          
        </div>
      </Link>
      <nav className="header-nav">
        <Button
          as={NavLink}
          activeClassName="active"
          to="/advert"
          variant="primary"
          className="header-button"
        >
          Cambiar
        </Button>
        <AuthButton className="header-button" />
      </nav>
    </header>
  );
};

export default Header;
