import "./App.css";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import UserList from "./components/UserList";
import UsersContextProvider from "./context/usersContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <UsersContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <UserList />
            </Route>
            <Route path="/AddUser">
              <AddUser />
            </Route>
            <Route path="/EditUser/:id">
              <EditUser />
            </Route>
          </Switch>
        </Router>
      </UsersContextProvider>
    </div>
  );
}

export default App;
