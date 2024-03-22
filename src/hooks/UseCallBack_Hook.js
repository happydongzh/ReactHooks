
import { useCallback, useEffect, useState,useRef } from 'react';

const dataFromExpensiveFunc = (someParam, param = undefined) => {
    let data = [];
    for (let index = 0; index < (param == undefined ? someParam : param); index++) {
        data.push(Math.random() * param == undefined ? someParam : param);
    }
    return data;
}

export function ChildComponent({ listDataCallback }) {
    const [myNumber, setMyNumber] = useState(0);
    const consoleArea = useRef();

    const myNumberChangeHandler = (e) => {
        let tmp  = listDataCallback(e.target.value);
        setMyNumber(tmp.length);
    }

    useEffect(() => {
        consoleArea.current.value = consoleArea.current.value += 'useEffect excuted.....ChildComponent\n';
        let x = listDataCallback();
        setMyNumber(x.length);
    }, [listDataCallback]);
    // const listData = callBack(myNumber);

    return <>
        ChildComponet ===> MyNumber：<input type="range" name="range" min="0" max="999999" value={myNumber} onChange={myNumberChangeHandler} /> <span>callback 参数</span>
        <h4>{myNumber}</h4>
        <textarea id="console" ref={consoleArea}/>
        <h3>
            这里可以看到,MyNumber变化并不会触发 useEffect的执行。但是 InputText的变化却会触发useEffect的执行<br />
            因为在ChildComponent的useEffect的依赖中加入了parent传入的一个函数,而此函数的在parent中使用 useCallback进行了包装并依赖parent的state中的InputText的值,<br/>
            因此在InputText变化时会重新生成一个新函数(尽管这个新函数的内部逻辑没任何变化),所以ChildComponent的useEffect看到依赖的内容变化了，所以会执行。<br />
            这说明了，1.函数也是reference类型，parent re-render重新生成了一个新函数。 2. 调用函数时参数的变化不会影响parent 的re-render 从而不会触发子组件useEffect的执行


        </h3>

    </>
}

export default function UseCallback_Hook() {
    const [value, setValue] = useState(1);
    console.log('parent component....');
    const listDataCallback = useCallback((param) => {
        console.log("listDataCallback .... ");
        return dataFromExpensiveFunc(value, param);
    }, [value]);

    const inputChangeHandler = (e) => {
        setValue(e.target.value);
    };
    return <>
        <h3>useCallback:</h3>
        <h4>useCallback与useMemo比较：useCallback 返回的一个函数，然后再执行从而得到函数执行结果，再进一步处理。所以useCallback可以为
            函数定义参数， 一般多用于需要将此函数进行传递的情况，比如传递到子组件里。
            而useMemo返回的是函数的执行结果。</h4>
        Parent Component ====> InputText：<input type="number" step={1} value={value} min={10} max={1000} onChange={inputChangeHandler} />
        <br />
        <ChildComponent listDataCallback={listDataCallback} />
    </>;

}
