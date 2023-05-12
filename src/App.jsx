import {Navbar} from "./components/Navbar.jsx"
import {auth} from "./config/firebase.js";
import {useAuthState} from "react-firebase-hooks/auth";
import Chat from "./components/Chat.jsx";

function App() {
    const [user] = useAuthState(auth)
    // console.log(user)

    return (
        <div className="max-w-[720px] mx-auto text-center">
            <section className="flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative">
                <Navbar/>
                {user ? <Chat/> : null}
            </section>
        </div>
    )
}

export default App
