import './Sidebar.css';
import { Avatar } from '@material-ui/core';

const Sidebar = () => {
	const recentItem = (topic) => (
		<div className='sidebar__recentItem'>
			<span className='sidebar__hash'>#</span>
			<p>{topic}</p>
		</div>
	);

	return (
		<div className='sidebar'>
			<div className='sidebar__top'>
				<img
					src='https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
					alt=''
				/>
				<Avatar className='sidebar__avatar' />
				<h2>Elon Musk</h2>
				<h4>eleonmusk@gmail.com</h4>
			</div>

			<div className='sidebar__stats'>
				<div className='sidebar__stat'>
					<p>Who viewed you</p>
					<p className='sidebar__statNumber'>10.551</p>
				</div>
				<div className='sidebar__stat'>
					<p>Views on post</p>
					<p className='sidebar__statNumber'>56.555</p>
				</div>
			</div>

			<div className='sidebar__bottom'>
				<p>Recent</p>
				{recentItem('reactjs')}
				{recentItem('javascript')}
				{recentItem('developer')}
				{recentItem('reactjs')}
				{recentItem('reactjs')}
			</div>
		</div>
	);
};

export default Sidebar;
