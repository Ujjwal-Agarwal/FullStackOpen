import { useState, useEffect } from "react";
import Search from "./components/Search";
import Form from "./components/Form";
import PhoneBook from "./components/PhoneBook";
import PersonsService from "./services/Persons";
import Notification from "./components/Notification"
// import idService from "./services/idService";


const App = () => {
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', number: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  // ])
  const [persons, setPersons] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [numberChange, setNumberChange] = useState("");
  // const [showAll,setShowAll] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [personsToShow, setPersonsToShow] = useState(persons);
  const[statusMessage,setStatusMessage] = useState('');
  const [notificationClass,setNotificationClass] = useState('error-msg');
  const [showNotification,setShowNotification]=useState(false);

  const changeCurrentText = (event) => {
    // console.log(event.target.value);
    setCurrentText(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNumberChange(event.target.value);
  };

  const addtoPB = (event) => {
    event.preventDefault();
    // let newId=0;
    
    const personObject = {
      name: currentText,
      id: 0,
      number: numberChange,
    };
    if (personObject.name.length > 0 && personObject.number.length > 0) {
      if (!persons.find((person) => person.name === currentText)) {
        // const temp = persons.concat(personObject)
        // setPersons(temp);
        // axios.post('http://localhost:3001/persons',personObject)
        // .then(response=>{
        //   console.log(response)
        // })
        //? CREATE NEW OBJECT AND THEN CONCAT IT TO BASE PERSONS ARRAY
        PersonsService.create(personObject).then((resData) => {
          // console.log(response.data);
          setPersons(persons.concat(resData));
        });
        //? SORT PERSON NAME IF IT CONTAINS SEARCH BOX TEXT
        if (personObject.name.includes(searchText)) {
          setPersonsToShow(personsToShow.concat(personObject));
        }
        setStatusMessage(`Person with name ${personObject.name} has been added to the directory`);
        setShowNotification(true)
        setNotificationClass('notification-bar');
        setTimeout(()=>{
          setShowNotification(false)
        },5000)
      } else {
        // alert(`${currentText} already exists in the DB`);
        const newPersonobject = {...personObject,id:persons.find((person)=>person.name===currentText).id}
        PersonsService.update(newPersonobject.id,newPersonobject).then((resData)=>{
          // // console.log(resData)
          // let temp = persons;
          // // console.log(temp);
          // // const reqRecord = temp.find((person)=>person.id===newPersonobject.id)
          // temp.find(person =>person.id===resData.id).number=resData.number;
          // // reqRecord.number=resData.number;
          // // console.log(reqRecord);
          // // temp = temp.filter((person)=>person.id!==reqRecord.id)
          // console.log(temp);
          
          // setPersons(temp)
          // setPersonsToShow(temp)
          // // console.log(temp)

          setPersonsToShow(persons.map(person=> person.id!== resData.id? person : resData))

        }).catch(error=>{
          setStatusMessage(`Person with name ${personObject.name} is not available in the directory anymore`);
          setShowNotification(true)
          setNotificationClass('error-msg');
        setTimeout(()=>{
          setShowNotification(false)
        },5000)
        })
      }
    } else if (
      personObject.name.length > 0 &&
      personObject.number.length === 0
    ) {
      alert("Please Enter a Phone number");
    } else if (personObject.name.length === 0) {
      alert("Please Enter Contact Details");
    }
  };

  const handleSearchChange = (event) => {
    //? TRY TO NOT SPREAD STATE CHANGES AROUND MULTIPLE FUNCTIONS SINCE THEY ARE ASYNCHRONOUS
    setSearchText(event.target.value);
    const temp =
      event.target.value.length === 0
        ? persons
        : persons.filter((person) =>
            person.name.toLowerCase().includes(event.target.value.toLowerCase())
          );
    setPersonsToShow(temp);
  };

  const deletion = (id) => {
    if (window.confirm(`Delete? ${id}`)) {
      PersonsService.remove(id).then((resData) => {
        console.log(`Deleted record with id: ${id}`);
        PersonsService.getAll().then((DB) => {
          setPersons(DB);
          setPersonsToShow(DB);
        });
      });
    }
    // console.log("clicked",id)
  };

  useEffect(() => {
    PersonsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
      setPersonsToShow(initialPersons);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <div>Search: <input onChange={handleSearchChange}/></div> */}
      <Search onChange={handleSearchChange} />
      <hr></hr>
      <Notification class={notificationClass} message={statusMessage} status={showNotification} />

      <Form
        onSubmit={addtoPB}
        nameChange={changeCurrentText}
        numberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      {/* {personsToShow.map((person)=>(<Person key = {person.id} name = {person.name} number={person.number} />))} */}
      <PhoneBook obj={personsToShow} onDelete={deletion} />
    </div>
  );
};

export default App;
