import { useState } from "react";

function useCount(){
    const [state, setState] =useState(2000)

    const dec = () => {
        setState((prevValue)=>(prevValue +1))
    }
    const inc = () => {
        setState((prevValue)=>(prevValue -1))
    }
    return [state, dec, inc]
}



function MyHook() {
    const [state, dec, inc] = useCount()

    return (
        <div>
            <p>Count</p>
            <div>
                <button onClick={dec}>{'>>'}</button>
                <span style ={{margin: 5}}> {state}</span>
                <button onClick={inc}>{'<<'}</button>
            </div>
        </div>
    )
}



export default MyHook