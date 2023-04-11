import { useState,useEffect } from "react";
import Form from "./components/Form";
import getAll from "./services/DB";
import Country from "./components/Country"

function App() {
  const [text, setText] = useState("");
  const [dataObject, setDataObject] = useState([]);
  const [displayObjects, setDisplayObjects]= useState([]);
  const [buttonClick,setButtonClick] = useState(false);
  const [showId,setShowId] = useState(-1);

  const onSubmit = () => {};
  const nameChange = (event) => {
    setText(event.target.value);
    const temp =
      event.target.value.length === 0
        ? []
        : dataObject.filter((country) =>
            country.name.official
              .toLowerCase()
              .includes(event.target.value.toLowerCase())
          );
    console.log(temp);
    setDisplayObjects(temp);
    
  };

  const buttonClickFunction = (id)=>{
    setButtonClick(!buttonClick);
    setShowId(id);
    // console.log("clicked");
  }

  useEffect(()=>{
    getAll().then(data=>{
      setDataObject(data);
    })
    
  },[])
  

  return (
    <div>
      <Form onSubmit={onSubmit} nameChange={nameChange} />
      <Country array = {displayObjects} buttonClickFunction={buttonClickFunction} buttonState = {buttonClick} detailID={showId} />
    </div>
  );
}

export default App;
