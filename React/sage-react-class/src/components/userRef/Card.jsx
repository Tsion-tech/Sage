import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
    <Card/>
      {users.map((user, index) => (
        <div key={index}>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
 