import * as firebase from 'firebase';

const firebaseInit = () => {
  const config = {
    apiKey: 'AIzaSyDp_XbThUZhhdt6exnZypdKXM-CEGLOAzs',
    authDomain: 'react-firebase-todo-app.firebaseapp.com',
    databaseURL: 'https://react-firebase-todo-app.firebaseio.com',
    projectId: 'react-firebase-todo-app',
    storageBucket: '',
    messagingSenderId: '765642933866',
  };
  firebase.initializeApp(config);
  firebase.database();
};

export default firebaseInit;
