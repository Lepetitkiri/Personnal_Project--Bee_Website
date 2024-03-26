import React, { useContext } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { MyContextForBasenameValue } from './index';

// Importation des routes 
import Error from './Pages/Error';
import Home from './Pages/Home';
import Boutique from './Pages/Boutique';

function App() {
  // Prop basename
  const basename = useContext(MyContextForBasenameValue);

  // Création des routes à partir des éléments
  const routes = createRoutesFromElements(
    <>
      <Route path={`${basename}/`} element={<Home />} />
      <Route path={`${basename}/Boutique`} element={<Boutique />} />
      <Route path={`${basename}/Error`} element={<Error />} />
      <Route path={`${basename}/*`} element={<Error />} />
    </>
  );

  // Création du BrowserRouter avec les routes
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
