import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Timer from './components/Timer';
import NameList from './components/NameList';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import NameProfile from './components/NameList/NameProfile';


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
			<IndexRoute component={Home} />
			<Route path="/" component={Home} />
			<Route path="timer" component={Timer} />

			<Route path="namelist">
				<IndexRoute path="namelist" component={NameList} />
				<Route path=":id" component={NameProfile} />
			</Route>

			<Route path="*" component={PageNotFound} />

		</Route>
	</Router>,
	document.getElementById('app')
);