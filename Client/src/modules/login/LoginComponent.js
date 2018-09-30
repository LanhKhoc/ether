import React from 'react';

export default (props) => {
  return (
    <div className="p-login">
      <form className="p-login__form">
        <input className="form-control" placeholder="Username" type="text" autoComplete="off" />
        <input className="form-control" placeholder="Password" type="password" autoComplete="new-password" />
        <div className="text-center">
          <button className="btn btn-success btn-lg">LOGIN</button>
        </div>
      </form>
    </div>
  );
}