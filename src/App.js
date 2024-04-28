import React from "react"
import {Container} from "react-bootstrap"

import CardContainer from "./components/cards/CardContainer";
import Header from "./components/header/Header";

function App() {
  return (
    <Container className="text-center mt-4">
    <Header/>
    <CardContainer/>

    </Container>
  );
}

export default App;
