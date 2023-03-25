import { useState } from 'react'
import Search from './components/Search';
import Form from './components/Form';
import PhoneBook from './components/PhoneBook';


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [currentText,setCurrentText] = useState('');
  const [numberChange,setNumberChange] = useState('');
  // const [showAll,setShowAll] = useState(true);
  const [searchText,setSearchText] = useState('');
  const [personsToShow,setPersonsToShow] = useState(persons);

  const changeCurrentText = (event)=>{
    // console.log(event.target.value);
    setCurrentText(event.target.value);
  }
  const handleNumberChange = (event)=>{
    setNumberChange(event.target.value);
  }

  const addtoPB = (event)=>{
    event.preventDefault();
    const personObject = {
      name: currentText,
      id: persons.length+1,
      number: numberChange
    };
    if(personObject.name.length>0 && personObject.number.length>0){
      if(!persons.find(person=> person.name===currentText)){
        const temp = persons.concat(personObject)
        setPersons(temp);
        if(personObject.name.includes(searchText)){
          setPersonsToShow(personsToShow.concat(personObject));
        }
        
      }else{
        alert(`${currentText} already exists in the DB`);
      }
    }else if(personObject.name.length>0 && personObject.number.length===0){
      alert('Please Enter a Phone number');
    }else if (personObject.name.length===0){
      alert('Please Enter Contact Details');
    }
  }

  

  const handleSearchChange = (event)=>{
    //! TRY TO NOT SPREAD STATE CHANGES AROUND MULTIPLE FUNCTIONS SINCE THEY ARE ASYNCHRONOUS
    setSearchText(event.target.value);
    const temp = event.target.value.length===0 ? persons : persons.filter(person=>person.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setPersonsToShow(temp)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <div>Search: <input onChange={handleSearchChange}/></div> */}
      <Search onChange = {handleSearchChange} />
      <hr></hr>
      
      
      <Form onSubmit={addtoPB} nameChange = {changeCurrentText} numberChange = {handleNumberChange}/>
      <h2>Numbers</h2>
      {/* {personsToShow.map((person)=>(<Person key = {person.id} name = {person.name} number={person.number} />))} */}
      <PhoneBook obj = {personsToShow}/>
    </div>
  )
}

export default App
