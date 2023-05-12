import {auth} from "../config/firebase.js"
import {useAuthState} from "react-firebase-hooks/auth";
import SignIn from "./SignIn.jsx";
import LogOut from "./LogOut.jsx";

export const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    return (
        <div className="bg-gray-800 h-20 flex justify-between items-center p-4">
            <h1 className="text-white text-3xl">Group Chat App</h1>
            {user ? <LogOut/> : <SignIn/>}
        </div>
    )
}