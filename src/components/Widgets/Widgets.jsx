import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const Widgets = () => {
	const newArticle = (heading, subtitle) => (
		<div className='widgets__article'>
			<div className='widgets__articLeft'>
				<FiberManualRecordIcon />
			</div>

			<div className='widgets__articRight'>
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);

	return (
		<div className='widgets'>
			<div className='widgets__header'>
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>
			{newArticle('ChatGPT', 'Top news - 9956 readers')}
			{newArticle('New role for Jr', 'Top news -500 readers')}
			{newArticle('BBC ', 'Top news - 996 readers')}
			{newArticle('Brasil now', 'Top news - 56 readers')}
			{newArticle('Champions League', 'Top news -9956 readers')}
		</div>
	);
};

export default Widgets;
