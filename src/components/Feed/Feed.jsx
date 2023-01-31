import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './../InputOptions/InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
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
		</div>
	);
};

export default Feed;
