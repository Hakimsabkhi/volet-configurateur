import React from 'react';
import OptionSelector from './OptionSelector';
import { Droite, Gauche } from '../../../assets/imageModule';

const SortieDeCableSelector = ({ selectedOption, handleChange }) => {
  const sortieDeCableOptions = [
    { label: 'Gauche', description: 'Sortie de câble à gauche', image: Droite },
    { label: 'Droite', description: 'Sortie de câble à droite', image: Gauche }
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
