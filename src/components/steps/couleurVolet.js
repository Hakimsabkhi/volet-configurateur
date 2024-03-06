import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setColor } from '../../features/voletSlice'
import './couleurVolet.css' // Ensure your CSS styles are updated accordingly

function CouleurVolet() {
  const dispatch = useDispatch()
  const selectedColors = useSelector((state) => state.volet.selectedColor)

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
  }

  const handleColorSelection = (colorName, category) => {
    dispatch(setColor({ color: colorName, category }))
  }

  const renderColorChoices = (category) => {
    const colors = colorOptions[category] || {}
    return Object.entries(colors).map(([colorName, colorCode]) => (
      <div key={`${category}-${colorName}`} className={`color-choice ${colorName === selectedColors[category] ? 'selected' : ''}`} onClick={() => handleColorSelection(colorName, category)} style={{ cursor: 'pointer', padding: '10px', marginBottom: '10px', textAlign: 'center' }}>
        <input
          type="checkbox"
          id={`label-${colorName}-${category}`}
          name={`color-${category}`}
          value={colorName}
          checked={colorName === selectedColors[category]}
          onChange={() => {}} // Add an empty onChange handler if needed
          aria-labelledby={`label-${colorName}-${category}`} // Use the correct ID here
          className='ColorInput'
        />
        <label
          id={`label-${colorName}-${category}`} // Use the correct ID here
          htmlFor={`${colorName}-${category}`}
          /* className={colorName === selectedColors[category] ? 'selected color-label' : 'color-label'} */
          className={`color-label ${colorName === selectedColors[category] ? 'selected' : ''}`}
          style={{ backgroundColor: colorCode }}></label>

        {/* Displaying color name and code */}
        <div style={{ marginTop: '5px' }}>
          <span>{colorName.replace(/-/g, ' ')}</span>
        </div>
      </div>
    ))
  }

  return (
    <div>
      <h2>Couleur Coulisse</h2>
      <div className="colors-row">{renderColorChoices('coulisse')}</div>
      <h2>Couleur Tablier</h2>
      <div className="colors-row">{renderColorChoices('tablier')}</div>
      <h2>Couleur Lame Finale</h2>
      <div className="colors-row">{renderColorChoices('lameFinale')}</div>
    </div>
  )
}

export default CouleurVolet
