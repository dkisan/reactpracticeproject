import './Username.css'

const Username = (props)=>{
    return(
        <div className="name">
            {props.data.name + ' ( ' + props.data.age + ' years old )'}
        </div>
    )
}

export default Username;