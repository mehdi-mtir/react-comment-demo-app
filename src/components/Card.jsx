function Card(props){
    return(
        <div className="card">
            <div className="content">
                {props.children}
            </div>
            <div className="extra content">
            {
                (!props.isApprouved) && <div className="ui two buttons">
                    <div className="ui basic green button" onClick={()=>props.approveCommentHandler(props.id)}>Approve</div>
                    <div className="ui basic red button" onClick={()=>props.declineCommentHandler(props.id)}>Decline</div>
                </div>
            }
            </div>
        </div>
    )
}

export default Card;