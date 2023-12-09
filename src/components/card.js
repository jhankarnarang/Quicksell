const Card = (props) => {
    const ticket = props.ticket;
    return (
        <div className="card">
            <div className="id">
                <span>{ticket.id}</span>
                <img src="user.png" alt="user" style={{display: props.userImgDisplayValue}}/>
            </div>
            <div className="title">
                {props.status==="In progress" && <img src="inprogress.png" alt="inprogress"/>}
                {props.status==="Todo" && <img src="todo.png" alt="todo"/>}
                {props.status==="Backlog" && <img src="urgent.png" alt="backlog"/>}
                {props.status==="Done" && <img src="done.png" alt="done"/>}
                {props.status==="Canceled" && <img src="canceled.png" alt="canceled"/>}
                <p>{ticket.title}</p>
            </div>
            <div className="tag">
                {props.priorityImage===4 && <img src="exclamation.svg" alt="exclamation" className="exclamation" style={{display: props.priorityImgDisplayValue}}/>}
                {props.priorityImage===3 && <img src="high.png" alt="exclamation" className="exclamation" style={{display: props.priorityImgDisplayValue}}/>}
                {props.priorityImage===2 && <img src="medium.png" alt="exclamation" className="exclamation" style={{display: props.priorityImgDisplayValue}}/>}
                {props.priorityImage===1 && <img src="low.png" alt="exclamation" className="exclamation" style={{display: props.priorityImgDisplayValue}}/>}
                {props.priorityImage===0 && <img src="threedots.png" alt="exclamation" className="exclamation" style={{display: props.priorityImgDisplayValue}}/>}
                <span><img src="graydot.svg" alt="graydot" />{ticket.tag[0]}</span>
            </div>
        </div>
    )
}

export default Card;