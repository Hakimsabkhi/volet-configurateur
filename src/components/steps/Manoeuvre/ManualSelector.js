import React from 'react';
import OptionSelector from './OptionSelector';
import { manualOptions } from '../../../assets/Data';

const ManualSelector = ({ selectedOption, handleChange }) => {

  return (
    <OptionSelector
      options={manualOptions}
      selectedOption={selectedOption}
      handleChange={handleChange}
      type="manual"
    />
  );
}

export default ManualSelector;
