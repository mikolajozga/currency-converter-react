import "./style.css";

const Form = (props) => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kantor</legend>
            <p>
                <label>
                    <span className="form__labelText">
                        Wybierz walutę:
                    </span>
                    <select className="form__select">
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                    </select>
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">
                        Wpisz ilość (w PLN)*:
                    </span>
                    <input className="form__field" type="number" step="0.01" required
                        placeholder="Ilość w PLN" />
                </label>
            </p>
            <p className="result">

            </p>
        </fieldset>
        <button className="form__button">Przelicz!</button>
    </form>
);

export default Form;