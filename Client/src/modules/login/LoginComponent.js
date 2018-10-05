import React from 'react';

export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);

    this.$username = React.createRef();
    this.$password = React.createRef();
  }

  handleLogin = (e) => {
    e.preventDefault();

    this.props.handleLogin({
      username: this.$username.current.value,
      password: this.$password.current.value,
    })
  }

  render() {
    return (
      <div className="p-login">
        <form className="p-login__form" onSubmit={this.handleLogin}>
          <input className="form-control" placeholder="Username" type="text" autoComplete="off" ref={this.$username} />
          <input className="form-control" placeholder="Password" type="password" autoComplete="new-password" ref={this.$password} />
          <div className="text-center">
            <button className="btn btn-success btn-lg">LOGIN</button>
          </div>
        </form>
      </div>
    )
  }
}