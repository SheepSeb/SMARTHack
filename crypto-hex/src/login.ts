import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { auth, provider } from './firebase';
import { isAuth } from './store';

export function loginned(){
    const res = signInWithPopup(auth, provider)
        .then((result) =>{
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user_login = result.user;
            isAuth.set(true);
        })
}