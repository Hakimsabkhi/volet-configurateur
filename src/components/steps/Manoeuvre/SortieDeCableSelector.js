import React from 'react';
import OptionSelector from './OptionSelector';

const SortieDeCableSelector = ({ selectedOption, handleChange }) => {
  const sortieDeCableOptions = [
    { label: 'Gauche', description: 'Sortie de câble à gauche', image: '../../assets/Gauche.png' },
    { label: 'Droite', description: 'Sortie de câble à droite', image: '../../assets/Droite.png' }
  ];

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
