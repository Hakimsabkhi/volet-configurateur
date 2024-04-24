import React from 'react';
import OptionSelector from './OptionSelector';

const TelecommandeSelector = ({ selectedOption, handleChange }) => {
  const telecommandeOptions = [
    { label: 'Sans', description: 'Sans télécommande', image: '../../assets/Encastree.png' },
    { label: 'Avec', description: 'Avec télécommande', image: '../../assets/EnApplique.png' }
  ];

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
