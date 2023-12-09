import Card from "./card";

const Status = (props) => {
    const statuses = [{"id":0,"title":"Backlog","image":"urgent.png"},{"id":1,"title":"Todo","image":"todo.png"},{"id":2,"title":"In progress","image":"inprogress.png"},{"id":3,"title":"Done","image":"done.png"},{"id":4,"title":"Canceled","image":"canceled.png"}];
    const tickets = props.tickets;
    var statusTickets = {};
    statuses.map((status)=>(statusTickets[status.title] = []))
    tickets.map((ticket)=>(statusTickets[ticket.status].push(ticket)))
    if (props.sortPriority) {
        statuses.map((status)=>(statusTickets[status.title].sort((a,b)=>b.priority-a.priority)))
    }
    if (props.sortTitle) {
        statuses.map((status)=>(statusTickets[status.title].sort((a,b)=>a.title>b.title ? 1:-1)))
    }
    return(
        <div className="usercards">
            {statuses.map((status)=>(
            <div className="user">
                <div className="userheader">
                    <div className="left">
                        <img src={status.image} alt="statusimg" id="userimg" />
                        <span>{status.title}</span>
                        <span className="numtasks">{statusTickets[status.title].length}</span>
                    </div>
                    <div className="right">
                        <img src="plus.svg" alt="plus" id="plus"/>
                        <img src="threedots.png" alt="options" id="threedots"/>
                    </div>
                </div>
                {statusTickets[status.title].map((ticket)=>(
                    <Card ticket={ticket} userImgDisplayValue={'block'} priorityImgDisplayValue={'block'} priorityImage={ticket.priority}/>
                ))}
            </div>
            ))}
        </div>
    )
}

export default Status;