import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Attendance from "./Components/AttendanceComp/Attendance";
import HandleLogin from "./Components/Login Comp/login";
import Home from "./Components/Home Comp/home";
import HomeAdmin from "./Components/AdminComp/HomeAdmin";
import Register from "./Components/RegisterComp/Register";
import RegisteredUsers from "./Components/RegisteredUsersComp/RegisteredUsers";
import ViewAttendance from "./Components/AttendanceComp/ViewAttendance";
import adminlogin from "./Components/Login Comp/Admin Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact component={HandleLogin} />

          <Route path="/">
            {/* <Loader/>
						<CustomNavbar /> */}
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/register/:id?" exact component={Register}></Route>
              <Route
                path="/markattendance/:id"
                exact
                component={Attendance}
              ></Route>
              <Route path="/adminlogin" exact component={adminlogin}></Route>
              <Route path="/adminhome" exact component={HomeAdmin}></Route>
              <Route
                path="/showattendance/:id?"
                exact
                component={ViewAttendance}
              ></Route>
              <Route
                path="/registeredUsers/:id?"
                exact
                component={RegisteredUsers}
              />
            </Switch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
