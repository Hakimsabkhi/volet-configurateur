import React from 'react';
import { useSelector } from 'react-redux';
import './MultiStepInfoDisplay.css';

const MultiStepInfoDisplay = () => {
  // Retrieve selected color state for each category
  const selectedCoulisseColor = useSelector((state) => state.volet.selectedColor.coulisse);
  const selectedTablierColor = useSelector((state) => state.volet.selectedColor.tablier);
  const selectedLameFinaleColor = useSelector((state) => state.volet.selectedColor.lameFinale);

  // Retrieve other relevant state values
  const lameSelection = useSelector((state) => state.volet.lameSelection);
  const dimensions = useSelector((state) => state.volet.dimensions);
  const installationType = useSelector((state) => state.volet.installationType);
  const ManoeuvreType = useSelector((state) => state.volet.ManoeuvreType);
  const ManualType = useSelector((state) => state.volet.ManualType);
  const MotoriseType = useSelector((state) => state.volet.MotoriseType);
  const TelecommandeType = useSelector((state) => state.volet.TelecommandeType);
  const InterrupteurType = useSelector((state) => state.volet.InterrupteurType);
  const SortieDeCableType = useSelector((state) => state.volet.SortieDeCableType);


  return (
    <div className="info-display">
      <p>Type de Lame: {lameSelection}</p>
      <p>Largeur: {dimensions.Largeur} mm</p>
      <p>Hauteur: {dimensions.Hauteur} mm</p>
      <p>Type d'Installation: {installationType}</p>
      <p>Couleur Coulisse: {selectedCoulisseColor}</p>
      <p>Couleur Tablier: {selectedTablierColor}</p>
      <p>Couleur Lame Finale: {selectedLameFinaleColor}</p>
      <p>Type de Manoeuvre: {ManoeuvreType}</p>

      {ManoeuvreType === 'Manuel' && <p>OUTIL DE COMMANDE: {ManualType}</p>}
      {ManoeuvreType === 'Motorisé' && (
        <>
          <p>TYPE DE MOTORISATION: {MotoriseType}</p>
          {/* Conditional rendering based on MotoriseType */}
          {MotoriseType !== 'Filaire' && <p>TÉLÉCOMMANDE: {TelecommandeType}</p>}
          <p>INTERRUPTEUR: {InterrupteurType}</p>
          <p>SORTIE DE CÂBLE: {SortieDeCableType}</p>
        </>
      )}
    </div>
  );
};

export default MultiStepInfoDisplay;
