import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setManoeuvreType, setManualType, setMotoriseType, setTelecommandeType, setCommandeType, setInterrupteurType, setSortieDeCableType } from '../../features/voletSlice'
import ImageMo from '../../assets/motorise.png'
import ImageMa from '../../assets/manuel.png'
import ImageSa from '../../assets/sangle.png'
import ImageMan from '../../assets/manivelle.png'
import ImageF from '../../assets/filaire.png'
import ImageR from '../../assets/radio.png'
import ImageG from '../../assets/Gauche.png'
import ImageD from '../../assets/Droite.png'
import ImageA from '../../assets/EnApplique.png'
import ImageC from '../../assets/Encastree.png'
import './manoeuvre.css'

function Manoeuvre() {
  const dispatch = useDispatch()
  const manoeuvreType = useSelector((state) => state.volet.ManoeuvreType)
  const manualType = useSelector((state) => state.volet.ManualType)
  const motoriseType = useSelector((state) => state.volet.MotoriseType)
  const telecommandeType = useSelector((state) => state.volet.TelecommandeType)
  const commandeType = useSelector((state) => state.volet.CommandeType)
  const interrupteurType = useSelector((state) => state.volet.InterrupteurType)
  const sortieDeCableType = useSelector((state) => state.volet.SortieDeCableType)

  const handleManoeuvreChoice = (manoeuvreChoice) => {
    dispatch(setManoeuvreType(manoeuvreChoice.label))
  }

  const handleManualOption = (maOption) => {
    dispatch(setManualType(maOption.label))
  }

  const handleMotoriseOption = (MoOption) => {
    dispatch(setMotoriseType(MoOption.label))
  }

  const handleTelecommandeOption = (Toption) => {
    dispatch(setTelecommandeType(Toption.label))
  }

  const handleCommandeOption = (Coption) => {
    dispatch(setCommandeType(Coption.label))
  }

  const handleInterrupteurOption = (Eoption) => {
    dispatch(setInterrupteurType(Eoption.label))
  }

  const handleSortieDeCableOption = (Eoption) => {
    dispatch(setSortieDeCableType(Eoption.label))
  }

  const choices = [
    { label: 'Manuel', description: 'Fonctionne par une commande manuelle.', image: ImageMa },
    { label: 'Motorisé', description: 'Actionné électriquement', image: ImageMo }
  ]

  const manualOptions = [
    { label: 'Manivelle', description: 'Description for Manuel 1', image: ImageMan },
    { label: 'Sangle', description: 'Description for Manuel 2', image: ImageSa }
  ]

  const motoriseOptions = [
    { label: 'Filaire', description: 'Description for Motorisé 1', image: ImageF },
    { label: 'Radio', description: 'Description for Motorisé 2', image: ImageR }
  ]

  const telecommandeOptions = [
    { label: 'Sans', description: 'Sans télécommande', image: ImageC },
    { label: 'Avec', description: 'Avec télécommande', image: ImageC }
  ]

  const commandeOptions = [
    { label: 'Emetteur mural', description: 'Interrupteur encastré', image: ImageC },
    { label: 'Télécommande', description: 'Interrupteur en applique', image: ImageA }
  ]

  const interrupteurOptions = [
    { label: 'Sans', description: 'Interrupteur encastré', image: ImageC },
    { label: 'Encastree', description: 'Interrupteur encastré', image: ImageC },
    { label: 'En applique', description: 'Interrupteur en applique', image: ImageA }
  ]

  const sortieDeCableOptions = [
    { label: 'Gauche', description: 'Sortie de câble à gauche', image: ImageG },
    { label: 'Droite', description: 'Sortie de câble à droite', image: ImageD }
  ]

  return (
    <div className="ma-container">
      <div className="ma-container">
        {choices.map((manoeuvreChoice, index) => (
          <label key={index} onClick={() => handleManoeuvreChoice(manoeuvreChoice)} className={`ma-btn ${manoeuvreChoice.label === manoeuvreType ? 'selected' : ''}`}>
            {/* <img src={manoeuvreChoice.image} alt={manoeuvreChoice.label} className="ma-button-image" /> */}
            <div className="details">
              <div className="ma-sous-details">
                <h2 className="choice-label">{manoeuvreChoice.label}</h2>
                <input type="checkbox" id={`checkbox-${manoeuvreChoice.label}`} name={`checkbox-${manoeuvreChoice.label}`} checked={manoeuvreType === manoeuvreChoice.label} onChange={() => {}} className="choice-checkbox" />
              </div>
            </div>
          </label>
        ))}
      </div>
      {manoeuvreType === 'Manuel' && (
        <div>
          <h3 className="text">Outil De Commande</h3>
          <div className="ma-container">
            {manualOptions.map((maOption, index) => (
              <label key={index} onClick={() => handleManualOption(maOption)} className={`ma-btn ${maOption.label === manualType ? 'selected' : ''}`}>
                {/* <img src={maOption.image} alt={maOption.label} className="ma-button-image" /> */}
                <div className="details">
                  <div className="ma-sous-details">
                    <h2 className="choice-label">{maOption.label}</h2>
                    <input type="checkbox" id={`checkbox-${maOption.label}`} name={`checkbox-${maOption.label}`} checked={manualType === maOption.label} onChange={() => {}} className="choice-checkbox" />
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}
      {manoeuvreType === 'Motorisé' && (
        <div>
          <h3 className="text">Type de Motorisation (marque : Becker)</h3>
          <div className="ma-container">
            {motoriseOptions.map((MoOption, index) => (
              <label key={index} onClick={() => handleMotoriseOption(MoOption)} className={`ma-btn ${MoOption.label === motoriseType ? 'selected' : ''}`}>
              {/*   <img src={MoOption.image} alt={MoOption.label} className="ma-button-image" /> */}
                <div className="details">
                  <div className="ma-sous-details">
                    <h2 className="choice-label">{MoOption.label}</h2>
                    <input type="checkbox" id={`checkbox-${MoOption.label}`} name={`checkbox-${MoOption.label}`} checked={motoriseType === MoOption.label} onChange={() => {}} className="choice-checkbox" />
                  </div>
                </div>
              </label>
            ))}
          </div>
          {motoriseType === 'Radio' && (
            <div>
              <h3 className="text">Télécommande :</h3>
              <div className="ma-container">
                {telecommandeOptions.map((Toption, index) => (
                  <label key={index} onClick={() => handleTelecommandeOption(Toption)} className={`ma-btn ${Toption.label === telecommandeType ? 'selected' : ''}`}>
                  {/*   <img src={Toption.image} alt={Toption.label} className="ma-button-image" /> */}
                    <div className="details">
                      <div className="ma-sous-details">
                        <h2 className="choice-label">{Toption.label}</h2>
                        <input type="checkbox" id={`checkbox-${Toption.label}`} name={`checkbox-${Toption.label}`} checked={telecommandeType === Toption.label} onChange={() => {}} className="choice-checkbox" />
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              {telecommandeType === 'Avec' && (
            <div>
              <h3 className="text"> Commande :</h3>
              <div className="ma-container">
                {commandeOptions.map((Coption, index) => (
                  <label key={index} onClick={() => handleCommandeOption(Coption)} className={`ma-btn ${Coption.label === commandeType ? 'selected' : ''}`}>
                  {/*   <img src={Coption.image} alt={Coption.label} className="ma-button-image" /> */}
                    <div className="details">
                      <div className="ma-sous-details">
                        <h2 className="choice-label">{Coption.label}</h2>
                        <input type="checkbox" id={`checkbox-${Coption.label}`} name={`checkbox-${Coption.label}`} checked={commandeType === Coption.label} onChange={() => {}} className="choice-checkbox" />
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}
            </div>
          )}        
          {motoriseType === 'Filaire' && (
              <div>
                <h3>Interrupteur</h3>
                <div className="ma-container-INTERRUPTEUR">
                  {interrupteurOptions.map((Eoption, index) => (
                    <label key={index} onClick={() => handleInterrupteurOption(Eoption)} className={`INTERRUPTEUR-btn ${Eoption.label === interrupteurType ? 'selected' : ''}`}>
                      {/* <img src={Eoption.image} alt={Eoption.label} className="ma-button-image" /> */}
                      <div className="details">
                        <div className="ma-sous-details">
                          <h2 className="choice-label">{Eoption.label}</h2>
                          <input type="checkbox" id={`checkbox-${Eoption.label}`} name={`checkbox-${Eoption.label}`} checked={interrupteurType === Eoption.label} onChange={() => {}} className="choice-checkbox" />
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
          )}
              <div>
                <h3>Sortie de câble</h3>
                <div className="ma-container">
                  {sortieDeCableOptions.map((Coption, index) => (
                    <label key={index} onClick={() => handleSortieDeCableOption(Coption)} className={`ma-btn ${Coption.label === sortieDeCableType ? 'selected' : ''}`}>
                    {/*   <img src={Coption.image} alt={Coption.label} className="ma-button-image" /> */}
                      <div className="details">
                        <div className="ma-sous-details">
                          <h2 className="choice-label">{Coption.label}</h2>
                          <input type="checkbox" id={`checkbox-${Coption.label}`} name={`checkbox-${Coption.label}`} checked={sortieDeCableType === Coption.label} onChange={() => {}} className="choice-checkbox" />
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
        </div>
      )}
    </div>
  )
}
export default Manoeuvre
