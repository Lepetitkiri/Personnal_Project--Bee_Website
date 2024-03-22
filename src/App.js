import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MyContextForBasenameValue } from './index';

// Importation des routes 
import Error from './Pages/Error'
import Home from './Pages/Home'
import Boutique from './Pages/Boutique'

function App() {

  // Prop basename 
  const basename = useContext(MyContextForBasenameValue);

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="" element={<Home />} />
        <Route path="Error" element={<Error />} />
        <Route path="Boutique" element={<Boutique />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
