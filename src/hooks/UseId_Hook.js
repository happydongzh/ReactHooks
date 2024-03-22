import { useId } from "react";

export default function () {
 
    const id = useId();

    return <>
    <h3>useId:用于为dom 元素生成 唯一的 ID 值</h3>
        <div>
            <label htmlFor={`${id}-userName`}>User Name({`${id}-userName`}):</label>
            <input type="input" id={`${id}-userName`} />
        </div>
        <div>
            <label htmlFor={`${id}-age`}>User Age({`${id}-age`}):</label>
            <input type="number" min={18} max={99} id={`${id}-age`} />
        </div>
        <div>
            <label htmlFor={`${id}-email`}>User Email({`${id}-email`}):</label>
            <input type="input" id={`${id}-gender`} />
        </div>
    </>
}