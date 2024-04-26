import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setColor } from '../../features/voletSlice'
import './couleurVolet.css'
import { colorOptions } from '../../assets/Data'

function CouleurVolet({ enableNextButton }) {
  const dispatch = useDispatch()
  const selectedColors = useSelector((state) => state.volet.selectedColor)

  useEffect(() => {
    const allSelected = Object.keys(colorOptions).every((category) => selectedColors[category] && selectedColors[category] !== '')
    enableNextButton(allSelected)
  }, [selectedColors]) // Temporarily remove enableNextButton

  const handleColorSelection = (colorName, category) => {
    dispatch(setColor({ color: colorName, category }))
  }

  const renderColorChoices = (category) => {
    const colors = colorOptions[category] || {}
    return Object.entries(colors).map(([colorName, colorCode]) => (
      <div key={`${category}-${colorName}`} className={`color-choice ${colorName === selectedColors[category] ? 'selected' : ''}`} onClick={() => handleColorSelection(colorName, category)} style={{ cursor: 'pointer', textAlign: 'center' }}>
        <input
          type="checkbox"
          id={`label-${colorName}-${category}`}
          name={`color-${category}`}
          value={colorName}
          checked={colorName === selectedColors[category]}
          onChange={() => {}} // No action needed on change as the click handler takes care of it
          aria-labelledby={`label-${colorName}-${category}`}
          className="ColorInput"
          required
        />
        {/* <label
          id={`label-${colorName}-${category}`}
          htmlFor={`${colorName}-${category}`}
          className={`color-label ${colorName === selectedColors[category] ? 'selected' : ''}`}
          style={{ backgroundColor: colorCode }}></label> */}
        <div>
          <span>{colorName.replace(/-/g, ' ')}</span>
        </div>
      </div>
    ))
  }

  return (
    <div className="ColorBox" >
      <div >
        <h2>Couleur Coulisse</h2>
        <div className="colors-row">{renderColorChoices('coulisse')}</div>
      </div>
      <div>
        <h2>Couleur Tablier</h2>
        <div className="colors-row">{renderColorChoices('tablier')}</div>
      </div>
      <div>
        <h2>Couleur Lame Finale</h2>
        <div className="colors-row">{renderColorChoices('lameFinale')}</div>
      </div>
    </div>
  )
}

export default CouleurVolet
