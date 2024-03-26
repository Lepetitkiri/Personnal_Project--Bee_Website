import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './Utils/GlobalStyle';

// Provider
export const MyContextForBasenameValue = createContext();
const basenameValue = '/Personnal_Project--Bee_Website';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <MyContextForBasenameValue.Provider value={basenameValue}>
      <BrowserRouter basename={`/${basenameValue}`} >
        <App />
      </BrowserRouter>
    </MyContextForBasenameValue.Provider>
  </React.StrictMode>
);
