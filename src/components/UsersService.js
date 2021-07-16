// Get users

export function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users/").then(
    (response) => {
      return response
        .json()
        .then((data) => {
          // console.log(data);
          return data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  );
}

// Create user

export function postUser(newUser) {
  fetch("https://jsonplaceholder.typicode.com/users/", {
    method: "POST",
    body: JSON.stringify({
      name: `${newUser.name}`,
      username: `${newUser.username}`,
      email: `${newUser.email}`,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// Edit users

export function putUser(editUser) {
  fetch(`https://jsonplaceholder.typicode.com/users/${editUser.id}`, {
    method: "PUT",
    body: JSON.stringify({
      name: `${editUser.name}`,
      username: `${editUser.username}`,
      email: `${editUser.email}`,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// Delete user

export function deleteUser(user) {
  console.log(user);
  fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
    method: "DELETE",
  }).then((json) => console.log(json));
}
