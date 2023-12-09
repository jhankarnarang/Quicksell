import Card from "./card";

const Priority = (props) => {
    const priorities = [{"id":4,"title":"Urgent","image":"urgent.png"},{"id":3,"title":"High","image":"high.png"},{"id":2,"title":"Medium","image":"medium.png"},{"id":1,"title":"Low","image":"low.png"},{"id":0,"title":"No priority","image":"threedots.png"}];
    const tickets = props.tickets;
    var priorityTickets = {4:[],3:[],2:[],1:[],0:[]};
    tickets.map((ticket)=>(priorityTickets[ticket.priority].push(ticket)))
    if (props.sortTitle) {
        priorities.map((priority)=>(priorityTickets[priority.id].sort((a,b)=>a.title>b.title ? 1:-1)))
    }
    return(
        <div className="usercards">
            {priorities.map((priority)=>(
            <div className="user">
                <div className="userheader">
                    <div className="left">
                        <img src={priority.image} alt="priorityimg" id="userimg" />
                        <span>{priority.title}</span>
                        <span className="numtasks">{priorityTickets[priority.id].length}</span>
                    </div>
                    <div className="right">
                        <img src="plus.svg" alt="plus" id="plus"/>
                        <img src="threedots.png" alt="options" id="threedots"/>
                    </div>
                </div>
                {priorityTickets[priority.id].map((ticket)=>(
                    <Card ticket={ticket} userImgDisplayValue={'block'} priorityImgDisplayValue={'none'} status={ticket.status}/>
                ))}
            </div>
            ))}
        </div>
    )
}

export default Priority;