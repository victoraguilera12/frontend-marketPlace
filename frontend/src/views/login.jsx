import React from 'react'
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from '../authContext';
import { toast } from 'react-hot-toast';



export default function login() {

  const { setUser,setAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [usuario, setUsuarioLocal] = useState({});

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuarioLocal({ ...usuario, ...field });
  };

  const iniciarSesion = async () => {

    const urlServer = "https://backend-marketplace-chi.vercel.app";
    const endpoint = "/usuarios/login";
    const { email, password } = usuario;
    try {
      if (!email || !password) return alert("Email y password obligatorias");
      await axios.post(urlServer + endpoint, usuario).then(res=>{
        if(res.status == 200){
          setUser(res.data.user);
          setAuthenticated(true);
          localStorage.setItem('jwt',res.data.token);
          navigate("/admin/dashboard")
        }
      });
      toast.success("Exito!")

    } catch ({ response: { data: message } }) {
      alert(message + " 🙁");
      console.log(message);
    }
  };
  const logout = (user) =>{
    return setUser(null)
  }


  return (
      <section > 
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Ingresa a tu Cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Correo electronico
              </label>
              <div className="mt-2">
                <input
                  value={usuario.email} 
                  onChange={handleSetUsuario}
                  name="email"
                  type="email"
                  placeholder='Ingresa Tu Email'
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Contraseña
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Olvidaste Tu Contraseña
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  value={usuario.password}
                  onChange={handleSetUsuario}
                  name="password"
                  type="password"
                  placeholder='Contraseña'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                 onClick={iniciarSesion}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               Iniciar Sesion
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
      </section>
      

  )
}


