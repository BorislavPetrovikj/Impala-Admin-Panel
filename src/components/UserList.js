import { useContext } from "react";
import { UsersContext } from "../context/usersContext";
import { Link } from "react-router-dom";
const UserList = () => {
  const { users, deleteUsers } = useContext(UsersContext);

  return (
    <div>
      <h3>These are the users</h3>
      <Link to="/AddUser">
        <button>Add user</button>
      </Link>
      {users.map((user) => (
        <div key={user.id}>
          <p> Name: {user.name}</p>
          <p> username: {user.username}</p>
          <p> Email: {user.email}</p>
          <button onClick={() => deleteUsers(user)}>Delete</button>
          <Link to={`/EditUser/${user.id}`}>
            <button>Edit</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UserList;
