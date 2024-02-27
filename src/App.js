import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importation des routes 
import Error from './Pages/Error'
import Home from './Pages/Home'
import Boutique from './Pages/Boutique'

function App() {

  // Prop basename 
  const basename = "/Personnal_Project--Bee_Website";

  return (
    <BrowserRouter basename="/Personnal_Project--Bee_Website/">
      <Routes>
        <Route path="*" element={<Error basename={basename} />} />
        <Route path="" element={<Home basename={basename} />} />
        <Route path="/Error" element={<Error basename={basename} />} />
        <Route path="Boutique" element={<Boutique basename={basename} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
