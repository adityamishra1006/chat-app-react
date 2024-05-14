import { auth, db } from "../../lib/firebase";
import "./details.css"; 
import {  useUserStore } from "../../lib/userStore";
import { useChatStore } from "../../lib/chatStore";
import { arrayRemove, arrayUnion, doc, updateDoc,  } from "firebase/firestore";

const Details = () => {

    const {chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock} = useChatStore();
    const {currentUser} = useUserStore();

    const handleBlock = async () => {
        if (!user) return;
    
        const userDocRef = doc(db, "users", currentUser.id);
    
        try {
          await updateDoc(userDocRef, {
            blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
          });
          changeBlock();
        } catch (err) {
          console.log(err);
        }
      };
    return (
        <div className="details">
            <div className="user">
                <img src={user?.avatar || "./avatar.png"} alt="" />
                <h2>{user?.username}</h2>
                <p>"Focus, achieve, repeat"</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Setting</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="./arrowDown.png" alt=""/>
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">   
                                <img 
                                src="https://thumbs.dreamstime.com/z/panda-say-hii-cartoon-illustration-hi-white-background-57173885.jpg"  alt=""/>
                                <span>IMG_2024_01.png</span> 
                            </div>
                            <img src="./download.png" className="icon" alt=""/>
                        </div>

                        <div className="photoItem">
                            <div className="photoDetail">   
                                <img 
                                src="https://thumbs.dreamstime.com/z/panda-say-hii-cartoon-illustration-hi-white-background-57173885.jpg"  alt=""/>
                                <span>IMG_2024_01.png</span> 
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>

                        
                    </div>
                </div>
                

                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                </div>
                <button onClick={handleBlock}>{
                    isCurrentUserBlocked ? "You are Blocked" : isReceiverBlocked ? "User Blocked" : "Block User"
                }</button>
                <button className="logout" onClick={()=>auth.signOut()}>Log Out</button>

            </div>
        </div>
    )
}

export default Details