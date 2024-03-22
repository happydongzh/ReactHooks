
import { useReducer } from "react";

const myReducerFunc = (state, action) => {
    let newStateValue;
    switch (action.type) {
        case "ADD":
            newStateValue = {
                ...state,
                result: parseInt(state.operatorOne) + parseInt(state.operatorTwo),
                operator: "✚",
            };
            break;
        case "MINUS":
            newStateValue = {
                ...state,
                result: parseInt(state.operatorOne) - parseInt(state.operatorTwo),
                operator: "-",
            };
            break;
        case "MULTIPLY":
            newStateValue = {
                ...state,
                result: parseInt(state.operatorOne) * parseInt(state.operatorTwo),
                operator: "✖",
            };
            break;
        case "DIVSION":
            newStateValue = {
                ...state,
                result: parseInt(state.operatorOne) / parseInt(state.operatorTwo),
                operator: "÷",
            };
            break;
        default:
            newStateValue = { ...state, ...action.opData };
            break;
    }

    return newStateValue;
}
const initValue = {
    operatorOne: 0,
    operator: "?",
    operatorTwo: 0,
    result: 0
};
function UseReducer_Hook() {

    const [calculator, setResult] = useReducer(myReducerFunc, initValue);

    const inputChangeHandler = (e) => {
        let action = {};
        action.type = "CHANGE_OP";
        action.opData = {};
        action.opData[e.target.id] = e.target.value;
        setResult(action);
    }

    return <div className="reducer">
        <div>
            <input type="number" id="operatorOne" value={calculator.operatorOne} onChange={inputChangeHandler} />
            <span>{calculator.operator}</span>
            <input type="number" id="operatorTwo" value={calculator.operatorTwo} onChange={inputChangeHandler} />
            <span>=</span>
            {calculator.result}
        </div>
        <div>
            <button onClick={() => { setResult({ type: "ADD" }) }}>✚</button>
            <button onClick={() => { setResult({ type: "MINUS" }) }}>-</button>
            <button onClick={() => { setResult({ type: "MULTIPLY" }) }} >✖</button>
            <button onClick={() => { setResult({ type: "DIVSION" }) }}>÷</button>
        </div>
    </div>;

}

export default UseReducer_Hook;