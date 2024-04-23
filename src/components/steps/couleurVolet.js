import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColor } from '../../features/voletSlice';
import './couleurVolet.css';

function CouleurVolet({ enableNextButton }) {
  const dispatch = useDispatch();
  const selectedColors = useSelector((state) => state.volet.selectedColor);

  const colorOptions = {
    coulisse: {
      'Blanc': '#ffffff',
      'Gris-clair': '#d3d3d3',
      'Gris-métallique': '#808080',
      'Gris-anthracite': '#333333',
      'Marron': '#8b4513',
      'Chêne-doré': '#daa520'
    },
    tablier: {
      'Blanc': '#ffffff',
      'Gris-clair': '#d3d3d3',
      'Gris-métallique': '#808080',
      'Gris-anthracite': '#333333',
      'Marron': '#8b4513',
      'Chêne-doré': '#daa520'
    },
    lameFinale: {
      'Blanc': '#ffffff',
      'Gris-clair': '#d3d3d3',
      'Gris-métallique': '#808080',
      'Gris-anthracite': '#333333',
      'Marron': '#8b4513',
      'Chêne-doré': '#daa520'
    }
  };

  useEffect(() => {
    // Check if all categories have a selected color to enable the next step button
    const allSelected = Object.keys(colorOptions).every(category => selectedColors[category] && selectedColors[category] !== '');
    enableNextButton(allSelected);
  }, [selectedColors, enableNextButton]);

  const handleColorSelection = (colorName, category) => {
    dispatch(setColor({ color: colorName, category }));
  };

  const renderColorChoices = (category) => {
    const colors = colorOptions[category] || {};
    return Object.entries(colors).map(([colorName, colorCode]) => (
      <div key={`${category}-${colorName}`} className={`color-choice ${colorName === selectedColors[category] ? 'selected' : ''}`} onClick={() => handleColorSelection(colorName, category)} style={{ cursor: 'pointer', padding: '10px', marginBottom: '10px', textAlign: 'center' }}>
        <input
          type="checkbox"
          id={`label-${colorName}-${category}`}
          name={`color-${category}`}
          value={colorName}
          checked={colorName === selectedColors[category]}
          onChange={() => {}} // No action needed on change as the click handler takes care of it
          aria-labelledby={`label-${colorName}-${category}`}
          className='ColorInput'
          required
        />
        <label
          id={`label-${colorName}-${category}`}
          htmlFor={`${colorName}-${category}`}
          className={`color-label ${colorName === selectedColors[category] ? 'selected' : ''}`}
          style={{ backgroundColor: colorCode }}></label>
        <div style={{ marginTop: '5px' }}>
          <span>{colorName.replace(/-/g, ' ')}</span>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <h2>Couleur Coulisse</h2>
      <div className="colors-row">{renderColorChoices('coulisse')}</div>
      <h2>Couleur Tablier</h2>
      <div className="colors-row">{renderColorChoices('tablier')}</div>
      <h2>Couleur Lame Finale</h2>
      <div className="colors-row">{renderColorChoices('lameFinale')}</div>
    </div>
  );
}

export default CouleurVolet;
