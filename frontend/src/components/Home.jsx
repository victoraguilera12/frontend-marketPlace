import React from 'react'
import Fondo from '../assets/fondo2.avif'
import Productos from '../views/tienda'


export default function Home() {
    return (
        <div className='hero'>
            <div className="card text-bg-dark border-o">
                <img src={Fondo} class="card-img " alt="backgorund "height="950px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-o">REVISA LOS PRODUCTOS EN PATRONATO MARKET</h5>
                    <p className="card-text fs-2">¡REGISTRATE YA!</p>
                    <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">iniciar sesion</button>
                    <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> registrate </button>
                    <i class="iconoir-hand-brake"></i>
                    </div>
                    
                </div>
            </div>
            <Productos/>
        </div>
    )
}
