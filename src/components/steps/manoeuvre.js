import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setManoeuvreType, setManualType, setMotoriseType,
  setTelecommandeType, setCommandeType, setInterrupteurType,
  setSortieDeCableType
} from '../../features/voletSlice';
import ManualSelector from './Manoeuvre/ManualSelector';
import MotoriseSelector from './Manoeuvre/MotoriseSelector';
import TelecommandeSelector from './Manoeuvre/TelecommandeSelector';
import CommandeSelector from './Manoeuvre/CommandeSelector';
import InterrupteurSelector from './Manoeuvre/InterrupteurSelector';
import SortieDeCableSelector from './Manoeuvre/SortieDeCableSelector';
import OptionSelector from './Manoeuvre/OptionSelector';
import './manoeuvre.css';

function Manoeuvre() {
  const dispatch = useDispatch();
  const {
    ManoeuvreType, ManualType, MotoriseType, TelecommandeType,
    CommandeType, InterrupteurType, SortieDeCableType
  } = useSelector((state) => state.volet);

  const handleChange = (setType) => (option) => {
    dispatch(setType(option.label));
  }

  const choices = [
    { label: 'Manuel', description: 'Fonctionne par une commande manuelle.', image: '../../assets/manuel.png' },
    { label: 'Motorisé', description: 'Actionné électriquement', image: '../../assets/motorise.png' }
  ];

  return (
    <div className="ma-container">
      <OptionSelector
        options={choices}
        selectedOption={ManoeuvreType}
        handleChange={handleChange(setManoeuvreType)}
        type="choice"
      />
      {ManoeuvreType === 'Manuel' && (
        <>
        <h2 className="text">Outil De Commande</h2>
        <ManualSelector
          selectedOption={ManualType}
          handleChange={handleChange(setManualType)}
        />
      </>
      )}
      {ManoeuvreType === 'Motorisé' && (
        <>
          <h2 className="text">Type de Motorisation (marque : Becker)</h2>
          <MotoriseSelector
            selectedOption={MotoriseType}
            handleChange={handleChange(setMotoriseType)}
          />
          {MotoriseType === 'Radio' && (
            <>
              <h2 className="text">Télécommande :</h2>
              <TelecommandeSelector
                selectedOption={TelecommandeType}
                handleChange={handleChange(setTelecommandeType)}
              />
            </>
          )}
          {MotoriseType === 'Filaire' && (
            <>
              <h2 className="text">Interrupteur</h2>
              <InterrupteurSelector
                selectedOption={InterrupteurType}
                handleChange={handleChange(setInterrupteurType)}
              />
            </>
          )}
            <h2 className="text">Sortie de câble</h2>
      <SortieDeCableSelector
        selectedOption={SortieDeCableType}
        handleChange={handleChange(setSortieDeCableType)}
      />
        </>
      )}
    </div>
  );
}

export default Manoeuvre;
