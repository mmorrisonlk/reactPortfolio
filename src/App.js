import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Saved from "./pages/Saved";
// import NoMatch from "./pages/NoMatch";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div>
          <Navbar />
          {/* <Switch>
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/" component={Home} />            
            <Route path="" component={NoMatch} />
          </Switch> */}
      </div>
    </Router>
  );
}

export default App;
