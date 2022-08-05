// import useState from 'react';

function someHeavyFunc(maxNumber, maxPow) {
    const data = []
    for (let i=1; i < maxNumber; i++) {
        const record = {}
        for (let pow=1; pow <= maxPow; pow++) {
            record[pow] = Math.pow(i, pow)
        }
        data.push(record)
    }
    return data
}

function Row ({ record }) {
    return (	
        <tr>	
            {Object.values(record)
            .sort((a, b) => a - b)
            .map((value, i) => (
            <td	key = {i}> { value}</td>
            ))}	
        </tr>
    )
}


function HeaderRow ({ maxPow }) {
    const cells = []
    for (let pow=1; pow <= maxPow; pow++) {
        cells.push(
            <th style = {{ minWidth: 100} } key= {pow} >
            ^{pow}
            </th>
        );
    }
    return <tr>{cells}</tr>
}

const MAX_NUMBER = 30
const MAX_POW = 5
console.log(someHeavyFunc(MAX_NUMBER, MAX_POW));

function ExepleTab() {
    const data = someHeavyFunc(MAX_NUMBER, MAX_POW) ;
        return (
            <table>
                <thead>
                    <HeaderRow maxPow = {MAX_POW} />
                </thead>
                <tbody>
                {data.map ((record) => (
                    <Row key={record[1]} record= {record} />
                    ))}
                </tbody> 
            </table>
        )
}
// const initialState = {
//     firstName: "",
//     lastName: "",
//     age: 21,
//     }
// function ExepleTab() {
//     // const [data, setData] = useState(()=>{someHeavyFunc(MAX_NUMBER, MAX_POW)}) 
//     const [data, setData] = useState(initialState) 
//     let data = ;
//     return (
//         <table>
//             <thead>
//                 <HeaderRow maxPow ={MAX_POW}/>
//             </thead>
//             <tbody>
//                     {data.map ((record) => (
//                         <Row key={record[1]} record= {record} />
//                      ))}
//             </tbody>
            
//         </table>
//     )
// }
export default ExepleTab