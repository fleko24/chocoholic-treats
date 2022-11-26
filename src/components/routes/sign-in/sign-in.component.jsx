import React from 'react'
import { auth,
         signInWithGooglePopup, 
         createUserDocumentFromAuth,
         signInWithGoogleRedirect } from '../../../utils/firebase/firebase.utils';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../sign-up-form/sign-up-form.component'

const SignIn = () => {
 /* SIGN-IN WITH GOOGLE REDIRECT, WORKING GOOD!
    useEffect(() => {
    async function fetchData(){
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user)
      }
    }
    fetchData();
  }, []);
*/
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return( 
    <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>
            Sign In with Google Popup
        </button>
        <SignUpForm />
        {/*
        <button onClick={signInWithGoogleRedirect}>
            Sign In with Google Redirect
        </button>*/}
    </div>
  )
}

export default SignIn