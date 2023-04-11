import Button from "./Button";
import DetailedCountry from "./DetailedCountry";

const individualCountry = (props) => {
    // console.log(props.detailID);
    // console.log(props);
  if(props.obj.area === props.detailID){
    return <DetailedCountry obj={props.obj} />;
  };
  //   console.log("BS", props.buttonState);
  return (
    <div>
      <p>
        {props.obj.name.common} <Button id = {props.obj.area} onClick={props.buttonClickFunction} />
      </p>
    </div>
  );
};
export default individualCountry;
