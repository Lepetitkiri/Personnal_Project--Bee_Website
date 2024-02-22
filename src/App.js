import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importation des routes 
import Error from './Pages/Error'
import Home from './Pages/Home'
import Boutique from './Pages/Boutique'

function App() {
  return (
    <BrowserRouter basename="/Personnal_Project--Bee_Website/">
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="Boutique" element={<Boutique />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
