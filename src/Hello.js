import { useState } from "react"

function Hello() {
    const [clicks, setClicks] = useState(0)
    const [showClick, setShowClick] =useState(true)
    const onClick = () => {
        setTimeout(() => setClicks((prevValue) => prevValue+1), 2000)
        
    }
    const showClicks = () => {
        setShowClick((prev) => !prev)
    }
    const toogleText = showClick ? `${clicks}`: ""
    return (
        <div>
            <button onClick={onClick}>Click my "{toogleText}"</button>
            <button onClick = {showClicks}>toogle Text</button>
        </div>
    )
   
}
export default Hello