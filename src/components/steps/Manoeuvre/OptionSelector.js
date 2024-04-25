import React, { useState, useRef } from 'react';
import '../manoeuvre.css';

const OptionSelector = ({ options, selectedOption, handleChange, type }) => {
  const [hoveredChoice, setHoveredChoice] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const containerRef = useRef(null);

  const handleMouseEnter = (event, option) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    setPopupPosition({ top: containerRect.top + window.scrollY, left: containerRect.right });
    setHoveredChoice(option);
  };

  return (
    <div>
      <div ref={containerRef} className="ma-container">
        {options.map((option, index) => (
          <label key={index} 
                 onClick={() => handleChange(option)} 
                 className={`ma-btn ${option.label === selectedOption ? 'selected' : ''}`}
                 onMouseEnter={(e) => handleMouseEnter(e, option)} 
                 onMouseLeave={() => setHoveredChoice(null)}>
            {/* {option.image && <img src={option.image} alt={option.label} className="option-image" />} */}
            <div className="details">
              <div className="ma-sous-details">
                <h2 className="choice-label">{option.label}</h2>
                {/* <p className="option-description">{option.description}</p> */}
                <input
                  type="checkbox"
                  id={`checkbox-${option.label}-${type}`}
                  name={`checkbox-${option.label}-${type}`}
                  checked={option.label === selectedOption}
                  onChange={() => {}} // You might want to handle changes
                  className="choice-checkbox"
                />
              </div>
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
};

export default OptionSelector;
