import useState from 'react';

function useCounter(initialValue=0, delta=1) {
    const [count, setCount] = useState(initialValue)
    const increment = () => {setCount(prevValue => prevValue + delta)}
    const decrement =   () => {
            setCount(prevValue => prevValue-delta)
        }
    return [count, increment, decrement]
}

function YearsCounter ({ initialValue }) {

    // const a = useCounter(2000, 1)
    // console.log(a);
    const [count, inc, dec] = useCounter(initialValue, 1)
    return (
        <div>
            <p>Year:</p>
            <div>
                <button onClick = {dec}> {'<<'} </button>
                <span style ={ {margin: 5} }> {count}</span>
                <button onClick = {inc}>{' >> ' }</button>
            </div>
        </div>
    )
}
export default YearsCounter