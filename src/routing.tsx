import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Registration } from "./pages/registration";
import { Shiftcheck } from "./pages/shiftcheck";
import { Shiftregist } from "./pages/shiftregist";

export default class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/shiftcheck" component={Shiftcheck} />
        <Route path="/shiftregist" component={Shiftregist} />
      </BrowserRouter>
    );
  }
}