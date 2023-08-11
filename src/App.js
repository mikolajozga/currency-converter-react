import React, { useState } from "react";
import Form from "./Form";
import Container from "./Container";
import Header from "./Header";
import { currencies } from "./Form/currencies";


function App() {

  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ name }) => name === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <>
      <Header title="Kalkulator walut" />
      <Container>
        <Form
          result={result}
          calculateResult={calculateResult}
        />
      </Container>
    </>
  );
};

export default App;