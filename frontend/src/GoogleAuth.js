import firebase from './firebaseConfig';
import React from 'react';

const GoogleAuth = () => {
    const handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                // Handle successful authentication
                console.log(result);
            })
            .catch((error) => {
                // Handle authentication error
                console.error(error);
            });
    };

    return (
        <button onClick={handleSignIn}>Sign in with Google</button>
    );
};

export default GoogleAuth;
