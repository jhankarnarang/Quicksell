import { useEffect, useState } from "react";
import User from './components/user';
import Priority from "./components/priority";
import Status from "./components/status";

function App() {
  const [displayValue, setDisplayValue] = useState('None');
  const [optionValue, setOptionValue] = useState("status");
  const [orderingValue, setOrderingValue] = useState("priority");

  const handleGroupingChange = (selectedOption) => {
    setOptionValue(selectedOption.target.value);
    setDisplayValue('None');
    localStorage.setItem('optionValue', selectedOption.target.value);
  };

  const handleOrderingChange = (selectedOption) => {
    setOrderingValue(selectedOption.target.value);
    setDisplayValue('None');
    localStorage.setItem('orderingValue', selectedOption.target.value);
  };

  const handleClick = () => {
    if (displayValue === 'None') {
      setDisplayValue('block');
    } else {
      setDisplayValue('None');
    }
  }

  const [tickets, setTickets] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const savedOptionValue = localStorage.getItem('optionValue');
    const savedOrderingValue = localStorage.getItem('orderingValue');

    setOptionValue(savedOptionValue || "status");
    setOrderingValue(savedOrderingValue || "priority");

    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(res => res.json())
      .then(data => {
        setTickets(data.tickets);
        setUsers(data.users);
      });
  }, []);
  return (
    <div className="App">
      <nav className="navbar">
        <button type='button' className="button" id="display" onClick={() => handleClick()}>
          <img src="setting-lines.png" alt="icon" id="settings" />Display <img src="down-arrow.png" alt="icon" id="down" />
        </button>
        <div className="displayOptions" style={{ display: displayValue }}>
          <ul id="displayList">
            <li>
              <div className="grouping">
                Grouping
                <select name="grouping" id="grouping" onChange={handleGroupingChange} value={optionValue}>
                  <option value="status" label='Status'>Status</option>
                  <option value="user" label='User'>User</option>
                  <option value="priority" label='Priority'>Priority</option>
                </select>
              </div>
            </li>
            <li>
              <div className="ordering">
                Ordering
                <select name="ordering" id="ordering" onChange={handleOrderingChange} value={orderingValue}>
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </nav>
        {optionValue==="user" && orderingValue==="priority" && users && tickets && <User users={users} tickets={tickets} sortPriority={true}/>}
        {optionValue==="user" && orderingValue==="title" && users && tickets && <User users={users} tickets={tickets} sortTitle={true}/>}
        {optionValue==="priority" && orderingValue==="priority" && users && tickets && <Priority tickets={tickets}/>}
        {optionValue==="priority" && orderingValue==="title" && users && tickets && <Priority tickets={tickets} sortTitle={true}/>}
        {optionValue==="status" && orderingValue==="priority" && users && tickets && <Status tickets={tickets} sortPriority={true}/>}
        {optionValue==="status" && orderingValue==="title" && users && tickets && <Status tickets={tickets} sortTitle={true}/>}
    </div>
  );
}

export default App;
