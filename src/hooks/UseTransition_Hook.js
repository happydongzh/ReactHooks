import { useState, useTransition } from "react";


const dataFromExpensiveFunc = (someParam) => {
    console.log('dataFromExpensiveFunc  ' + someParam);
    let data = [];
    for (let index = 0; index < 20000; index++) {
        data.push(Math.random() * 10);
    }
    return data;
}

const UseTransition_Hook = () => {

    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);
    const [isPending, startTransition] = useTransition()

    const searchChangeHandler = (e) => {
        setQuery(e.target.value);
        startTransition(() => {
            setResult((r) => {
                const tmp = dataFromExpensiveFunc(query);
                return tmp;
            });
        });
    }

    return <>
    <h3>useTransition: 一次函数调用里需要设置多个state值，把耗时的操作包裹到startTransition里来降低这个setState的优先级，
        从而提高效率，不会阻塞其他 元素内容更新的操作</h3>
        <input type="search" value={query} onChange={searchChangeHandler} /><br />
        {
            isPending ? <h3>Loading....</h3> : result.map(r => <span key={r}>r</span>)
        }
    </>;
}

export default UseTransition_Hook;