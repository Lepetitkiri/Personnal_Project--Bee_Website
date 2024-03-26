import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importation des composants de page
import Error from './Pages/Error';
import Home from './Pages/Home';
import Boutique from './Pages/Boutique';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="" element={<Home />} />
      <Route exact path="/Boutique" element={<Boutique />} />
      <Route exact path="/Error" element={<Error />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
