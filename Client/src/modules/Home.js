import React from "react";
import { Switch } from 'react-router-dom';

import { AuthRoute } from 'middlewares';
import Header from 'modules/components/header/Header';
import { LoginContainer as Login } from 'modules/login';

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="l-dashboard">
				<div className="l-dashboard__header">
					<Header />
				</div>

				<div className="l-dashboard__content">
					<Switch>
						<AuthRoute path="/login" middlewares={[]} component={Login} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default Home;