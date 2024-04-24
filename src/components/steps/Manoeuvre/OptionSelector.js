import React from 'react';
import '../manoeuvre.css';

const OptionSelector = ({ options, selectedOption, handleChange, type }) => {
  return (
    <div>
  
    <div className="ma-container">
      {options.map((option, index) => (
        <label key={index} onClick={() => handleChange(option)} className={`ma-btn ${option.label === selectedOption ? 'selected' : ''}`}>
          {/* {option.image && <img src={option.image} alt={option.label} className="option-image" />} */}
          <div className="details">
          <div className="ma-sous-details">
            <h2 className="choice-label">{option.label}</h2>
          {/*   <p className="option-description">{option.description}</p> */}
            <input
              type="checkbox"
              id={`checkbox-${option.label}-${type}`}
              name={`checkbox-${option.label}-${type}`}
              checked={option.label === selectedOption}
              onChange={() => {}}
              className="choice-checkbox"
            />
          </div>
          </div>
        </label>
      ))}
    </div>
    </div>
  );
}

export default OptionSelector;
