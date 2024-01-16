import { useRef } from 'react'
import './Userform.css'

const Userform = (props) => {
    const uname = useRef();
    const uage = useRef();
    const ucolg = useRef();

    const formHandler = (event) => {
        event.preventDefault();
        if (uname.current.value.length === 0 || uage.current.value.length === 0 || ucolg.current.value.length === 0) {
            return props.isinvalidset('Please enter a valid name and age (non-empty values)')
        }
        if (uage.current.value < 1) {
            return props.isinvalidset('Please Enter a Valid Age (>0)')
        }
        const u = {
            id: Math.random(),
            name: uname.current.value,
            age: uage.current.value,
            colg: ucolg.current.value
        }
        props.addUser(u)
        uname.current.value = ""
        uage.current.value = ""
        ucolg.current.value = ""
    }
    return (
        <form onSubmit={formHandler}>
            <label>Username</label>
            <input type="text" ref={uname} />
            <label>Age (Years)</label>
            <input type="number" ref={uage} />
            <label>College Name</label>
            <input type="text" ref={ucolg} />
            <button type="submit">Add User</button>
        </form>
    )
}

export default Userform;