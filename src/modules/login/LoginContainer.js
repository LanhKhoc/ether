import React from 'react';

import LoginComponent from './LoginComponent';

export default class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LoginComponent />
    );
  }
}