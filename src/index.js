import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FoodApplicationContextProvider } from './context/food-application';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FoodApplicationContextProvider>
    <App />
  </FoodApplicationContextProvider>
);
