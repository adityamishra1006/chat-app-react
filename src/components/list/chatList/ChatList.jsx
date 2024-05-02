import { useState } from "react";
import "./chatlist.css";
import AddUser from "./addUser/Adduser";

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
    return(
        <div className="chatList">
            <div className="search" >
                <div className="searchBar">
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder="Search"/>
                </div>
                <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className="add" 
                onClick={() => setAddMode((prev) => !prev)}/>
            </div>


            {/* List of chats  */}
            {/* 1st */}
            <div className="item">
                <img src="./avatar.png"  alt=""/>
                <div className="texts">
                    <span>Ayush</span>
                    <p>Hello</p>
                </div>
            </div>

            {/* 2nd */}
            <div className="item">
                <img src="./avatar.png"  alt=""/>
                <div className="texts">
                    <span>Ayush</span>
                    <p>Hello</p>
                </div>
            </div>

            {/* 3rd */}
            <div className="item">
                <img src="./avatar.png"  alt=""/>
                <div className="texts">
                    <span>Ayush</span>
                    <p>Hello</p>
                </div>
            </div>

            {/* 4th */}
            <div className="item">
                <img src="./avatar.png"  alt=""/>
                <div className="texts">
                    <span>Ayush</span>
                    <p>Hello</p>
                </div>
            </div>

            {/* 5th */}
            <div className="item">
                <img src="./avatar.png"  alt=""/>
                <div className="texts">
                    <span>Ayush</span>
                    <p>Hello</p>
                </div>
            </div>

            {/* 5th */}
            <div className="item">
                <img src="./avatar.png"  alt=""/>
                <div className="texts">
                    <span>Ayush</span>
                    <p>Hello</p>
                </div>
            </div>
            {addMode && <AddUser />}
        </div>
    );
};

export default ChatList