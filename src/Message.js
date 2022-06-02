import React, {useEffect, useState} from "react";
import App from "./App";


function MessageList() {
    const [msg, setMsg] = useState([{message: 'How are you?'}, {message: "Like me."}, {message: "Slaver."}]);

    const handleChangeText = (event) => {
        setMsg(msg.map((messages) => messages.message = event.target.value));
    }

    useEffect(() => {
        return () => {}
    }, [msg]);

    return msg.map((messages) => (
        <>
        <div>
            <App text={msg} />
            Message:
            <h1>{messages.message}</h1>
            <input type='text' value={messages.message} onChange={handleChangeText}/>
        </div>
        </>
    ))
    }

export default MessageList;