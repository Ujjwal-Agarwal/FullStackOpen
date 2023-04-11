import IndividualCountry from "./IndividualCountry";
import DetailedCountry from "./DetailedCountry";

const Country = (props)=>{
    // console.log(props.array);
    if(props.array.length >1 && props.array.length<10){
        return(
            <div>
                {props.array.map((country,index)=><IndividualCountry key = {index} obj={country} buttonState={props.buttonState} buttonClickFunction={props.buttonClickFunction} detailID = {props.detailID}/>)}
            </div>
        )
    }else if(props.array.length>10){
        return(
            <div> Too many countries with similar strings found</div>
        )
    }else if(props.array.length===1){
        return (
            <div>
                {props.array.map((country,id)=><DetailedCountry key = {id} obj = {country}  />)}
            </div>
        )
    }
   
}
export default Country