import React from 'react';
import OptionSelector from './OptionSelector';

const ManualSelector = ({ selectedOption, handleChange }) => {
  const manualOptions = [
    { label: 'Manivelle', description: 'Description for Manuel 1', image: '../../assets/manivelle.png' },
    { label: 'Sangle', description: 'Description for Manuel 2', image: '../../assets/sangle.png' }
  ];

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
