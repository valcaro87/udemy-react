import React from 'react';
import ReactDOM from 'react-dom';
import { NameList } from './components/NameList';






class App extends React.Component {


	render() {
		return (
			<NameList />
		)
	}
}

// var App = React.createClass({
// 	nameMapper: function () {


// 	},
// 	render: function () {
// 		return (

// 		)
// 	}
// })

// const App = (() => {

// 	const nameMapper = (() =>

// 	);

// 	const redbg = {
// 		'backgroundColor': 'red',
// 		'font-size': 20
// 	};

// 	const changeHandler = ((event) => {
// 		console.log(event.target.value)
// 	})

// 	return (

// 	)
// });

// const MyApp = ((props) => {
// 	const element = (
// 		<div>
// 			<h1>Hello to the Virtual DOM</h1>
// 			<h3>Ive been renderred  {props} times</h3>
// 		</div>
// 	)
// 	ReactDOM.render(
// 		element,
// 		document.getElementById('app')
// 	)
// })

// var numTimes = 0
// setInterval(() => {
// 	numTimes += 1
// 	MyApp(numTimes)
// }, 1000)

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
