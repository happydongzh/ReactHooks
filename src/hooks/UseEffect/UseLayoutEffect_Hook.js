
import { useState, useRef, useLayoutEffect, useEffect } from "react";

const UseLayoutEffect_Hook = () => {

    const [text, setText] = useState('world hello');

    // useEffect(() => {
    //     let i = 0;
    //     while (i <= 400000000) {
    //         i++;
    //     };
    //     setText("HELLO WORLD");
    // }, []);

    useLayoutEffect(() => {
        let i = 0;
        while (i <= 400000000) {
            i++;
        };
        setText("HELLO WORLD");
    }, []);



    return <>
        <h5>useEffect是在渲染函数执行完成，并绘制到屏幕之后，再异步执行。</h5>
        <ul>
            <li>触发渲染函数执行（改变状态，或者父组件重新渲染）</li>
            <li>React调用组件的渲染函数</li>
            <li>屏幕中重绘完成</li>
            <li>执行useEffect</li>
        </ul>
        <h5>useLayoutEffect，是在渲染函数执行之后，但是屏幕重绘前同步执行。（注意：它可能会影响渲染体验）</h5>
        <ul>
            <li>触发渲染函数执行（改变状态，或者父组件重新渲染）</li>
            <li>React调用组件的渲染函数</li>
            <li>执行useLayoutEffect，并且React等待它执行完成</li>
            <li>屏幕中重绘完成</li>
        </ul>
        <h2>{text}</h2>
    </>;
}


export default UseLayoutEffect_Hook;