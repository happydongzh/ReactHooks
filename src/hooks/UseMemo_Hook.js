import { useMemo, useState } from 'react';

const UseMemo_Hook = () => {

    const [value, setValue] = useState("someValue");
    const [myNumber, setMyNumber] = useState(10);

    const inputChangeHandler = (e) => {
        setValue(e.target.value);
    };
    const myNumberChangeHandler = (e) => {
        setMyNumber(e.target.value);
    }

    const listData = useMemo(() => {
        return dataFromExpensiveFunc(value);
    }, [value]);

    return <>
        <h3>useMemo:
            缓存不必要的计算，InputText的内容变化会更新列表的值，而MyNumber的变化不会影响列表, 如果不使用useMemo缓存列表内容，
            那么state中任何值的变化都会重新计算列表内容，所以需要使用useMemo,并将InputText作为dependencies,这样只有InputText变化才会触发重新
            计算列表值，而MyNumber的变化不会影响列表，从而优化效率 </h3>
        <h4>useMemo的侧重点是缓存自定义fnction返回的内容</h4>
        InputText：<input type="text" value={value} onChange={inputChangeHandler} />
        <br />
        MyNumber：<input type="range" name="range" min="0" max="25" value={myNumber} onChange={myNumberChangeHandler} /> <span>{myNumber}</span>

        <h4>列表</h4>
        {listData.map((v) => (<h5 key={v}>{v}</h5>))};
    </>;
};

const dataFromExpensiveFunc = (someParam) => {
    console.log('dataFromExpensiveFunc');
    let data = [];
    for (let index = 0; index < 200; index++) {
        data.push(Math.random() * 10);
    }
    return data;
}

export default UseMemo_Hook;
