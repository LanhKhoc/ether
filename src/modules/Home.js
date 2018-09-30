import React from "react";
import { Switch } from 'react-router-dom';

import { AuthRoute } from 'middlewares';
import Header from 'components/header/Header';
import { LoginContainer as Login } from 'modules/login';

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
					<Switch>
						<AuthRoute path="/login" middlewares={[]} component={Login} />
					</Switch>
			</div>
		);
	}
}

export default Home;