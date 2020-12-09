import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDPFJQKhch43AkK_q4xguBT0XFtr21Yhbs',
  authDomain: 'discord-clone-931d1.firebaseapp.com',
  projectId: 'discord-clone-931d1',
  storageBucket: 'discord-clone-931d1.appspot.com',
  messagingSenderId: '403709735109',
  appId: '1:403709735109:web:43dc004dd049a4ad9580ac',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
