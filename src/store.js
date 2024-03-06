// Import the configureStore function from Redux Toolkit to create a Redux store with good defaults.
import { configureStore } from '@reduxjs/toolkit';
// Import the reducer from your voletSlice file, which manages the state for the 'lame' feature.
import voletReducer from './features/voletSlice';

// Create a Redux store by calling configureStore and passing an object with a reducer field.
// This object maps state slices to their corresponding reducers.
export const store = configureStore({
  reducer: {
    volet: voletReducer, // Map the 'lame' state slice to the lameReducer. This allows the store to handle actions defined in voletSlice.
  },
});

// Export the store as a default export, making it available for use in your application,
// especially for providing it to the <Provider> component from react-redux.
export default store;
