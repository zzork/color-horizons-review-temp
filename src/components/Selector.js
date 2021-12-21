import { CalcEDO } from './CalcEDO';
import { CalcLT } from './CalcLT';

export const Selector = ({setSelected}) => {
    const handleEDOClick = ({}) => setSelected(<CalcEDO/>)
    const handleLTClick = ({}) => setSelected(<CalcLT/>)
    return (
      <div>
        <h2>Selector Component</h2>
        <button onClick={handleEDOClick}>Equal Division of the Octave</button>
        <button onClick={handleLTClick}>Linear Temperament</button>
      </div>
    );
  };
