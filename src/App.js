import React, { useContext } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { MyContextForBasenameValue } from './index';

// Importation des routes 
import Error from './Pages/Error';
import Home from './Pages/Home';
import Boutique from './Pages/Boutique';

function App() {

  // Prop basename 
  const basename = useContext(MyContextForBasenameValue);

  return (
    <HashRouter >
      <Routes basename={basename}>
        <Route path={`${basename}/`} element={<Home />} />
        <Route path={`${basename}/Error`} element={<Error />} />
        <Route path={`${basename}/Boutique`} element={<Boutique />} />
        <Route path={`*`} element={<Error />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
