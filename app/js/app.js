import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';

import { Router, Route, browserHistory } from 'react-router';
import Timer from './components/Timer';
import NameList from './components/NameList';


class App extends React.Component {


	render() {
		return (
			<div>
				<Layout />
			</div>

		)
	}
}

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<Route path="timer" component={Timer} />
			<Route path="namelist" component={NameList} />
		</Route>
	</Router>,
	document.getElementById('app')
);
