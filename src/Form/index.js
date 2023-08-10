import React, { useState } from "react";
import { currencies } from "./currencies";
import "./style.css";
import { Result } from "./Result";

const Form = ({ calculateResult, result }) => {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[3].name);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <p>
                    <label>
                        <div className="form__container">
                            <span className="form__labelText">
                                Wybierz walutę:
                            </span>
                            <select
                                className="form__select"
                                value={currency}
                                onChange={({ target }) => setCurrency(target)}
                            >
                                {currencies.map((currency => (
                                    <option 
                                    key={currency.name}
                                    value={currency.name}
                                    >
                                        {currency.name}
                                    </option>
                                )))}
                            </select>
                        </div>
                    </label>
                </p>
                <p>
                    <label>
                        <div className="form__container">
                            <span className="form__labelText">
                                Wpisz ilość (w PLN)*:
                            </span>
                            <input
                                className="form__field"
                                type="number"
                                step="0.01"
                                required
                                placeholder="Ilość w PLN"
                                value={amount}
                                onChange={({ target }) => setAmount(target.value)}
                            />
                        </div>
                    </label>
                </p>

                <Result result={result}/>

                <button className="form__button">Przelicz!</button>
            </fieldset>
        </form>
    )
};

export default Form;