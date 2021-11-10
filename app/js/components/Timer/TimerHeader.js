import React from 'react';

export const TimerHeader = ((props) =>
	<h3>
		i've been runnning for: {props.time} seconds - <span>{props.time > 5 ? 'timer is above 5' : 'timer is below 5'}</span>
	</h3>
)