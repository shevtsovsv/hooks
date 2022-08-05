import {useState} from 'react'


function Compponent() {
    return (
        <>
            <div>____________________________</div>
        </>
    )
}




function Form1() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge]	= useState(21);
    return (
    <>
        <form>
            <label htmlFor = "firstName">First name</label>
            <input
                name  ='firstName'
                type = 'text'
                value = {firstName}
                onChange = {(event) => setFirstName(event.target.value) }
            />
            <Compponent/>
            <label htmlFor = "lastName">Last name</label>
            
            <input
                name  ='lastName'
                type = 'text'
                value = {lastName}
                onChange = {(event) => setLastName(event.target.value) }
            />
            <Compponent/>
            <label htmlFor = "age">Age</label>
            <input
                name  ='age'
                type = 'number'
                value = {age}
                onChange = {(event) => {
                    const ageString = event.target.value
                    setAge(ageString ? parseInt(ageString) : 0)
                    } 
                }
            />
        </form>
        <div>
            firstName: {firstName} <br/>
            lastName: {lastName} <br/>
            age: {age} <br/>

        </div>
    </>
    )
}
export default Form1