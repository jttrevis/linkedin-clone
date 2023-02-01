import './Header.css';
import React from 'react';
import HeaderOptions from '../HeaderOptions/HeaderOptions';

import LinkedInIcon from '../../assets/images/Link.svg';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from '../../services/Firebase';
import { logout } from '../../features/userSlice';

const Header = () => {
	const dispatch = useDispatch();

	const logoutOfApp = () => {
		dispatch(logout());
		auth.signOut();
	};
	return (
		<div className='header'>
			<div className='header__left'>
				<img
					src={LinkedInIcon}
					alt=''
				/>

				<div className='header__search'>
					<SearchIcon />
					<input
						placeholder='Search'
						type='text'
					/>
				</div>
			</div>

			<div className='header__right'>
				<HeaderOptions
					Icon={HomeIcon}
					title='Home'
				/>
				<HeaderOptions
					Icon={SupervisorAccountIcon}
					title='My Network'
				/>

				<HeaderOptions
					Icon={BusinessCenterIcon}
					title='Jobs'
				/>

				<HeaderOptions
					Icon={ChatIcon}
					title='Messaging'
				/>

				<HeaderOptions
					Icon={NotificationsIcon}
					title='Notifications'
				/>
				<HeaderOptions
					avatar={true}
					onClick={logoutOfApp}
					title='Sing Out'
				/>
			</div>
		</div>
	);
};

export default Header;
