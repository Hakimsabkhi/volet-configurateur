// Importing necessary hooks and functions from React and Redux, as well as assets and styles.
import React, { useEffect } from 'react' // React base and the useEffect hook for side effects.
import { useDispatch, useSelector } from 'react-redux' // Hooks for interacting with the Redux store.
import { setLameSelection, setDimensions } from '../../features/voletSlice' // Action creators from the Redux slice.
import Lame41Image from '../../assets/lame-41.png' // Image asset for "Lame 41".
import Lame55Image from '../../assets/lame-55.png' // Image asset for "Lame 55".
import './LameEtDimention.css' // Styles specific to this component.

// The functional component declaration with destructured prop for handling selection change.
function LameEtDimention() {
  const dispatch = useDispatch() // Hook to dispatch actions to the Redux store.
  const lameSelection = useSelector((state) => state.volet.lameSelection) // Retrieves the current lame selection from the Redux store.
  const dimensions = useSelector((state) => state.volet.dimensions) // Retrieves the current dimensions from the Redux store.

  // Function to handle selection of a lame type.
  const handleLameChoice = (lameChoice) => {
    dispatch(setLameSelection(lameChoice.label)) // Dispatches action to update the lame selection in the store.
  }

  // Function to handle changes in dimension inputs.
  const handleDimensionChange = (dimensionName, value) => {
    dispatch(setDimensions({ ...dimensions, [dimensionName]: Number(value) })) // Updates dimensions directly without validation here.
  }

  // Function to validate and clamp dimension values on input field blur.
  const handleBlur = (dimensionName, value) => {
    let newValue = Number(value)
    let min = 600 // Minimum value for dimensions.
    // Conditional max values based on the lame selection and dimension type.
    let max = dimensionName === 'Largeur' ? (lameSelection === 'Lame 41' ? 3000 : 3500) : lameSelection === 'Lame 41' ? 2700 : 3000
    newValue = Math.max(Math.min(newValue, max), min) // Clamps the newValue between min and max.
    dispatch(setDimensions({ ...dimensions, [dimensionName]: newValue })) // Dispatches the clamped value update.
  }

  const choices = [
    { label: 'Lame 41', description: "Lames en Aluminium plié et injectées de mousse isolante.", image: Lame41Image },
    { label: 'Lame 55', description: 'Lame volet roulant aluminium isolée 55x14.', image: Lame55Image }
  ]

  // Render method returns JSX for the component UI.
  return (
    <div className='LameetDimention'>
      <div className="choices-container">
        {choices.map((lameChoice, index) => (
          <label key={index} onClick={() => handleLameChoice(lameChoice)} className={`choice-btn ${lameChoice.label === lameSelection ? 'selected' : ''}`}>
            <img src={lameChoice.image} alt={lameChoice.label} className="button-image" />
            <div className="details">
              <div className="sous-details">
                <h2 className="choice-label">{lameChoice.label}</h2>
                <input type="checkbox" id={`checkbox-${lameChoice.label}`} name={`checkbox-${lameChoice.label}`} checked={lameSelection === lameChoice.label} onChange={() => handleLameChoice(lameChoice)} className="choice-checkbox" />
              </div>
              <p className="choice-description">{lameChoice.description}</p>
            </div>
          </label>
        ))}
      </div>

      <div className="DimentionSection">
        <div className="dimension-input-container">
          {/* Input for "Largeur" dimension with dynamic max value based on lame selection. */}
          <h2 htmlFor="Largeur">Largeur en mm (min: 600 mm - max: {lameSelection === 'Lame 41' ? 3000 : 3500}):</h2>
          <input type="number" id="Largeur" className="dimension-input" value={dimensions.Largeur} onChange={(e) => handleDimensionChange('Largeur', e.target.value)} onBlur={(e) => handleBlur('Largeur', e.target.value)} min="600" max={lameSelection === 'Lame 41' ? 3000 : 3500} />
        </div>
        <div className="dimension-input-container">
          {/* Input for "Hauteur" dimension with dynamic max value based on lame selection. */}
          <h2 htmlFor="Hauteur">Hauteur en mm (min: 600 - max: {lameSelection === 'Lame 41' ? 2700 : 3000}):</h2>
          <input type="number" id="Hauteur" className="dimension-input" value={dimensions.Hauteur} onChange={(e) => handleDimensionChange('Hauteur', e.target.value)} onBlur={(e) => handleBlur('Hauteur', e.target.value)} min="600" max={lameSelection === 'Lame 41' ? 2700 : 3000} />
        </div>
      </div>
    </div>
  )
}

export default LameEtDimention // Exporting the component for use in other parts of the application.
