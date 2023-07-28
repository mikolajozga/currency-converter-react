import React from "react";
import Form from "./Form";
import Container from "./Container";
import Header from "./Header";


function App() {
  return (
    <Container>
      <Header title="Przelicz PLN na daną walutę!" />
      <Form />
    </Container>
  );
};

export default App;
