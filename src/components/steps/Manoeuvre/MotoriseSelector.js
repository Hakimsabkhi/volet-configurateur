import React from 'react';
import OptionSelector from './OptionSelector';

const MotoriseSelector = ({ selectedOption, handleChange }) => {
  const motoriseOptions = [
    { label: 'Filaire', description: 'Description for Motorisé 1', image: '../../assets/filaire.png' },
    { label: 'Radio', description: 'Description for Motorisé 2', image: '../../assets/radio.png' }
  ];

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
