const Form = (props)=>{
    return(
        <div>
            <form onSubmit={props.onSubmit}>
                <div>
                    Find countries: <input onChange={props.nameChange} />
                </div>
            </form>
        </div>
    );
;}

export default Form;
