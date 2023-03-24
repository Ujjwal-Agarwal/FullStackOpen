import { useState } from 'react'

const Button = (props)=>{
  return (
    <button onClick={props.onClick}>{props.name}</button>
  )
}
const Quote = (props)=>{
  return(
    <p>{props.text}</p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState(Array(anecdotes.length).fill(0))
  // console.log(votes);
  const [maxVoteIndex,setMaxVoteIndex]=useState(0);

  const selectRand=()=>{
    let rand = Math.floor(Math.random()*anecdotes.length);
    setSelected(rand);
  }
  const vote=()=>{
    let temp = [...votes]
    temp[selected] = temp[selected]+1;
    // console.log(temp);
    setVotes(temp);
    let index = votes.indexOf(Math.max(...votes));
    setMaxVoteIndex(index);
  }

  return (
    <div>
      <Quote text ={anecdotes[selected]}/>
      <Button name = "Random" onClick = {()=>selectRand()}/>
      <Button name = "Vote" onClick = {()=>vote()}/>
      <Quote text= {anecdotes[maxVoteIndex]}/>
    </div>
  )
}

export default App