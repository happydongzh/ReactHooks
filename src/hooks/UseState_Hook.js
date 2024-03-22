
import { useState } from 'react';

export default function UseState_Hook() {

    const [inputValue, setInputValue] = useState('');

    const inputChangeEventHandler = (e) => {
        setInputValue(e.target.value);
    };


    return <>
        
        <h3>useState</h3>

        <div><input type='input' value={inputValue} onChange={inputChangeEventHandler} /></div>

        <p>{inputValue}</p>
    </>
}