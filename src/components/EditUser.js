import { useContext, useState, useEffect } from "react";
import { UsersContext } from "../context/usersContext";
import { Link, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const { getUserByID, editUser } = useContext(UsersContext);

  const { id } = useParams();

  useEffect(() => {
    const user = getUserByID(id);

    setName(user.name);
    setusername(user.username);
    setemail(user.email);
  }, []);

  return (
    <div>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <input
        placeholder="Username"
        value={username}
        type="text"
        onChange={(e) => setusername(e.target.value)}
      />
      <br></br>
      <input
        placeholder="Email"
        value={email}
        type="text"
        onChange={(e) => setemail(e.target.value)}
      />
      <br></br>
      <Link to="/">
        <button onClick={() => editUser(id, name, username, email)}>
          Submit
        </button>
        <button>Cancel</button>
      </Link>
    </div>
  );
};

export default EditUser;
