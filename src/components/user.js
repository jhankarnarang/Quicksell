import Card from "./card";

const getInitials = (name) => {
  const nameArray = name.split(" ");
  return nameArray.map((word) => word[0]).join("").toUpperCase();
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const User = (props) => {
  const users = props.users;
  const tickets = props.tickets;
  var userTickets = {};
  users.map((user) => (userTickets[user.id] = []));
  tickets.map((ticket) => userTickets[ticket.userId].push(ticket));
  if (props.sortPriority) {
    users.map((user) => userTickets[user.id].sort((a, b) => b.priority - a.priority));
  }
  if (props.sortTitle) {
    users.map((user) => userTickets[user.id].sort((a, b) => (a.title > b.title ? 1 : -1)));
  }

  return (
    <div className="usercards">
      {users.map((user) => (
        <div className="user" key={user.id}>
          <div className="userheader">
            <div className="left">
              <div className="user-image-container" style={{ backgroundColor: getRandomColor() }}>
                <div className={`user-status ${user.available ? "true" : "false"}`}></div>
                <div className="user-initials">{getInitials(user.name)}</div>
              </div>

            </div>
            <div className="right">
              <img src="plus.svg" alt="plus" id="plus" />
              <img src="threedots.png" alt="options" id="threedots" />
            </div>
          </div>
          {userTickets[user.id].map((ticket) => (
            <Card
              key={ticket.id}
              ticket={ticket}
              userImgDisplayValue={"None"}
              priorityImgDisplayValue={"block"}
              priorityImage={ticket.priority}
              status={ticket.status}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default User;
