import React from 'react';
import OptionSelector from './OptionSelector';
import { interrupteurOptions } from '../../../assets/Data';

const InterrupteurSelector = ({ selectedOption, handleChange }) => {

  return (
    <OptionSelector
      options={interrupteurOptions}
      selectedOption={selectedOption}
      handleChange={handleChange}
      type="interrupteur"
    />
  );
}

export default InterrupteurSelector;
