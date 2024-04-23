import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInstallationType, selectInstallationType } from '../../features/voletSlice';
import Image1 from '../../assets/sous-lanto.png';
import Image2 from '../../assets/en-inverse.png';
import Image3 from '../../assets/en-applique.png';
import "./typeDePose.css"

function TypeDePose({ enableNextButton }) {
  const dispatch = useDispatch();
  const installationType = useSelector(selectInstallationType);

  const choices = [
    { label: 'sous lanteau', description: 'Coffre pan coupé ou quart de rond aluminium differentes couleurs', image: Image1 },
    { label: 'sous lanteau inverse', description: 'Coffre pan coupé ou quart de rond aluminium differentes couleurs', image: Image2 },
    { label: 'En applique', description: 'Coffre pan coupé ou quart de rond aluminium differentes couleurs', image: Image3 }
  ];

  useEffect(() => {
    // Enable the next step button only if an installation type has been selected
    enableNextButton(installationType !== '');
  }, [installationType, enableNextButton]);

  const handleChoice = (choice) => {
    dispatch(setInstallationType(choice.label));
  };

  return (
    <div className="choices-container">
      {choices.map((choice) => (
        <label key={choice.label} className={`choice-btn ${choice.label === installationType ? "selected" : ""}`} onClick={() => handleChoice(choice)}>
          <img src={choice.image} alt={choice.label} className="button-image" />
          <div className='details'>
            <div className='sous-details'>
              <h2 className="choice-label">{choice.label}</h2>
              <input
                type="checkbox"
                className="hidden-checkbox"
                checked={choice.label === installationType}
                id={`checkbox-${choice.label}`}
                onChange={() => handleChoice(choice)} // Simplify change handling
                required
              />
              <label htmlFor={`checkbox-${choice.label}`}></label>
            </div>
            <p className="choice-description">{choice.description}</p>
          </div>
        </label>
      ))}
    </div>
  );
}

export default TypeDePose;
