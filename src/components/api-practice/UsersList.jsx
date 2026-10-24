import useUsers from '../../hooks/useUsers';

function UsersList() {
   
   const { users, loading, error } = useUsers();
    if(loading){
        return <p>Loading users...</p>
    }
    if(error){
        return <p role="alert">Error {error}</p>
    }

  return (
    <section>
        <h2>Users</h2>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>
                    {user.name} — {user.email}
                </li>
            ))}
        </ul>
    </section>
  )
}

export default UsersList