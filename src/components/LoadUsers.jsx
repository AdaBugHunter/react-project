import { useEffect, useState } from 'react';

function LoadUsers() {
  const dummyUsers = [
    { id: 1, name: 'Areeba' },
    { id: 2, name: 'Daud' },
    { id: 3, name: 'Sara' },
  ];

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Loading users...');
    const id = setTimeout(() => {
      setUsers(dummyUsers);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(id);
  }, []);

  const clearUsers = () => {
    setUsers([]);
    setLoading(true);
  };

  return (
    <div>
      <h2>Load Users</h2>
      <button onClick={clearUsers}>Clear Users</button>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LoadUsers;
