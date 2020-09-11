import React from "react";
import "./App.css";
// import Counter from "./Counter/Counter";
// import ListOperations from "./ListOperations/ListOperations";
// import Fruits from "./Redux/Fruits";
// import Flowers from "./Redux2/Flowers";
import About from "./Routing/About.js";
import Shop from "./Routing/Shop.js";
import Nav from "./Routing/Nav.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetails from "./Routing/ItemDetails.js";

function App() {
  return (
    // <div>
    //   {/* <Counter /> */}
    //   {/* <ListOperations /> */}
    //   {/* <Fruits /> */}
    //   {/* <Flowers /> */}
    // </div>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetails} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div className="homePage">
      <h1>Home page</h1>
    </div>
  );
};

export default App;
