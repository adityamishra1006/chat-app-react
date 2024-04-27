import "./chat.css";
import EmojiPicker from  "emoji-picker-react";
import { useState } from "react";

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

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
                <div className="message">
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <p>
                            Hii, How are you?<br/>
                            I hope you are good... 
                        </p>
                        <span>1 mins ago</span>
                    </div>
                </div>


                <div className="message own">
                    <div className="texts">
                        <p>
                            Hii, How are you?<br/>
                            I hope you are good... 
                        </p>
                        <span>1 mins ago</span>
                    </div>
                </div>

                <div className="message">
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <p>
                            Hii, How are you?<br/>
                            I hope you are good... 
                        </p>
                        <span>1 mins ago</span>
                    </div>
                </div>


                <div className="message own">
                    <div className="texts">
                    <img src="https://thumbs.dreamstime.com/z/panda-say-hii-cartoon-illustration-hi-white-background-57173885.jpg" />
                        <p>
                            Hii, How are you?<br/>
                            I hope you are good... 
                        </p>
                        <span>1 mins ago</span>
                    </div>
                </div>

                <div className="message">
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <p>
                            Hii, How are you?<br/>
                            I hope you are good... 
                        </p>
                        <span>1 mins ago</span>
                    </div>
                </div>


                <div className="message own">
                    <div className="texts">
                        <p>
                            Hii, How are you?<br/>
                            I hope you are good... 
                        </p>
                        <span>1 mins ago</span>
                    </div>
                </div>

                <div className="message">
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <p>
                            Hii, How are you?<br/>
                            I hope you are good... 
                        </p>
                        <span>1 mins ago</span>
                    </div>
                </div>


                <div className="message own">
                    <div className="texts">
                        <p>
                            Hii, How are you?<br/>
                            I hope you are good... 
                        </p>
                        <span>1 mins ago</span>
                    </div>
                </div>
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