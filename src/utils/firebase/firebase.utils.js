// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, 
         //signInWithRedirect, 
         signInWithPopup, 
         signInWithEmailAndPassword,
         GoogleAuthProvider, 
         createUserWithEmailAndPassword,
         signOut,
         onAuthStateChanged,
         
        } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgw07jOcT4Uer8vGlCL1hkOAmGbJTJ5lo",
  authDomain: "chocoholic-treats.firebaseapp.com",
  projectId: "chocoholic-treats",
  storageBucket: "chocoholic-treats.appspot.com",
  messagingSenderId: "313391483846",
  appId: "1:313391483846:web:e6b7ded5bbe22eb85a40c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt:"select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = async() => {
  const res = await signInWithPopup(auth, provider);
 return res;
};
/* SIGN IN WITH GOOGLE REDIRECT WORKING WELL
export const signInWithGoogleRedirect = async() => {
  const res = signInWithRedirect(auth, provider);
  return res;
}; */
export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log('done');
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
}

// additional information for the case I don't get the displayName
export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  //console.log(userSnapshot);
  //console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        // I spread additionalInformation
        ...additionalInformation
      });
    } catch (error) {
      console.log('Error, creating new user', error);
    }
  }
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async ( email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async ( email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback )
}