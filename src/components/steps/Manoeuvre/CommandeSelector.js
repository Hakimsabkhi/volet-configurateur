import React from 'react';
import OptionSelector from './OptionSelector';
import { commandeOptions } from '../../../assets/Data';


const CommandeSelector = ({ selectedOption, handleChange }) => {

  return (
    <OptionSelector
      options={commandeOptions}
      selectedOption={selectedOption}
      handleChange={handleChange}
      type="commande"
    />
  );
}

export default CommandeSelector;
