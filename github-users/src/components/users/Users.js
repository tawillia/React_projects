import React from 'react';
// import React, { Component } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div style={userStyle}>
				{users.map(user => (
					// {this.props.users.map(user => (
					// {this.state.users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
	// class Users extends Component {
	// state = {
	// 	users: [
	// 		{
	// 			id: '1',
	// 			ligin: 'mojombo',
	// 			avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
	// 			html_url: 'https://github.com/mojombo'
	// 		},
	// 		{
	// 			id: '2',
	// 			ligin: 'defunkt',
	// 			avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
	// 			html_url: 'https://github.com/defunkt'
	// 		},
	// 		{
	// 			id: '3',
	// 			ligin: 'pjhyett',
	// 			avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
	// 			html_url: 'https://github.com/pjhyett'
	// 		}
	// 	]
	// };

	// return (
	// 	<div style={userStyle}>
	// 		{users.map(user => (
	// 			// {this.props.users.map(user => (
	// 			// {this.state.users.map(user => (
	// 			<UserItem key={user.id} user={user} />
	// 		))}
	// 	</div>
	// );
};

Users.prooTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
};

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
};

export default Users;
