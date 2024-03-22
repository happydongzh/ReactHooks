

import { forwardRef, useId, useImperativeHandle, useRef } from 'react';

const ChildComponent = forwardRef(function (props, ref) {
    const id = useId();

    const userNameRef = useRef(null);
    const userAgeRef = useRef();
    const userEmailRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            focusUserName: () => { userNameRef.current.focus(); },
            focusUserAge: () => { userAgeRef.current.focus() },
            focusUserEmail: () => { userEmailRef.current.focus() }
        }
    }, []);

    return <>
        <div>
            <label htmlFor={`${id}-userName`}>User Name:</label>
            <input ref={userNameRef} type="input" id={`${id}-userName`} />
        </div>
        <div>
            <label htmlFor={`${id}-age`}>User Age:</label>
            <input ref={userAgeRef} type="number" min={18} max={99} id={`${id}-age`} />
        </div>
        <div>
            <label htmlFor={`${id}-email`}>User Email:</label>
            <input ref={userEmailRef} type="input" id={`${id}-gender`} />
        </div>
    </>;
}
);

export default function UseImperativeHandle_Hook() {
    const parentRef = useRef(null);
    return <>
        <button onClick={() => { parentRef.current.focusUserName(); }}>focus on user name</button>
        <button onClick={() => { parentRef.current.focusUserAge(); }}>focus on user age</button>
        <button onClick={() => { parentRef.current.focusUserEmail(); }}>focus on user email</button>
        <ChildComponent ref={parentRef} />
    </>
}