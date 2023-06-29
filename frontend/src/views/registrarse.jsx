import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../authContext";

export default function registrarse() {
  const { setAuthenticated,setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    name: "",
    email: "",
    password: "",
    img: "",
  });

  const handleSetUsuario = (e) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(usuario);
  };

  const registrarUsuario = async (e) => {
    e.preventDefault();
    const urlServer = "https://backend-marketplace-chi.vercel.app";
    const endpoint = "/usuarios";
    try {
      await axios.post(urlServer + endpoint, usuario).then((res) => {
        console.log(res);
        if(res.status == 200){
          const data = res.data;
          localStorage.setItem('jwt',data.token);
          setAuthenticated(true);
          setUser({name:usuario.name,email:usuario.email,img:usuario.img});
          
        navigate("/perfil");
          
        }
      });
    } catch (error) {
      alert("Algo salió mal ...");
      console.log(error);
    }
  };

  return (
    <div class="items-center flex flex-column pt-4">
      <form class="w-full max-w-lg flex flex-col ">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Nombre
            </label>
            <input
              name="name"
              value={usuario.name}
              onChange={handleSetUsuario}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
            <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>

          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Correo Electronico
            </label>
            <input
              value={usuario.email}
              name="email"
              onChange={handleSetUsuario}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Nueva Contraseña
            </label>
            <input
              value={usuario.password}
              onChange={handleSetUsuario}
              name="password"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
            />
            <p class="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Confirmar Contraseña
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
            />
            <p class="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>
        <button
          onClick={registrarUsuario}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          registrarse
        </button>
      </form>
    </div>
  );
}
