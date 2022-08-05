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

const initialState = {
    firstName: "",
    lastName: "",
    age: 21,
    }

function Form5() {
    const [state, setState] = useState(initialState)
    

    const clear = () => {
        setState(initialState)
    }

    return (
    <>
        <form>
            <FormField
                name = "firstName"
                label = "First name"
                value = {state.firstName}
                onChange = {(newValue)=> setState((prevState)=>{
                    return {
                        ...prevState,
                        firstName: newValue,
                    }
                })}
            />
            <FormField
                name = "lastName"
                label = "Larst name"
                value = {state.lastName}
                onChange = {(newValue)=> setState((prevState)=>{
                    return {
                        ...prevState,
                        lastName: newValue,
                    }
                })}
            />
            <FormField
                name = "age"
                label = "Age"
                value = {state.age}
                onChange = {(newValue)=> setState((prevState)=>{
                        return {
                            ...prevState,
                            age: newValue ? parseInt(newValue):0,
                        }
                    })
                }
                type = "number"
            />   
        </form>
        <div>
            <button onClick={clear}>Clear</button>
        </div>
        <div>
            firstName: {state.firstName} <br/>
            lastName: {state.lastName} <br/>
            age: {state.age} <br/>

        </div>
    </>
    )
}
export default Form5