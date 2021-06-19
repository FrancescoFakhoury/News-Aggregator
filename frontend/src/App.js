import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyles from "./components/GlobalStyles";
import ListingGrid from "./components/ListingGrid";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <ListingGrid />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
