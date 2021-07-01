import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyles from "./components/GlobalStyles";
import ListingGrid from "./components/ListingGrid";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
    <Wrapper>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <ListingGrid />
        </Route>
      </Switch>
      <Footer />
      </Wrapper>
    </BrowserRouter>
  );
};

const Wrapper = styled.div`
display: flex;
flex-direction:column;
width: 100%;
height: 100%;
`
export default App;
