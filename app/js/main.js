import React from 'react';
import ReactDOM from 'react-dom';


//const hello = <h3>im an h3 </h3>
const Welcome = ((props) => {
	return (
		<div>
			<h3> Welcome  {props.fname}</h3>
			<h3> {props.lname}</h3>
		</div>
	)
})

const redbg = {
	'backgroundColor': 'red',
	'font-size': 20
};

class App extends React.Component {
	nameMapper(nameArray) {
		return nameArray.map((name, i) =>
			<li key={i}> {name} </li>
		)
	}

	render() {
		const nameArray = ["val chris 1987", "axl2019!", "grey2012", "caro", "caro!"]
		return (
			<div style={redbg}>
				<Welcome fname="chris" lname="caro" />
				<Welcome fname="val axl" lname="caro" />
				<ul>
					{this.nameMapper(nameArray)}
				</ul>

			</div>
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
