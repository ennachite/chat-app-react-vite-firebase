import {useEffect, useRef, useState} from "react";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore"
import Message from "./Message.jsx";
import {db} from "../config/firebase.js";
import SendMessage from "./SendMessage.jsx";

const Chat = () => {
    const [messages, setMessages] = useState([])
    const scroll = useRef()

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = []
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id})
            })
            setMessages(messages)
        })

        return () => unsubscribe()
    }, [])

    return (
        <>
            <main className="flex flex-col p-[10px] relative">
                {/*Chat message Component*/}
                {messages && messages.map((message) => (
                    <Message key={message.id} message={message}/>
                ))}
            </main>
            {/*Send message component*/}
            <SendMessage scroll={scroll}/>
            <span ref={scroll}></span>
        </>
    )
}

export default Chat