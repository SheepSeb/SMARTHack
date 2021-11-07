import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup,createUserWithEmailAndPassword  } from '@firebase/auth';
import { auth, provider } from './firebase';
import { isAuth, userEmail, userName } from './store';

export function loginned(){
    const res = signInWithPopup(auth, provider)
        .then((result) =>{
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user_login = result.user;
            let payload = user_login.photoURL;
            payload = payload.replace("https://lh3.googleusercontent.com/","");
            userName.set(user_login.displayName);
            userEmail.set(user_login.email);
            isAuth.set(true);
        })
}

export function logginWithEmail(email, password){
    const res = signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            userEmail.set(user.email);
            isAuth.set(true);
        })
}

export function createAccount(email,password){
    const res = createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user = userCredential.user;
            userEmail.set(user.email);
            isAuth.set(true);
        }).catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			const credential = GoogleAuthProvider.credentialFromError(error);
            alert(errorMessage)
		});
}