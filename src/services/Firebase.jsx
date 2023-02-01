import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyB5xucqKtwka5qXwKcH4bdwFETwXHn_134',
	authDomain: 'linkedin-clone-aef2c.firebaseapp.com',
	projectId: 'linkedin-clone-aef2c',
	storageBucket: 'linkedin-clone-aef2c.appspot.com',
	messagingSenderId: '101828878317',
	appId: '1:101828878317:web:639de49de451b63e3011e4',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
