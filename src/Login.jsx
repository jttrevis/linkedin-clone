import { useState } from 'react';
import './Login.css';
import { auth } from './services/Firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [profilePic, setProfilePic] = useState('');

	const dispatch = useDispatch();

	const register = () => {
		if (!name) {
			return alert('Please enter a name');
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoURL: profilePic,
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoUrl: profilePic,
							}),
						);
					});
			})
			.catch((error) => alert(error.message));
	};
	const loginToApp = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch({
					email: userAuth.user.email,
					uid: userAuth.user.uid,
					displayName: userAuth.user.displayName,
					profileUrl: userAuth.user.photoURL,
				});
			})
			.catch((error) => alert(error));
	};

	return (
		<div className='login'>
			<img
				src='https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png'
				alt=''
			/>

			<form>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder='Full name ( required if registering'
					type='text'
				/>
				<input
					value={profilePic}
					onChange={(e) => setProfilePic(e.target.value)}
					placeholder='Profile pic Url (optional)'
					type='text'
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder='Email'
					type='email'
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Password'
					type='password'
				/>
				<button
					type='submit'
					onClick={loginToApp}
				>
					Sign In
				</button>
			</form>

			<p>Not a member?</p>
			<span
				onClick={register}
				className='login__register'
			>
				Register Now
			</span>
		</div>
	);
};

export default Login;
