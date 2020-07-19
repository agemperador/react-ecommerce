import firebase from 'firebase/app'

import 'firebase/firestore';
import 'firebase/auth'



const config = {
    apiKey: "process.env.FIREBASE_API_KEY",
    authDomain: "curso-ecommerce-react.firebaseapp.com",
    databaseURL: "https://curso-ecommerce-react.firebaseio.com",
    projectId: "curso-ecommerce-react",
    storageBucket: "curso-ecommerce-react.appspot.com",
    messagingSenderId: "423561943690",
    appId: "process.env.FIREBASE_APP_ID"
};

console.log(process.env);



export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;