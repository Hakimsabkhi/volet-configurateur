import React from 'react';
import '../styles.css'

function StepNavigator({ currentStep, setCurrentStep, totalSteps, titles }) {
  return (
    <div className="step-navigator">
      {[...Array(totalSteps)].map((_, index) => {
        const stepNumber = index + 1;
        return (
          <button
            key={stepNumber}
            className={`step-button ${currentStep === stepNumber ? 'active' : ''}`}
            onClick={() => setCurrentStep(stepNumber)}
          >
            {titles[stepNumber]}
          </button>
        );
      })}
    </div>
  );
}


export default StepNavigator;
