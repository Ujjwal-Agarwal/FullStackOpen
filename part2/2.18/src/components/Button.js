const Button = (props) => {
  return <button onClick={()=>{props.onClick(props.id)}}>More Details</button>;
};
export default Button;
