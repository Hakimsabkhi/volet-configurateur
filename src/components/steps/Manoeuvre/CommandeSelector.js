import React from 'react';
import OptionSelector from './OptionSelector';

const CommandeSelector = ({ selectedOption, handleChange }) => {
  const commandeOptions = [
    { label: 'Emetteur mural', description: 'Interrupteur encastré', image: '../../assets/Encastree.png' },
    { label: 'Télécommande', description: 'Interrupteur en applique', image: '../../assets/EnApplique.png' }
  ];

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
