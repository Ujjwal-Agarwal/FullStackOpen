import Person from "./Person";
const PhoneBook = (props)=>{
    return(
        <div>{props.obj.map((person)=>(<Person key = {person.id} id={person.id} name = {person.name} number={person.number} onClick={props.onDelete} />))}</div>
    )
}
export default PhoneBook;