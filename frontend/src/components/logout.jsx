import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from './authContext';

const Logout = () => {
  const { setUser, setAuthenticated } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    setUser(null);
    setAuthenticated(false);
    
    history.push('/'); // Redirige al usuario a la página de inicio después de cerrar sesión
    console.log(handleLogout)
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;