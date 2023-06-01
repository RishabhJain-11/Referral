import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAoTkIYezA7agRUrR9ulyCb9TcscNftts",
    authDomain: "jobersauth.firebaseapp.com",
    projectId: "jobersauth",
    storageBucket: "jobersauth.appspot.com",
    messagingSenderId: "826554316923",
    appId: "1:826554316923:web:44e96f400f80eb42cccade",
    measurementId: "G-7MR7K1Q87G"
};

firebase.initializeApp(firebaseConfig);

export default firebase;