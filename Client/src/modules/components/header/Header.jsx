import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div className="c-header">
      <Link className="c-header__logo" to="/">Ether - LK</Link>
      <div className="c-header__navigate">
        <Link className="c-header__navigate-item" to="/register">Register</Link>
        <Link className="c-header__navigate-item" to="/login">Login</Link>
      </div>
    </div>
  );
}