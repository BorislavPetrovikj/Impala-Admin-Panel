import React, { createContext, useState, useEffect } from "react";
import { getUsers } from "../components/UsersService";
import { postUser } from "../components/UsersService";
import { deleteUser } from "../components/UsersService";
import { putUser } from "../components/UsersService";
const Context = createContext({});

const UsersContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  // console.log(users);

  // console.log(getUsers)

  // Get Users

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  // Create user

  const addNewUser = (name, username, email) => {
    const newUser = {
      id: users.length + 1,
      name,
      username,
      email,
    };

    postUser(newUser);
    setUsers([...users, newUser]);
  };

  // Delete user

  const deleteUsers = (user) => {
    let currentUsers = users.filter((u) => u.id !== user.id);
    deleteUser(user);
    // console.log(user);
    setUsers(currentUsers);
  };

  const getUserByID = (id) => {
    let editedUser = users.filter((u) => u.id == id);

    if (editedUser.length > 0) {
      return editedUser[0];
    } else {
      return null;
    }
  };
  const editUser = (id, name, username, email) => {
    const editUser = {
      id,
      name,
      username,
      email,
    };

    let clonedUsers = [...users];
    var findedUser = clonedUsers.find((x) => x.id == id);

    findedUser.name = editUser.name;
    findedUser.username = editUser.username;
    findedUser.email = editUser.email;

    setUsers(clonedUsers);

    putUser(editUser);
  };

  const userContext = {
    users,
    addNewUser,
    deleteUsers,
    getUserByID,
    editUser,
  };

  return (
    <Context.Provider value={userContext}>{props.children}</Context.Provider>
  );
};

export default UsersContextProvider;

export const UsersContext = Context;
