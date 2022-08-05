import {useState} from 'react'

function getPowTab(num, maxPow) {
    const data =[]
    for (let index = 1; index <= num; index++) {
        const record = {}
        for(let pow=1; pow <= maxPow;pow++){
            record[pow] = index**pow
        }
       data.push(record) 
    }
    console.log("Создание таблицы степененей");
    return data
}

function DrawRow({record}) {
    return (
        <tr>
            {Object.values(record)
            .sort((a,b)=>a-b)
            .map((value,i)=>(
                <td key={i} style ={{textAlign: 'center'}}>{value}</td>
            ))}
        </tr>
    )
}

function DrawHeader({maxPow}) {
    const cells = []
    for(let pow=1; pow<=maxPow; pow++) {
        cells.push(
            <th style ={{minWidth: 100}} key = {pow}>{pow} степень</th>
        )
    }
    return <tr>{cells}</tr>
}

const MAX_NUMBER = 30
const MAX_POW = 7

function PowTab2() {
    const[data, setData] = useState(() =>{
        
        return getPowTab(MAX_NUMBER,MAX_POW)
    })
    // const data =getPowTab(MAX_NUMBER, MAX_POW)
    
    const[, setTriger] = useState({})

    const startTriger = () => setTriger({})


    const removeFirst = () => {
        setData(prevValue =>{
            const [,...rest] = prevValue
            return rest
        })
    }
    console.log("Перерисовка таблицы");
    return (
        <>
            <p>
                <button onClick={removeFirst}>Удалить первую строку</button>
                <button onClick={startTriger}>Перерисовать</button>
            </p>
            <table>
                <thead>
                    <DrawHeader maxPow={MAX_POW}/>
                </thead>
                <tbody>
                    {data.map((record)=>(
                        <DrawRow key={record['1']} record={record}/>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default PowTab2