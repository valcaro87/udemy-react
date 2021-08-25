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

const App = (() => {
	const nameArray = ["val","chris", "axl", "grey", "caro"]
	const nameMapper = (() => 
		nameArray.map((name, i)=>
			<li key={i}> {name} </li>
		)
	);

	const redbg = {
		'backgroundColor': 'red',
		'font-size': 20
	};
	
	const changeHandler = ((event) => {
		console.log(event.target.value)
	})

	return (
		<div style={redbg}>
			<Welcome fname="chris" lname="caro" />
			<Welcome fname="val axl" lname="caro" />
			<ul>
				{nameMapper()}
			</ul>
			<input onChange={changeHandler} />
		</div>
	)
});

ReactDOM.render(
	<App />,
  document.getElementById('app')
);
