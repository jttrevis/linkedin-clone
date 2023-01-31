import './Header.css';
import React from 'react';
import HeaderOptions from '../HeaderOptions/HeaderOptions';
import userPhoto from '../../assets/images/eu.jpg';

import LinkedInIcon from '../../assets/images/Link.svg';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
	return (
		<div className='header'>
			<div className='header__left'>
				<img
					src={LinkedInIcon}
					alt=''
				/>

				<div className='header__search'>
					<SearchIcon />
					<input type='text' />
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
					avatar={
						'https://imageio.forbes.com/specials-images/imageserve/62d700cd6094d2c180f269b9/0x0.jpg?format=jpg&crop=959,959,x0,y0,safe&height=416&width=416&fit=bounds'
					}
					title=' me '
				/>
			</div>
		</div>
	);
};

export default Header;
