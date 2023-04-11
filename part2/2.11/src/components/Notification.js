const Notification = (props)=>{
    if(!props.status){
        return(<div></div>)
    }
    return(
        <div className={props.class}>
            {props.message}
        </div>
    )
}
export default Notification