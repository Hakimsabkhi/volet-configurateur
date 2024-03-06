// Import necessary React and ReactDOM functionalities
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
// Import Provider from react-redux for state management integration
import { Provider } from 'react-redux';
// Import the Redux store (ensure this path matches your actual store configuration)
import store from './store';
// Import global styles
import './styles.css';

// Dynamically import components using React.lazy for code-splitting
const MultiStepMenu = React.lazy(() => import('./components/multiStepMenu'));
const App = React.lazy(() => import('./App'));
const Overlay = React.lazy(() => import('./components/Overlay'));

// Define the root component with Suspense for lazy-loaded components
const Root = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        {/* Wrap each component that is lazy-loaded within Suspense */}
        <div className="content">
          <MultiStepMenu />
        </div>
        <App />
        <Overlay />
      </Suspense>
    </Provider>
  );
};

// Render the Root component into the DOM
// Make sure the 'root' element exists in your index.html file
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you're using TypeScript
root.render(<Root />);
