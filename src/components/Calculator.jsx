import { useState } from "react";
import './Calculator.css';

function Calculator() {
    const [value, setValue] = useState('');

    const handleClick = (e) => {
        if (value === "Infinity") {
            setValue(e.target.value);
        } else {
            setValue(value + e.target.value);
        }
    };

    const handleClear = () => {
        setValue('');
    };

    const handleDelete = () => {
        setValue(value.slice(0, -1));
    };

    const handleEqual = () => {
        try {
            const result = Function(`'use strict'; return (${value})`)();
            setValue(result.toString());
        } catch (error) {
            setValue('error');
            setTimeout(() => setValue(''), 1000);
        }
    };

    return (
        <div className="container">
            <h1>CALCULATOR</h1>
            <div className="calculator">
                <form action="">
                <div className="display">
                    <input type="text" value={value} readOnly />
                </div>
                <div>
                    <input type="button" value="AC" onClick={handleClear} />
                    <input type="button" value="DE" onClick={handleDelete} />
                    <input type="button" value="." onClick={handleClick} />
                    <input type="button" value="/" onClick={handleClick} />
                </div>
                <div>
                    <input type="button" value="7" onClick={handleClick} />
                    <input type="button" value="8" onClick={handleClick} />
                    <input type="button" value="9" onClick={handleClick} />
                    <input type="button" value="*" onClick={handleClick} />
                </div>
                <div>
                    <input type="button" value="4" onClick={handleClick} />
                    <input type="button" value="5" onClick={handleClick} />
                    <input type="button" value="6" onClick={handleClick} />
                    <input type="button" value="+" onClick={handleClick} />
                </div>
                <div>
                    <input type="button" value="1" onClick={handleClick} />
                    <input type="button" value="2" onClick={handleClick} />
                    <input type="button" value="3" onClick={handleClick} />
                    <input type="button" value="-" onClick={handleClick} />
                </div>
                <div>
                    <input type="button" value="00" onClick={handleClick} />
                    <input type="button" value="0" onClick={handleClick} />
                    <input type="button" value="=" className="equal" onClick={handleEqual} />
                </div>
                </form>
            </div>
        </div>
    );
}

export default Calculator;
