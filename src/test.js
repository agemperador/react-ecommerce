import firebase from 'firebase/firebase-app';
import 'firebase/firestore';

const firestore = firebase.firebase();

firebase.collection('user').doc('id especial').collection('cartItems').doc('otro id especial');

firestore.doc('/user/idespecial/cartItems/idespecial')
firestore.collection('/user/idespecial/cartItems')