import React from 'react';
import * as R from 'ramda';
import { Redirect, Route } from 'react-router-dom';

import { Maybe } from 'utils';

export default class AuthRoute extends React.Component {
  constructor(props) {
    super(props);

    this.defaultRedirect = this.props.defaultRedirect ? this.props.defaultRedirect : '/login';

    this.state = {
      isLoading: false,
      redirectUrl: null
    };
  }

  componentDidMount() {
    this.runMiddlwares();
  }

  runMiddlwares = () => {
    this.setState({ isLoading: true });

    const listPromiseMiddlewares = Maybe.toMaybe(this.props.middlewares)
      .map(
        R.map((item) => {
          return Promise.resolve(item.middlware())
            .catch(_ => Promise.reject(item.redirect ? item.redirect : this.defaultRedirect))
        })
      )
      .getOrElse([]);

    Promise.all(listPromiseMiddlewares)
      .catch(redirectUrl => this.setState({ redirectUrl }))
      .finally(_ => this.setState({ isLoading: false }))
  }

  render() {
    const { component: C, ...rest } = this.props;

    return (
      <React.Fragment>
        {
          this.state.isLoading
          ? null
          : this.state.redirectUrl
            ? <Redirect to={{ pathname: this.state.redirectUrl }} />
            : <Route {...rest} render={props => <C {...props} />} />
        }
      </React.Fragment>
    );
  }
}