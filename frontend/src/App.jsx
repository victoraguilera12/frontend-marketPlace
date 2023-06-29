import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./views/login";
import Registrarse from "./views/registrarse";
import Perfil from "./views/perfil";
import Marketplace from "./views/marketplace";
import MarketProduct from "./views/marketProduct";
import Footer from "./components/Footer";
import AuthContext from "./authContext";
import Dashboard from "./views/admin/Dashboard";
import CategoryContext from "./categoryContext";
import ProtectedRoute from "./components/ProtectedRoute";
import MisProductos from "./views/admin/MisProductos";
import MisServicios from "./views/admin/MisServicios";
import MisPublicaciones from "./components/MisPublicaciones";
import Landing from "./views/Landing";
import Admin from "./layout/Admin";
import General from "./layout/General";
import Publicar from "./views/admin/Publicar";
import { Toaster } from "react-hot-toast";

const routing = (user) =>{
  return (
    <Routes>
              <Route exact path="/" element={<Landing/>} />
              <Route exact path="/login" Component={Login} />
              <Route exact path="/registrarse" Component={Registrarse} />
              <Route exact path="/perfil" Component={Perfil} />
              <Route exact path="/marketplace" Component={Marketplace} />
              <Route path="/marketplace/:productId" Component={MarketProduct} />
              
              <Route element={<ProtectedRoute user={user}/>}>
                <Route path="/admin/dashboard" element={<Dashboard/>}></Route>
                <Route path="/admin/productos" element={<MisProductos/>}></Route>
                <Route path="/admin/servicios" element={<MisServicios/>}></Route>
                <Route path="/admin/publicaciones" element={<MisPublicaciones/>}></Route>
                <Route path="/admin/publicar" element={<Publicar/>}></Route>
              </Route>
            </Routes>
             
  )
}

function App() {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isAdmin,setIsAdmin] = useState(false);
  const location = useLocation();
  useEffect(()=>{ 
    console.log(user);
    setIsAdmin(location.pathname.includes("admin") && user);
  },[user,location.pathname,isAdmin]);


  return (
<div className="bg-slate-100 max-w-full overflow-x-hidden">
    <Toaster position="bottom-center"/>
      <CategoryContext.Provider value={{ categories, setCategories }}>
        <AuthContext.Provider
          value={{ authenticated, setAuthenticated, user, setUser }} 
        >

           {
           isAdmin? <Admin>
            {routing(user)}
           </Admin>:<General>
            {routing(user)}
           </General>
           }
        </AuthContext.Provider>
      </CategoryContext.Provider>
      
    </div>
  );
}
export default App;
