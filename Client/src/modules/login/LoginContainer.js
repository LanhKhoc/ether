import React from 'react';
import { connect } from 'react-redux';

import { login } from 'actions/user';
import LoginComponent from './LoginComponent';

const mapStateToProps = null;
const mapDispatchToProps = {
  login
}

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LoginComponent handleLogin={this.props.login} />
    );
  }
}