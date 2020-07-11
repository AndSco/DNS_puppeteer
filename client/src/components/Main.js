import React from "react";
import { Switch, Route } from "react-router-dom";
import DnsGenerator from "../pages/DnsGenerator";
import NewsletterPage from "../pages/Newsletter";

const Main = props => {
  
  return (
    <Switch>
      <Route exact path="/" component={DnsGenerator} />
      <Route exact path="/dns" component={DnsGenerator} />
      <Route exact path="/newsletter" component={NewsletterPage} />
    </Switch>
  );
};

export default Main;
