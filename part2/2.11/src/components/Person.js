const Person = (props) => {
  // console.log(props.id)
  return (
    <div>
      <p className="person">
        {props.name} : {props.number} : <button onClick = {()=>{props.onClick(props.id)}}>Delete Record</button>
      </p>
    </div>
  );
};

export default Person
