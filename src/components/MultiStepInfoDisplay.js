import React from 'react';
import { useSelector } from 'react-redux';
import './MultiStepInfoDisplay.css';

const MultiStepInfoDisplay = () => {
  const prices = {
    lameSelection: 0.0, // Example price
    dimensions: 0.0, // Example base price for dimensions
    installationType: 0.0,
    selectedColors: 0.0, // Flat rate for any color selection
    ManoeuvreType: 0.0, // Example price for ManoeuvreType
  };

  const selectedCoulisseColor = useSelector((state) => state.volet.selectedColor.coulisse);
  const selectedTablierColor = useSelector((state) => state.volet.selectedColor.tablier);
  const selectedLameFinaleColor = useSelector((state) => state.volet.selectedColor.lameFinale);
  const lameSelection = useSelector((state) => state.volet.lameSelection);
  const dimensions = useSelector((state) => state.volet.dimensions);
  const installationType = useSelector((state) => state.volet.installationType);
  const ManoeuvreType = useSelector((state) => state.volet.ManoeuvreType);
  const ManualType = useSelector((state) => state.volet.ManualType);
  const MotoriseType = useSelector((state) => state.volet.MotoriseType);
  const TelecommandeType = useSelector((state) => state.volet.TelecommandeType);
  const InterrupteurType = useSelector((state) => state.volet.InterrupteurType);
  const SortieDeCableType = useSelector((state) => state.volet.SortieDeCableType);

  // Simplistic total price calculation for demonstration
  const totalPrice = prices.lameSelection + prices.dimensions + prices.installationType + prices.selectedColors + prices.ManoeuvreType;

  return (
    <div className="info-display">
      <table>
        <tbody>
          <tr>
            <th>Type de Lame</th>
            <td>{lameSelection}</td>
            <td className="price">{prices.lameSelection}€</td>
          </tr>
          <tr>
            <th>Dimensions</th>
            <td>Largeur: {dimensions.Largeur} mm, Hauteur: {dimensions.Hauteur} mm</td>
            <td className="price">{prices.dimensions}€</td>
          </tr>
          <tr>
            <th>Type d'Installation</th>
            <td>{installationType}</td>
            <td className="price">{prices.installationType}€</td>
          </tr>
          <tr>
            <th>Couleurs</th>
            <td>Coulisse: {selectedCoulisseColor},<br/>Tablier: {selectedTablierColor},<br/>Lame Finale: {selectedLameFinaleColor}</td>
            <td className="price">{prices.selectedColors}€</td>
          </tr>
          <tr>
            <th>Type de Manoeuvre</th>
            <td>{ManoeuvreType}</td>
            <td className="price">{prices.ManoeuvreType}€</td>
          </tr>
          {ManoeuvreType === 'Manuel' && (
            <tr>
              <th>Outil de commande</th>
              <td>{ManualType}</td>
              <td className="price">Included</td>
            </tr>
          )}
          {ManoeuvreType === 'Motorisé' && (
            <>
              <tr>
                <th>Type de motorisation</th>
                <td>{MotoriseType}</td>
                <td className="price">Included</td>
              </tr>
              {MotoriseType !== 'Filaire' && (
                <tr>
                  <th>Télécomande</th>
                  <td>{TelecommandeType}</td>
                  <td className="price">Included</td>
                </tr>
              )}
              <tr>
                <th>Interrepteur</th>
                <td>{InterrupteurType}</td>
                <td className="price">Included</td>
              </tr>
              <tr>
                <th>Sortie de cable</th>
                <td>{SortieDeCableType}</td>
                <td className="price">Included</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MultiStepInfoDisplay;
