import "./chat.css";
import EmojiPicker from  "emoji-picker-react";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";

const Chat = () => {
    const [chat, setChat] = useState();
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const {chatId} = useChatStore();

    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    },[chatId])

    useEffect(()=>{
        const unSub = onSnapshot(doc(db, "chats", chatId), (res) =>{
            setChat(res.data())
        })

        return () =>{
            unSub();
        };

    }, []);

    

    const handleEmoji = e =>{
        setText((prev) => prev + e.emoji);
        setOpen(false);
    }
    console.log(text);
    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" />
                    <div className="texts">
                        <span>Ayush</span>
                        <p>"Focus, achieve, repeat"</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" />
                    <img src="./video.png" />
                    <img src="./info.png" />
                </div>
            </div>
            {/* Center */}
            <div className="center">
                {chat?.messages?.map((message) =>(

                <div className="message own" key={message?.createdAt}>
                    <div className="texts">
                    {message.img &&
                        <img src={message.img} alt=""/>}
                        <p>
                            {message.text}
                        </p>
                        <span>1 mins ago</span>
                    </div>
                </div>
                ))}
                <div ref={endRef}></div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="img.png" />
                    <img src="camera.png" />
                    <img src="mic.png" />
                </div>
                <input type="text"
                placeholder="Type a message..." 
                value={text}  
                onChange={(e) => setText(e.target.value)}/>
                <div className="emoji">
                    <img src="./emoji.png" 
                    onClick={()=> setOpen((prev) => !prev)} />
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                    </div> 
                </div>
                <button className="sendButton" >Send</button>
            </div>
        </div>
    )
}

export default Chat;