import { useState } from 'react'

const Heading = (props)=>{
  return <h1>{props.h1}</h1>
};
const Button = (props)=>{
  return <button onClick={props.onClick}>{props.name}</button>
};

const StatisticsLine = (props)=>{
  return(
    <tr>
      <td>{props.name}</td>
      <td>{props.value}</td>
    </tr>
  )
}
const DisplayClicks = (props)=>{
  if(props.obj.total===0){
    return(
      <div>No statistics available</div>
    )
  }
  return (
    <div>
      <table>
      <StatisticsLine name="Left" value={props.obj.left} />
      <StatisticsLine name="Neutral" value={props.obj.neutral} />
      <StatisticsLine name="Right" value={props.obj.right} />
      <StatisticsLine name="Total" value={props.obj.total} />
      <StatisticsLine name="Average" value={props.obj.average} />
      </table>
    </div>
  )
}

const App = () => {
  const[currentClicks,setCurrentClicks] = useState({left:0,right:0,neutral:0,total:0,average:0});
  const setLeft = ()=>{
    const temp = {...currentClicks};
    temp.left = temp.left+1;
    temp.total=temp.total+1;
    temp.average = (((temp.left)-(temp.right))/temp.total);
    setCurrentClicks(temp);
  };
  const setNeutral = ()=>{
    const temp = {...currentClicks};
    temp.neutral = temp.neutral+1;
    temp.total=temp.total+1;
    temp.average = (((temp.left)-(temp.right))/temp.total);
    setCurrentClicks(temp);
  };
  const setRight = ()=>{
    const temp = {...currentClicks};
    temp.right = temp.right+1;
    temp.total=temp.total+1;
    temp.average = (((temp.left)-(temp.right))/temp.total);
    setCurrentClicks(temp);
    
  };

  let headings = {
      feedback: "Give FeedBack",
      statistics: "Statistics"
  }

  let buttonName = {
    good: "Good",
    bad: "Bad",
    neutral: "Neutral"
  }
  // let newItems = currentClicks

  return (
    <div>
      <Heading h1 = {headings.feedback}/>
      <Button name ={buttonName.good} onClick={()=>{setLeft()}} />
      <Button name ={buttonName.neutral} onClick={()=>{setNeutral()}} />
      <Button name ={buttonName.bad} onClick={()=>{setRight()}} />

      <Heading h1 = {headings.statistics}/>
      
      <DisplayClicks obj={currentClicks} />

      
    </div>
  );

};

export default App;
