import * as firebase from 'firebase';
import sectionModel from './models/section';
import todoModel from './models/todo';

let database;

export const firebaseInit = () => {
  const config = {
    apiKey: 'AIzaSyDp_XbThUZhhdt6exnZypdKXM-CEGLOAzs',
    authDomain: 'react-firebase-todo-app.firebaseapp.com',
    databaseURL: 'https://react-firebase-todo-app.firebaseio.com',
    projectId: 'react-firebase-todo-app',
    storageBucket: '',
    messagingSenderId: '765642933866',
  };
  firebase.initializeApp(config);
  database = firebase.database();
};

// retrieve from firebase
// return promise object
export const getSectionsDB = () => database.ref('/').once('value');

// get specified section
export const getTodoDB = sectionId => database.ref(`/${sectionId}`).once('value');

// Create a section
export const addSection = (name) => {
  const dbRef = database.ref('/').push().key;
  const key = dbRef.toString();
  const model = sectionModel(key, name, firebase.database.ServerValue.TIMESTAMP);

  return database.ref(`/${key}`).set(model);
};

// Add new todo item into specified section
export const addTodoItem = (id, name) => new Promise((resolve, reject) => {
  database.ref(`/${id}`).once('value').then((todo) => {
    const todos = todo.val().todos || [];
    const dbRef = database.ref(`/${id}`).push().key;
    const key = dbRef.toString();

    todos.push(todoModel(key, name, firebase.database.ServerValue.TIMESTAMP));
    database.ref(`/${id}/todos`).set(todos)
      .then((res) => { resolve(res); })
      .catch((error) => { reject(error); });
  });
});
