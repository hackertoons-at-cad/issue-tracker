import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Issue, Issues, Login, Signup } from "./pages";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Login} />
          <Route path="/issues" component={Issues} />
          <Route path="/issue" component={Issue} />
          <Route path="/register" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;