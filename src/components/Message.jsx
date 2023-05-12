import {auth} from "../config/firebase.js";

const Message = ({message}) => {
    const messageClass = message.uid === auth.currentUser.uid
        ? `bg-blue-500 text-white flex-row-reverse float-right text-end rounded-bl-full`
        : `bg-gray-300 text-black float-left rounded-br-full`

    return (
        <div>
            <div
                className={`flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full ${messageClass}`}>
                <p className="absolute mt-[-4rem] text-gray-600 text-xs">{message.name}</p>
                <p>{message.text}</p>
            </div>
        </div>
    )
}

export default Message