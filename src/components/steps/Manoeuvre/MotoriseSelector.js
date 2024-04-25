import React from 'react';
import OptionSelector from './OptionSelector';
import { motoriseOptions } from '../../../assets/Data'; 


const MotoriseSelector = ({ selectedOption, handleChange }) => {

  return (
    <OptionSelector
      options={motoriseOptions}
      selectedOption={selectedOption}
      handleChange={handleChange}
      type="motorise"
    />
  );
}

export default MotoriseSelector;
