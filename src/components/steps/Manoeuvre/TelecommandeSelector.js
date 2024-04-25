import React from 'react';
import OptionSelector from './OptionSelector';
import { telecommandeOptions } from '../../../assets/Data';

const TelecommandeSelector = ({ selectedOption, handleChange }) => {

  return (
    <OptionSelector
      options={telecommandeOptions}
      selectedOption={selectedOption}
      handleChange={handleChange}
      type="telecommande"
    />
  );
}

export default TelecommandeSelector;
