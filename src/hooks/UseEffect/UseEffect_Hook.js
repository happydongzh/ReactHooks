
import { useEffect, useState } from "react";

export default function UseEffect_Hook() {
    const [inputValue, setInputValue] = useState('');
    
    useEffect(() => {
        setInputValue(() => "abc"); 
    },[]);

    const inputChangeEventHandler = (e) => {
        setInputValue(e.target.value);
    }
    return <>
    <h3> useEffect:</h3>
    <div><input type='input' value={inputValue} onChange={inputChangeEventHandler} /></div>
    <p>{inputValue}</p>
</>
}