import {useState} from 'react'

function FormField (props) {
    const { name, label, value, onChange, type ='text' } = props;
    return (
    <div>
        <label htmlFor = {name}>{label}</label>
        <input
            name = {name}
            type = {type}
            value = {value}
            onChange = { (event) => onChange (event.target.value )}
        />
    </div>
    );
}

function Form2() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge]	= useState(21);
    return (
    <>
        <form>
            <FormField
                name = "firstName"
                label = "First name"
                value = {firstName}
                onChange = {(newValue)=> setFirstName(newValue)}
            />
            <FormField
                name = "lastName"
                label = "Larst name"
                value = {lastName}
                onChange = {(newValue)=> setLastName(newValue)}
            />
            <FormField
                name = "age"
                label = "Age"
                value = {age}
                type="number"
                onChange = {(newValue)=> setAge(newValue ? parseInt(newValue):0)}
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
export default Form2