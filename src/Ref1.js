import {useEffect, useState, useRef} from'react';

export function Ref1() {
    const refContainer = useRef();
    const toggleRef = useRef(false)
    const [toggleState, setToggleState] = useState(false)


    const focusInput = () => {
        refContainer.current?.focus();
    };

    const onChange =(event) => {
        const text = event.target.value
        if (text ==="blur") {
            refContainer.current?.blur()
        }
    }

    const changeRef =()=> {
        toggleRef.current = !toggleRef.current
        console.log((`toggleRef: ${toggleRef.current}`));
    }
    const changeState = () => {
        setToggleState((prev) => !prev)
        console.log((`toggleState: ${toggleState}`))
    }
    
    console.log("render");
    return (
    <div>
    <input ref = {refContainer} onChange={onChange}/>
    <p>
        <button	onClick={focusInput}> FOCUS </button>
        <button onClick={changeRef}>ref</button>
        <button onClick={changeState}>changeState</button>
    </p>
    </div>
    );

}