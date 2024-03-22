
import React, { useState, useDeferredValue } from 'react';

const UseDeferredValue_Hook = () => {
    const [inputValue, setInputValue] = useState('');
    const searchDeferred = useDeferredValue(inputValue);

    return <>
        <h3>
            useDeferredValue: 结合 React.memo(function 子组件(){ })使用，
            使得子组件的复杂计算和渲染不阻断父组件的交互(输入框的输入不受影响)，
            如果不使用useDeferredValue那么问题是每输入一个字符都会触发子组件重新计算并渲染，在子组件完成之前无法输入内容。<br/>
            useDeferredValue hook的作用非常类似我们之前做的防抖节流函数，那他们之前的区别，官方解释的很好，我这里就直接照搬过来。<br/>
            防抖：是指在用户停止输入一段时间（例如一秒钟）之后再更新列表。<br/>
            节流：是指每隔一段时间（例如最多每秒一次）更新列表。<br/>
            此外，与防抖或节流不同，useDeferredValue 执行的延迟重新渲染默认是可中断的。<br/>
            这意味着，如果 React 正在重新渲染一个大型列表，但用户进行了另一次键盘输入，React 会放弃该重新渲染，先处理键盘输入，<br/>
            然后再次开始在后台渲染。相比之下，防抖和节流仍会产生不顺畅的体验，因为它们是阻*的：它们仅仅是将渲染阻塞键盘输入的时刻推迟了。

        </h3>
        <div>Search : <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} /></div>

        <List search={searchDeferred} />
        
    </>
}


const List = React.memo(function List({ search }) {
    let items = [];
    for (let i = 0; i < 250; i++) {
        items.push(<ListItem key={i} text={search} />);
    }
    return (
        <p className="items">
            {items}
        </p>
    );
});

const ListItem = ({ text }) => {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
        // Do nothing for 1 ms per item to emulate extremely slow code
    }
    return <span>{text}</span>
}

export default UseDeferredValue_Hook;