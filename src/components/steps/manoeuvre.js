import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setManoeuvreType, setManualType, setMotoriseType, setTelecommandeType, setCommandeType, setInterrupteurType, setSortieDeCableType } from '../../features/voletSlice'
import ManualSelector from './Manoeuvre/ManualSelector'
import MotoriseSelector from './Manoeuvre/MotoriseSelector'
import TelecommandeSelector from './Manoeuvre/TelecommandeSelector'
import CommandeSelector from './Manoeuvre/CommandeSelector'
import InterrupteurSelector from './Manoeuvre/InterrupteurSelector'
import SortieDeCableSelector from './Manoeuvre/SortieDeCableSelector'
import OptionSelector from './Manoeuvre/OptionSelector'
import './manoeuvre.css'
import { ControlOptions } from '../../assets/Data'

function Manoeuvre({ enableNextButton }) {
  const dispatch = useDispatch()
  const { ManoeuvreType, ManualType, MotoriseType, TelecommandeType, CommandeType, InterrupteurType, SortieDeCableType } = useSelector((state) => state.volet)

  useEffect(() => {
    let isEnabled = false
    // Check if the base ManoeuvreType has been selected
    if (ManoeuvreType === 'Manuel') {
      isEnabled = ManualType !== '' // Ensure a manual type has been selected
    } else if (ManoeuvreType === 'Motorisé') {
      // Ensure a motorization type has been selected
      if (MotoriseType) {
        if (MotoriseType === 'Radio') {
          isEnabled = TelecommandeType !== ''
        } else if (MotoriseType === 'Filaire') {
          isEnabled = InterrupteurType !== '' && SortieDeCableType !== ''
        }
      }
    }
    // Call the enableNextButton with the resolved isEnabled status
    enableNextButton(isEnabled)
  }, [ManoeuvreType, ManualType, MotoriseType, TelecommandeType, InterrupteurType, SortieDeCableType])
  const handleChange = (setType) => (option) => {
    dispatch(setType(option.label))
  }

  return (
    <div className="ma-containerG">
      <OptionSelector options={ControlOptions} selectedOption={ManoeuvreType} handleChange={handleChange(setManoeuvreType)} type="choice" />
      {ManoeuvreType === 'Manuel' && (
        <div className="ManoeuvreSection">
          <h2 className="text">Outil De Commande</h2>
          <ManualSelector selectedOption={ManualType} handleChange={handleChange(setManualType)} />
        </div>
      )}
      {ManoeuvreType === 'Motorisé' && (
        <>
          <div className="ManoeuvreSectionG">
          <div className="ManoeuvreSection">
            <h2 className="text">Type de Motorisation (marque : Becker)</h2>
            <MotoriseSelector selectedOption={MotoriseType} handleChange={handleChange(setMotoriseType)} />
          </div>
          {MotoriseType === 'Radio' && (
            <>
              <div className="ManoeuvreSection">
                <h2 className="text">Télécommande</h2>
                <TelecommandeSelector selectedOption={TelecommandeType} handleChange={handleChange(setTelecommandeType)} />
              </div>
            </>
          )}
          {MotoriseType === 'Filaire' && (
            <>
              <div className="ManoeuvreSection">
                <h2 className="text">Interrupteur</h2>
                <InterrupteurSelector selectedOption={InterrupteurType} handleChange={handleChange(setInterrupteurType)} />
              </div>
              <div className="ManoeuvreSection">
                <h2 className="text">Sortie de câble</h2>
                <SortieDeCableSelector selectedOption={SortieDeCableType} handleChange={handleChange(setSortieDeCableType)} />
              </div>
            </>
          )}
          </div>
        </>
      )}
    </div>
  )
}
export default Manoeuvre
