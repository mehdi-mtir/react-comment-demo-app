function Comment(){
    return(
        <div className="comment">
            <a className="avatar">
                <img src="https://semantic-ui.com/images/avatar/small/matt.jpg" />
            </a>
            <div className="content">
                <a className="author">Matt</a>
                <div className="metadata">
                    <span className="date">Today at 5:42PM</span>
                </div>
                <div className="text">
                    How artistic!
                </div>
            </div>
        </div>
    )
}

export default Comment;