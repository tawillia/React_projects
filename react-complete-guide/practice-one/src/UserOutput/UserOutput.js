import React from 'react';

import './UserOutput.css';

const userOutput = props => {
	return (
		<div className='UserOutput'>
			<p className='UserName'>Username: {props.userName}</p>
			<p>Input a new usename in the input box to change current username!</p>
		</div>
	);
};

export default userOutput;
