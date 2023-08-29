import React, { useState } from "react";
import Form from "./Form";
import Container from "./Container";
import Header from "./Header";
import { currencies } from "./Form/currencies";
import { Clock } from "./Clock";


function App() {

  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ name }) => name === currency).rate;

    if (amount <= 0) {
      return false;
    }
    
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
        <Clock />
        <Form
          result={result}
          calculateResult={calculateResult}
        />
      </Container>
    </>
  );
};

export default App;
