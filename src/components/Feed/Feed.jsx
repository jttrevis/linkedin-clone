import './Feed.css';
import userPhoto from '../../assets/images/eu.jpg';
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './../InputOptions/InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './../Post/Post';
const Feed = () => {
	return (
		<div className='feed'>
			<div className='feed__inputContainer'>
				<div className='feed__input'>
					<CreateIcon />
					<form className=''>
						<input type='text' />
						<button type='submit'>Send</button>
					</form>
				</div>
				<div className='feed__inputOptions'>
					<InputOptions
						Icon={ImageIcon}
						title='Photo'
						color='#70b5f9'
					/>
					<InputOptions
						Icon={SubscriptionsIcon}
						title='Video'
						color='#e7a33e'
					/>
					<InputOptions
						Icon={EventNoteIcon}
						title='Event'
						color='#c0cbcd'
					/>
					<InputOptions
						Icon={CalendarViewDayIcon}
						title='Write article'
						color='#7fc15e'
					/>
				</div>
			</div>

			<Post
				photoUrl={
					'https://imageio.forbes.com/specials-images/imageserve/62d700cd6094d2c180f269b9/0x0.jpg?format=jpg&crop=959,959,x0,y0,safe&height=416&width=416&fit=bounds'
				}
				name={'Elon Musk'}
				description={'Genius'}
				message={'BUY BITCOIN!!!'}
			/>
		</div>
	);
};

export default Feed;
