import React, { useState } from 'react';
import StepNavigator from './stepNavigator';
import Manoeuvre from './steps/manoeuvre';
import LameEtDimension from './steps/LameEtdimension'; // Corrected spelling
import CouleurVolet from './steps/couleurVolet';
import TypeDePose from './steps/typeDePose';
import MultiStepInfoDisplay from './MultiStepInfoDisplay';
import dimensionCostCalculator from './calculator/dimensionCostCalculator'; // Corrected spelling
import Information from './formulaire/info'; // Consistent naming

function MultiStepMenu({ onSelectionsChange }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState({
    step1: {},
    step2: {},
    step3: {},
    step4: {}
  });
  const [showInformation, setShowInformation] = useState(false); // Adjusted for clarity and consistency

  const steps = [
    { id: 1, title: 'Lame et Dimension', Component: LameEtDimension },
    { id: 2, title: 'Type de pose', Component: TypeDePose },
    { id: 3, title: 'Couleurs', Component: CouleurVolet },
    { id: 4, title: 'Manoeuvre', Component: Manoeuvre },
    { id: 5, title: 'Recap de votre produit', Component: MultiStepInfoDisplay } // Recap step
  ];

  // Enhanced setCurrentStep to also handle showInformation
  const enhancedSetCurrentStep = (step) => {
    setCurrentStep(step);
    setShowInformation(false); // Ensure info display is closed on navigating
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep < steps.length ? prevStep + 1 : prevStep));
  };

  const previousStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const modifyProduct = () => {
    setCurrentStep(1);
    setShowInformation(false);
  };

  const toggleInformationDisplay = () => {
    setShowInformation(!showInformation);
  };

  const renderCurrentStep = () => {
    const current = steps.find((step) => step.id === currentStep);
    if (current) {
      const StepComponent = current.Component;
      return <StepComponent setSelections={setSelections} selections={selections} />;
    }
    return null;
  };

  const stepsForNavigator = steps.filter((step) => step.id !== 5);

  return (
    <div className="MenuGroupe">
      <div className="steps-menu">
        <h1 className="menu-title">Volet roulant rénovation sur mesure</h1>
        <StepNavigator currentStep={currentStep} setCurrentStep={enhancedSetCurrentStep} totalSteps={stepsForNavigator.length} titles={stepsForNavigator.reduce((acc, step) => ({ ...acc, [step.id]: step.title }), {})} />
      </div>
      <div className="multi-step-menu">
        <div className='StepStyleManoeuvre'>
          <h2>{steps.find((step) => step.id === currentStep)?.title}</h2>
          {renderCurrentStep()}
        </div>
        <div className="container">
          {currentStep > 1 && currentStep < steps.length && (
            <button onClick={previousStep} className="nav-btn previous">
              Étape Précédente
            </button>
          )}
          {currentStep < steps.length && (
            <button onClick={nextStep} className="nav-btn">
              {currentStep === steps.length - 1 ? 'Finaliser' : 'Étape Suivante'}
            </button>
          )}
          {currentStep === steps.length && (
            <>
              <button onClick={modifyProduct} className="nav-btn">
                Modifier mon produit
              </button>
              <button onClick={toggleInformationDisplay} className="nav-btn">
                Recevoir mon devis
              </button>
            </>
          )}
        </div>
      </div>
      {showInformation && <Information onClose={toggleInformationDisplay} />}
      <div>
        <dimensionCostCalculator />
      </div>
    </div>
  );
}

export default MultiStepMenu;
