import { CalcEDO } from './CalcEDO';
import { CalcIP } from "./CalcIP";
import { CalcLT } from './CalcLT';

export const CalculatorWindow = ({viewId, stateData, setStateData}) => {
    return (
      <div>
        {viewId === "edo" &&  <CalcEDO stateData = {stateData} setStateData = {setStateData}/>}
        {viewId === "lt" && <div>lt</div>}
        {viewId === "ip" && <div>ip</div>}
      </div>
    );
    // return (
    //   <div>
    //     {viewId === "edo" &&  <CalcEDO stateData = {stateData} setStateData = {setStateData}/>}
    //     {viewId === "lt" && <CalcLT stateData = {stateData} setStateData = {setStateData}/>}
    //     {viewId === "ip" && <CalcIP stateData = {stateData} setStateData = {setStateData}/>}
    //   </div>
    // );
  };

// what's up with line breaks?? <p> workaround...