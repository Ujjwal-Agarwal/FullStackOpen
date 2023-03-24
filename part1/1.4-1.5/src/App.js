import { useState } from 'react'


const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  return <p>{props.name}</p>;
};
const Excercise = (props) => {
  return <p>{props.excercises}</p>;
};

const Content = (props) => {
  // debugger
  return (
    <div>
      <Part name={props.name} />
      <Excercise excercises={props.excercises} />
    </div>
  );
};

const Total = (props) => {
  let sum=parseInt(0);
  parseInt(props.parts.map((x)=>(
    sum+= parseInt(x.exercises)
    )));
  return sum
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      {course.parts.map((x) => (
        <Content name={x.name} excercises={x.exercises} />
      ))}

      <Total parts = {course.parts} />
    </div>
  );

  // const [ counter, setCounter ] = useState(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  // return (
  //   <div>{counter}</div>
  // )
};

export default App;
