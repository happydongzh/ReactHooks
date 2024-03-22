import { useState } from "react";
import { useMyContext, useMyContextUpdater } from "./MyContext";


export default function UserInfo() {

    const ctxData = useMyContext();
    const setCtxData = useMyContextUpdater();
    const [edit, setEdit] = useState(false);
    const [userName, setUserName] = useState(ctxData.userName);

    const inputEventHandler = (e) => {
        setUserName(e.target.value);
    }

    const save = () => {
        setCtxData(pv => ({ ...pv, userName }));
        setEdit(false);
    };


    return <>
        {
            edit && <><h3>{ctxData.userId}</h3>
                <input type="text" value={userName} onChange={inputEventHandler} />
                <button onClick={save}>save</button><button onClick={() => { setEdit(false); setUserName(ctxData.userName) }}>cancel</button></>
        }
        {
            !edit && <>
                < h4 >
                    {ctxData.userId}: {ctxData.userName}
                </h4 >
                <button onClick={() => setEdit(true)}>edit</button>
            </>
        }
    </>;

}