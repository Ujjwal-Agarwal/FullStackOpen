import Person from "./Person";
const PhoneBook = (props)=>{
    return(
        <div>{props.obj.map((person)=>(<Person key = {person.id} name = {person.name} number={person.number} />))}</div>
    )
}
export default PhoneBook;