const Course = (props) => {
    let temp = props.course;
    let sum=parseInt(0);
    sum = temp.parts.reduce((acc,currentValue)=> {
      console.log(acc);
      return(acc+currentValue.exercises);
    },0); // 0 is the initial value of accumulator
  
  
    return (
      <div>
        <h1>{temp.name}</h1>
  
        {temp.parts.map((part) => (
          <p key={part.id}>
            {part.name} : {part.exercises}
          </p>
        ))}
        <p><b>Total: {sum} Excercises</b></p>
      </div>
    );
  };

  export default Course;