import React from "react";
import "./App.css";
import HomePage from "./Pages/Homepage/homepage.component";
import { Switch, Route } from 'react-router-dom';
import ShopPage from "./Pages/Shop/shop.component";
import Header from "./Components/Header/header.component";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path={"/"} component={HomePage}/>
          <Route path={"/shop"} component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
