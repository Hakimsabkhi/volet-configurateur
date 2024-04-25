import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInstallationType, selectInstallationType } from '../../features/voletSlice';
import Image1 from '../../assets/sous-lanto.png';
import Image2 from '../../assets/en-inverse.png';
import Image3 from '../../assets/en-applique.png';
import "./typeDePose.css";

function TypeDePose({ enableNextButton }) {
  const dispatch = useDispatch();
  const installationType = useSelector(selectInstallationType);
  const [hoveredChoice, setHoveredChoice] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const choices = [
    { label: 'sous lanteau', description: 'Coffre pan coupé ou quart de rond aluminium differentes couleurs', image: Image1 },
    { label: 'sous lanteau inverse', description: 'Coffre pan coupé ou quart de rond aluminium differentes couleurs', image: Image2 },
    { label: 'En applique', description: 'Coffre pan coupé ou quart de rond aluminium differentes couleurs', image: Image3 }
  ];

  useEffect(() => {
    console.log("useEffect Triggered: ", { installationType });
    enableNextButton(installationType !== '');
  }, [installationType]);

  const handleMouseEnter = (event, choice) => {
    const rect = event.target.getBoundingClientRect();
    setPopupPosition({ top: rect.top + window.scrollY, left: rect.left + rect.width });
    setHoveredChoice(choice);
  };

  return (
    <div className="container">
      <div className="choices-container">
        {choices.map((choice) => (
          <label key={choice.label} className={`choice-btn ${choice.label === installationType ? "selected" : ""}`} onMouseEnter={(e) => handleMouseEnter(e, choice)} onMouseLeave={() => setHoveredChoice(null)}>
            <img src={choice.image} alt={choice.label} className="button-image" />
            <div className='details'>
              <div className='sous-details'>
                <h2 className="choice-label">{choice.label}</h2>
                <input
                  type="checkbox"
                  className="hidden-checkbox"
                  checked={choice.label === installationType}
                  id={`checkbox-${choice.label}`}
                  onChange={() => dispatch(setInstallationType(choice.label))}
                  required
                />
                <label htmlFor={`checkbox-${choice.label}`}></label>
              </div>
              <p className="choice-description">{choice.description}</p>
            </div>
          </label>
        ))}
      </div>
      {hoveredChoice && (
        <div className="popup-info" style={{ top: `${popupPosition.top}px`, left: `${popupPosition.left}px` }}>
          <h2 className="choice-label">{hoveredChoice.label}</h2>
          <img className="popup-image" src={hoveredChoice.image} alt={hoveredChoice.label} />
          <p>{hoveredChoice.description}</p>
        </div>
      )}
    </div>
  );
}

export default TypeDePose;
