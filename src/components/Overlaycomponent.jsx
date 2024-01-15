import './Overlaycomponent.css'
const Overlaycomponent = (props) => {
    const backdropHandler = () => {
        props.isinvalidunset();
    }
    return (
        <div className='backdrop'>
            <div className='overcontent'>
                <div className='overlabel'>
                    Invalid input
                </div>
                <div className='overmsg'>
                    <div>{props.msg}</div>
                    <button onClick={backdropHandler}>Okay</button>
                </div>
            </div>
        </div>
    )
}

export default Overlaycomponent;