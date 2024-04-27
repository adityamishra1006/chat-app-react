import "./details.css"; 

const Details = () => {
    return (
        <div className="details">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Ayush</h2>
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
                <button>Block User</button>
                <button className="logout">Log Out</button>

            </div>
        </div>
    )
}

export default Details