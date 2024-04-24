import React from 'react';
import OptionSelector from './OptionSelector';

const InterrupteurSelector = ({ selectedOption, handleChange }) => {
  const interrupteurOptions = [
    { label: 'Sans', description: "Pas d'interrupteur", image: '../../assets/none.png' },
    { label: 'Encastree', description: 'Interrupteur encastré', image: '../../assets/Encastree.png' },
    { label: 'En applique', description: 'Interrupteur en applique', image: '../../assets/EnApplique.png' }
  ];

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
