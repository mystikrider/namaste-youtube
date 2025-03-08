import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/store/chatSlice";
import { generateRandomMessage, generateRandomNames } from "../utils/helper";

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();
    const chatMmessages = useSelector((store) => store.chat.message)
    

    useEffect(() => {
        const int = setInterval(() => {
            //console.log("API Polling every 2 sec");

            dispatch(addMessage({
                name: generateRandomNames(),
                text: generateRandomMessage(20) + " 😘"
            }))
        }, 1000)

        return () => clearInterval(int)
    }, [])

    return (
        <>
        <div className="h-[600px] border bg-slate-100 p-3 overflow-y-scroll flex flex-col">
            {chatMmessages?.map((message, index) => <ChatMessage key={index} name={message?.name} message={message?.text} />)}
            
            
        </div>
        <form className="border bg-slate-50 p-3 mt-3 flex" onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessage({
                name: "MYSTIC RIDER",
                text: liveMessage
            }))
            setLiveMessage("")
        }}>
            <input className="border p-2 flex-1" type="text" value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
            <button className="border p-2 bg-green-600 text-white" type="submit">Send</button>
        </form>
        </>
    )
}

export default LiveChat;