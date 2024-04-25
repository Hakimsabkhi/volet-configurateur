import React from 'react';
import OptionSelector from './OptionSelector';
import { sortieDeCableOptions } from '../../../assets/Data';

const SortieDeCableSelector = ({ selectedOption, handleChange }) => {
  return (
    <OptionSelector
      options={sortieDeCableOptions}
      selectedOption={selectedOption}
      handleChange={handleChange}
      type="sortieDeCable"
    />
  );
}

export default SortieDeCableSelector;
