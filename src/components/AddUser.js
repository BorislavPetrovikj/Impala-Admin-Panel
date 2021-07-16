import { useContext, useState } from "react";
import { UsersContext } from "../context/usersContext";
import { Link } from "react-router-dom";
const AddUser = () => {
  const [name, setName] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const { addNewUser } = useContext(UsersContext);

  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <input
        placeholder="Surname"
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
        <button onClick={() => addNewUser(name, username, email)}>
          Submit
        </button>
        <button>Cancel</button>
      </Link>
    </div>
  );
};

export default AddUser;
