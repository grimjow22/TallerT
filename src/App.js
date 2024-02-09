import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from './PrivateRoute';
import LoginButton from './components/Login/Login'; // Asegúrate de que esta ruta de importación sea correcta
import Header from './components/Header/Header';
import Buttons from './components/Buttons/Buttons';
import Table from './components/Table/Table';
import ServicesTable from './components/ServicesTable/ServicesTable';
import PartsTable from './components/PartsTable/PartsTable';
import TableMecanical from './components/TableMecanical/TableMecanical';

// Componentes adicionales
import LogoutButton from "./components/Logout/Logout";
import Profile from "./components/Profile/Profile";
import AfterLoginRedirect from './components/Roles/Roles'; // Ajusta según la ubicación real

function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  const [authenticated, setAuthenticated] = useState(false);

  if (isLoading) return <div>Cargando...</div>;

  const handleAuthentication = (isAuthenticated) => {
    console.log(isAuthenticated ? 'Usuario ha iniciado sesión' : 'Usuario no autenticado');
    setAuthenticated(isAuthenticated);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            isAuthenticated ? 
            <AfterLoginRedirect onAuthenticated={handleAuthentication} /> : 
            <LoginButton onLogin={handleAuthentication} />
          }/>
          <Route path="/perfil" element={<PrivateRoute element={<Profile />} isAuthenticated={isAuthenticated} />} />
          <Route path="/cerrar-sesion" element={<PrivateRoute element={<LogoutButton />} isAuthenticated={isAuthenticated} />} />
          <Route path="/Header" element={<PrivateRoute element={<Header />} isAuthenticated={isAuthenticated} />} />
          <Route path="/Buttons" element={<PrivateRoute element={<Buttons />} isAuthenticated={isAuthenticated} />} />
          <Route path="/Mecanicos" element={<PrivateRoute element={<Table />} isAuthenticated={isAuthenticated} />} />
          <Route path="/Servicios" element={<PrivateRoute element={<ServicesTable />} isAuthenticated={isAuthenticated} />} />
          <Route path="/Piezas" element={<PrivateRoute element={<PartsTable />} isAuthenticated={isAuthenticated} />} />
          <Route path="/VistaMec" element={<PrivateRoute element={<TableMecanical />} isAuthenticated={isAuthenticated} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
