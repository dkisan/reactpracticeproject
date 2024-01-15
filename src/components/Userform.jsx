import { useState } from 'react'
import './Userform.css'

const Userform = (props) => {
    const [uname, setUname] = useState('')
    const [uage, setUage] = useState('')
    const nameHandler = (event) => {
        setUname((prev) => {
            return event.target.value
        })
    }
    const ageHandler = (event) => {
        setUage((prev) => {
            return event.target.value
        })
    }
    const formHandler = (event) => {
        event.preventDefault();
        if (uname.length === 0 || uage.length === 0) {
            return props.isinvalidset('Please enter a valid name and age (non-empty values)')
        }
        if (uage < 1) {
            return props.isinvalidset('Please Enter a Valid Age (>0)')
        }
        const u = {
            id: Math.random(),
            name: uname,
            age: uage
        }
        props.addUser(u)
        setUname((prev) => {
            return ''
        })
        setUage((prev) => {
            return ''
        })

    }
    return (
        <form onSubmit={formHandler}>
            <label>Username</label>
            <input value={uname} type="text" onChange={nameHandler} />
            <label>Age (Years)</label>
            <input value={uage} type="number" onChange={ageHandler} />
            <button type="submit">Add User</button>
        </form>
    )
}

export default Userform;