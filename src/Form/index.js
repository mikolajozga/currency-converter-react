import "./style.css";

const Form = (props) => (
    <form className="form">
        <fieldset className="form__fieldset">
            <p>
                <label>
                    <div className="form__container">
                        <span className="form__labelText">
                            Wybierz walutę:
                        </span>
                        <select className="form__select">
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
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
                        <input className="form__field" type="number" step="0.01" required
                            placeholder="Ilość w PLN" />
                    </div>
                </label>
            </p>
            <p className="result">
                0.00
            </p>
            <button className="form__button">Przelicz!</button>
        </fieldset>
    </form>
);

export default Form;