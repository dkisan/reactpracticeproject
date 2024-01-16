import './Username.css'

const Username = (props)=>{
    return(
        <div className="name">
            {props.data.name + ' ( ' + props.data.age + ' years old )' + props.data.colg}
        </div>
    )
}

export default Username;