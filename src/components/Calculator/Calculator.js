import React, { useState, useRef, useEffect } from 'react';
import './Calculator.css'

const Calculator = () => {
    const [result, setResult] = useState("");
    const inputRef = useRef(null);
    useEffect(() => inputRef.current.focus());

    function handleClick(e) {
        setResult(result.concat(e.target.name));
    }

    function backspace(){
        setResult(result.slice(0, result.length - 1))
    }

    function clear() {
        setResult("")
    }

    function calculate() {
        try {
            // eslint-disable-next-line no-eval
            setResult(eval(result).toString())
        }catch(error){
            setResult("Enter a valied Number")
        }
    }

    return (
        <>  
            
            <div className="app_cal">
                <h3>Simple Online Calculator</h3>

                <form>
                    <input className='input_field' value={result} ref={inputRef} type="text" />
                </form>

                <div className="keypad">
                    <button onClick={clear} id='clear'>Clear</button>
                    <button onClick={backspace}>C</button>
                    <button name='+' onClick={handleClick}>+</button>
                    <button name='7' onClick={handleClick}>7</button>
                    <button name='8' onClick={handleClick}>8</button>
                    <button name='9' onClick={handleClick}>9</button>
                    <button name='-' onClick={handleClick}>-</button>
                    <button name='4' onClick={handleClick}>4</button>
                    <button name='5' onClick={handleClick}>5</button>
                    <button name='6' onClick={handleClick}>6</button>
                    <button name='*' onClick={handleClick}>&times;</button>
                    <button name='1' onClick={handleClick}>1</button>
                    <button name='2' onClick={handleClick}>2</button>
                    <button name='3' onClick={handleClick}>3</button>
                    <button name='/' onClick={handleClick}>/</button>
                    <button name='0' onClick={handleClick}>0</button>
                    <button name='.' onClick={handleClick}>.</button>
                    <button onClick={calculate} id='result'>=</button>
                </div>
            </div>
        </>
    );
};

export default Calculator;