import { useEffect, useState, useRef } from "react";

const UseEffect_InitPageData = () => {
    const [data, setData] = useState([]);
    const [dataType, setDataType] = useState('users');
    const [loading, setLoading] = useState(false);

    const requstController = useRef(null);

    useEffect(() => {
        const loadPageData = async () => {
            requstController.current?.abort();
            requstController.current = new AbortController();
            try {
                setLoading((p) => !p);
                const resp = await fetch(`https://jsonplaceholder.typicode.com/${dataType}`, {
                    signal: requstController.current?.signal
                })
                const _data = await resp.json();
                setData(_data);
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log(error.message);
                    return;
                }
            } finally {
                setLoading((p) => !p);
            }
        }
        loadPageData();
    }, [dataType]);

    const buttonClickHandler = (e) => {
        setDataType(e.target.id);
    };
    return <>
        <div>
            <button id='users' onClick={buttonClickHandler}>users</button>
            <button id='todos' onClick={buttonClickHandler}>todos</button>
            <button id='posts' onClick={buttonClickHandler}>post</button>
            <button id='comments' onClick={buttonClickHandler}>comments</button>
        </div>
        <h2>{dataType}</h2>
        {loading && <h3>Loading...</h3>}
        {!loading && data.length && data.map(d => <pre key={d.id}>{JSON.stringify(d)}</pre>)}
    </>;
}

export default UseEffect_InitPageData;