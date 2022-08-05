import { useState } from "react";

const plus = (a,b)=>a+b
const minus = (a,b) => a-b
const miltiplied = (a,b) => a*b
const divide = (a,b) => a/b

const changeValue = (setter) => {
    return (event) => {
        const {value} = event.target
        setter(value ? parseFloat(value) : 0)
    }
}



export function Calculator() {
    const [a,setA] = useState(0)
    const[b,setB] = useState(0)
    const[action,setAction] = useState(()=>plus)
    const[sign, setSign] = useState('+')
    console.log(action);

    const appAction = (fn, fnSign) => {
        setAction(()=>fn)
        setSign(fnSign)
    }
    
    return (
        <>
            <p>
                <button onClick={() => appAction(plus,'+')}>+</button>
                <button onClick={() => appAction(minus,'-')}>-</button>
                <button onClick={() => appAction(miltiplied,'*')}>*</button>
                <button onClick={() => appAction(divide,'/')}>/</button>
            </p>
            <p>
                <input type="number" value={a} onChange={changeValue(setA)} placeholder='0'/>
                <span> {sign} </span>
                <input type="number" value={b} onChange={changeValue(setB)} placeholder='0'/>
                <span> = {action ? action(a,b):'not'}</span>
            </p>
        </>
    )
}

// export default Calculator