import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyD_rfB0LlhfSYA_67aWNu9heMt28ZRocoE",
        authDomain: "crown-clothing-a6e47.firebaseapp.com",
        databaseURL: "https://crown-clothing-a6e47.firebaseio.com",
        projectId: "crown-clothing-a6e47",
        storageBucket: "crown-clothing-a6e47.appspot.com",
        messagingSenderId: "65798383513",
        appId: "1:65798383513:web:b430c910f825ef5776d508",
        measurementId: "G-QXMTJYEQ6T"
      
};


firebase.initializeApp(config);

export const createUserProfileDocument= async(userAuth, additionalData) => {
        if (!userAuth) return; 
        
        const userRef= firestore.doc(`users/${userAuth.uid}`);

        const snapShot=await userRef.get();

        if (!snapShot.exists){
                const {displayName, email}= userAuth;
                const createdAt= new Date();

                try{
                        await userRef.set(
                                {
                                        displayName,
                                        email, createdAt,
                                        ...additionalData
                                }
                        );
                }
                catch(error){
                        console.log('error creating user', error.message);
                }
        }return userRef;
        
};


export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle= () => auth.signInWithPopup(provider);

export default firebase;