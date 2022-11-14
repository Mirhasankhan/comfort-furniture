import React from 'react';
import logo from '../../../Images/logo-1.png';
import './Login.css';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../Firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const handleGoogleSignIn = () => {

        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;                
                const user = result.user;  
                console.log(user)             
            }).catch((error) => {               
                const errorCode = error.code;
                const errorMessage = error.message;              
                const email = error.customData.email;                
                const credential = GoogleAuthProvider.credentialFromError(error);               
            });
    }
    return (
        <div>
            <div className="d-flex justify-content-center mt-5 pt-5">
                <div>
                    <img style={{ paddingTop: '10px', marginRight: '5px' }} src={logo} alt="" />
                </div>
                <div>
                    <h1>COMFORT <strong style={{ color: 'orange' }}>+</strong></h1>
                    <h5>FURNITURE COMPANY</h5>
                </div>
            </div>
            <div>
                <h3 style={{ marginTop: '50px' }}>Login With</h3>
                <button className="google-button" onClick={handleGoogleSignIn}>Countinue With Google</button>
                <p>Don't Have An Account?<a href="createAccount">Create An Account</a></p>
            </div>

        </div>
    );
};

export default Login;