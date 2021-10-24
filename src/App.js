import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home Comp/home";
import HandleLogin from "./Components/Login Comp/login";
import Register from "./Components/RegisterComp/Register";
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
            </Switch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
