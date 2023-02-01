import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './services/Firebase';
function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL,
					}),
				);
			} else {
				dispatch(logout());
			}
		});
	}, [dispatch]);

	return (
		<div className='App'>
			<Header />
			{!user ? (
				<Login />
			) : (
				<div className='app__body'>
					<Sidebar />
					<Feed />
				</div>
			)}
		</div>
	);
}

export default App;
