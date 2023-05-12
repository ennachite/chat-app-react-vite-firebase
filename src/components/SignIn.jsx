import GoogleButton from "react-google-button";
import {auth} from "../config/firebase.js";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth"

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
}

const SignIn = () => {
    return (
        <div className="flex justify-center">
            <GoogleButton onClick={googleSignIn}/>
        </div>
    )
}

export default SignIn