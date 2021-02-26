import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA6jSUu224X1RSEknrZhMFeqS9R6Y6zpZc",
  authDomain: "slackclone-7cf10.firebaseapp.com",
  projectId: "slackclone-7cf10",
  storageBucket: "slackclone-7cf10.appspot.com",
  messagingSenderId: "61117607671",
  appId: "1:61117607671:web:ed13d80e813907ce28edf2",
};

 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();           // firestore is the real time database in firebase



 export default db;

