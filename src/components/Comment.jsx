function Comment({avatar, name, date, text}){
    return(
        <div className="ui comments">
        <div className="comment">
            <a className="avatar">
                <img src={avatar} />
            </a>
            <div className="content">
                <a className="author">{name}</a>
                <div className="metadata">
                    <span className="date">{date}</span>
                </div>
                <div className="text">
                    {text}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Comment;