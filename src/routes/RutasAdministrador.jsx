import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Administrador from '../components/Administrador';
import FormularioReceta from '../components/FormularioReceta';

const RutasAdministrador = () => {
    return (
        <Routes>
            <Route
          exact
          path="/"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/crear"
          element={<FormularioReceta></FormularioReceta>}
        ></Route>
        <Route
          exact
          path="editar/:id"
          element={<FormularioReceta></FormularioReceta>}
        ></Route>
        </Routes>
    );
};

export default RutasAdministrador;