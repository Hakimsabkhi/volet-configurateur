import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLameSelection, setDimensions } from '../../features/voletSlice';
import Lame41Image from '../../assets/lame-41.png';
import Lame55Image from '../../assets/lame-55.png';
import './LameEtdimension.css';
import "./typeDePose.css";

function LameEtdimension({ enableNextButton }) {
  const dispatch = useDispatch();
  const lameSelection = useSelector(state => state.volet.lameSelection);
  const dimensions = useSelector(state => state.volet.dimensions);
  const [hoveredChoice, setHoveredChoice] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const isEnabled = lameSelection !== '' && dimensions.Largeur >= 600 && dimensions.Hauteur >= 600;
    console.log(`Enabling button: ${isEnabled}`); // Add debugging log
    enableNextButton(isEnabled);
  }, [lameSelection, dimensions]); // Remove enableNextButton from dependencies

  const handleMouseEnter = (event, choice) => {
    const rect = event.target.getBoundingClientRect();
    setPopupPosition({ top: rect.top + window.scrollY, left: rect.left + rect.width });
    setHoveredChoice(choice);
  };
  
  const handleLameChoice = (lameChoice) => {
    dispatch(setLameSelection(lameChoice.label));
  };

  const handleDimensionChange = (dimensionName, value) => {
    dispatch(setDimensions({ ...dimensions, [dimensionName]: Number(value) }));
  };

  const handleBlur = (dimensionName, value) => {
    let newValue = Number(value);
    let min = 600;
    let max = dimensionName === 'Largeur' ? (lameSelection === 'Lame 41' ? 3000 : 3500) : (lameSelection === 'Lame 41' ? 2700 : 3000);
    newValue = Math.max(Math.min(newValue, max), min);
    dispatch(setDimensions({ ...dimensions, [dimensionName]: newValue }));
  };

  const choices = [
    { label: 'Lame 41', description: 'Lames en Aluminium plié et injectées de mousse isolante.', image: Lame41Image },
    { label: 'Lame 55', description: 'Lame volet roulant aluminium isolée 55x14.', image: Lame55Image }
  ];

  return (
    <div className="Lameetdimension">
      <div className="choices-container">
        {choices.map((choice, index) => (
          <label key={index} onClick={() => handleLameChoice(choice)} className={`choice-btn ${choice.label === lameSelection ? 'selected' : ''}` } onMouseEnter={(e) => handleMouseEnter(e, choice)} onMouseLeave={() => setHoveredChoice(null)}>
            <img src={choice.image} alt={choice.label} className="button-image" />
            <div className="details">
              <div className="sous-details">
                <h2 className="choice-label">{choice.label}</h2>
                <input type="checkbox" id={`checkbox-${choice.label}`} name={`checkbox-${choice.label}`} checked={lameSelection === choice.label} onChange={() => handleLameChoice(choice)} className="choice-checkbox" required />
              </div>
              <p className="choice-description">{choice.description}</p>
            </div>
          </label>
        ))}
      </div>
      {hoveredChoice && (
        <div className="popup-info" style={{ top: `${popupPosition.top}px`, left: `${popupPosition.left}px` }}>
          <h2 className="choice-label">{hoveredChoice.label}</h2>
          <img className="popup-image"  src={hoveredChoice.image} alt={hoveredChoice.label} />
          <p>{hoveredChoice.description}</p>
        </div>
      )}  
      

      <div className="dimensionSection">
        <div className="dimension-input-container">
          <h2 htmlFor="Largeur">Largeur en mm (min: 600 mm - max: {lameSelection === 'Lame 41' ? 3000 : 3500}):</h2>
          <input type="number" id="Largeur" className="dimension-input" value={dimensions.Largeur} onChange={(e) => handleDimensionChange('Largeur', e.target.value)} onBlur={(e) => handleBlur('Largeur', e.target.value)} min="600" max={lameSelection === 'Lame 41' ? 3000 : 3500} />
        </div>
        <div className="dimension-input-container">
          <h2 htmlFor="Hauteur">Hauteur en mm (min: 600 mm - max: {lameSelection === 'Lame 41' ? 2700 : 3000}):</h2>
          <input type="number" id="Hauteur" className="dimension-input" value={dimensions.Hauteur} onChange={(e) => handleDimensionChange('Hauteur', e.target.value)} onBlur={(e) => handleBlur('Hauteur', e.target.value)} min="600" max={lameSelection === 'Lame 41' ? 2700 : 3000} />
        </div>
      </div>
    </div>
  );
}

export default LameEtdimension;
