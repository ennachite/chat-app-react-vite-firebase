import {auth} from "../config/firebase.js";

const LogOut = () => {
    const signOut = () => {
        signOut(auth)
    }

    return (
        <button onClick={() => auth.signOut()} className="bg-gray-200 px-4 py-2 hover:bg-gray-100 rounded">
            Logout
        </button>
    )
}

export default LogOut