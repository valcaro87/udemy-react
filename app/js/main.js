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
	const nameArray = ["chris", "axl", "grey"]
	const

	return (
		<div>
			<Welcome fname="chris" lname="caro" />
			<Welcome fname="val axl" lname="caro" />
			<ul>
				{nameArray.map((name, i)=>
					<li key={i}> {name} </li>
				)}
			</ul>
		</div>
	)
});

ReactDOM.render(
	<App />,
  document.getElementById('app')
);
