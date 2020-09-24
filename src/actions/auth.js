import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {    // starts the log in process
    return () => { // async action
        // to start the process of auth. 
        return firebase.auth().signInWithPopup(googleAuthProvider);  // to return the promise chain allowing others to attach onto it
    }
}

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => { 
        return firebase.auth().signOut();  // to continue the promise chain
    };
};