import React, { Suspense, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import LoadingScreen from './LoadingScreen'; // Make sure the file extension is correct
import './styles.css';

import MultiStepMenu from './components/multiStepMenu'
import App from './App'

const Root = () => {
  const [loading, setLoading] = useState(true);

  // Preload components by rendering them off-screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // This timer controls the display of the loading screen
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
        <div className='MainStyle' style={{ display: loading ? 'none' : 'flex'}}>
          <MultiStepMenu />
          <App />
        </div>
      {loading && <LoadingScreen />}
    </Provider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Root />);
