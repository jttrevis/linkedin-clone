import './Post.css';
import { forwardRef } from 'react';
import { Avatar } from '@material-ui/core';
import InputOptions from './../InputOptions/InputOptions';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
	return (
		<div
			ref={ref}
			className='post'
		>
			<div className='post__header'>
				<Avatar src={photoUrl}>{name[0]}</Avatar>
				<div className='post__info'>
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</div>

			<div className='post__body'>
				<p>{message}</p>
			</div>

			<div className='post__buttons'>
				<InputOptions
					Icon={ThumbUpOffAltIcon}
					title={'Like'}
					color={'gray'}
				/>
				<InputOptions
					Icon={MessageIcon}
					title={'Comment'}
					color={'gray'}
				/>
				<InputOptions
					Icon={ShareIcon}
					title={'Share'}
					color={'gray'}
				/>
				<InputOptions
					Icon={SendIcon}
					title={'Send'}
					color={'gray'}
				/>
			</div>
		</div>
	);
});

export default Post;
