import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lameSelection: "", // Initial selection for lames
  dimensions: { Largeur: 1000, Hauteur: 1000 }, // Default dimensions
  selectedColor: {
    coulisse: "", // Initialize with default or empty string if no initial color
    tablier: "", // Initialize with default or empty string if no initial color
    lameFinale: "", // Initialize with default or empty string if no initial color
  },
  installationType: '', 
  ManoeuvreType: "",
  ManualType: "",
  MotoriseType: "",
  TelecommandeType: "",
  CommandeType: "",
  InterrupteurType: "",
  SortieDeCableType : "",
};

const voletSlice = createSlice({
  name: 'volet',
  initialState,
  reducers: {
    setLameSelection: (state, action) => {
      state.lameSelection = action.payload;
    },
    setDimensions: (state, action) => {
      // Merges new dimensions into existing ones, allowing for partial updates
      state.dimensions = { ...state.dimensions, ...action.payload };
    },
    setColor: (state, action) => {

      // Destructuring to extract color and category from the action payload
      const { color, category } = action.payload;

      // Ensuring the category exists within the selectedColor object before updating
      if (state.selectedColor.hasOwnProperty(category)) {
        state.selectedColor[category] = color;
      }
    },
    setInstallationType: (state, action) => {
      state.installationType = action.payload;
    },

    setManoeuvreType: (state, action) => {
      state.ManoeuvreType = action.payload;

    },
      setManualType: (state, action) => {
      state.ManualType = action.payload;
    },

    setMotoriseType: (state, action) => {
      state.MotoriseType = action.payload;
    },

    setTelecommandeType: (state, action) => {
      state.TelecommandeType = action.payload;
    },

    setCommandeType: (state, action) => {
      state.CommandeType = action.payload;
    },

    setInterrupteurType: (state, action) => {
      state.InterrupteurType = action.payload;
    },

    setSortieDeCableType: (state, action) => {
      state.SortieDeCableType = action.payload;
    },
  },
});

export const {
  setLameSelection,
  setDimensions,
  setColor,
  setInstallationType,
  setCheckboxSelection,
  setManoeuvreType,
  setManualType,
  setMotoriseType,
  setTelecommandeType,
  setCommandeType,
  setInterrupteurType,
  setSortieDeCableType
} = voletSlice.actions;

// Selectors for various parts of the state
export const selectInstallationType = (state) => state.volet.installationType;
export const selectSelectedColor = (state) => state.volet.selectedColor;
export const selectDimensions = (state) => state.volet.dimensions;
// A dynamic selector to fetch selected color by category
export const selectColorForCategory = (category) => (state) => state.volet.selectedColor[category];
export const selectManoeuvre = (state) => state.volet.ManoeuvreType;
export const selectManual = (state) => state.volet.ManualType;
export const selectMotorise = (state) => state.volet.MotoriseType;
export const selectTelecommand = (state) => state.volet.TelecommandeType;
export const selectCommand = (state) => state.volet.TelecommandeType;
export const selectInterrupteur = (state) => state.volet.InterrupteurType;
export const selectSortieDeCable = (state) => state.volet.SortieDeCableType;

export default voletSlice.reducer;
