import React, { useContext, useState } from 'react'
import imagen_avatar from '../assets/imagen_avatar.avif'
import AuthContext from '../authContext';
import Card from '../components/ui/Card'
import ProfilePicture from '../components/ui/ProfilePicture'
import Categoria from "../components/Categoria";
import Estrellas from "../components/Estrellas";

//import MisPublicaciones from '../components/MisPublicaciones';


const mockData = [
  {
    estrellas: 3,
    id_publicacion: 1,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    id_servicio: null,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "Jorge Paz",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "VENTA",
    activo: true,
    completado: false,
    id_producto: 1,
    nombre: "Zapatillas Niteball",
    marca: "Adidas",
    imagen:
      "https://www.dimarsa.cl/media/catalog/product/m/a/marcasadidasoriginalss24144-negro1jpeg_0.jpg",
  },
  {
    estrellas: 3,
    id_publicacion: 2,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: "2023-06-09 12:00:00",
    nombre_usuario: "Jorge Paz",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "VENTA",
    activo: true,
    completado: true,
    id_producto: 1,
    nombre: "Zapatillas Niteball",
    marca: "Adidas",
    imagen:
      "https://www.dimarsa.cl/media/catalog/product/m/a/marcasadidasoriginalss24144-negro1jpeg_0.jpg",
  },
  {
    estrellas: 3,
    id_publicacion: 3,
    id_usuario: 1,
    nombre: "Servicio",
    id_servicio: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "Jorge Paz",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "BUSCA",
    activo: true,
    completado: false,
  },
  {
    estrellas: 3,
    id_publicacion: 4,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "Jorge Paz",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "BUSCA",
    activo: true,
    completado: true,
  },
  {
    estrellas: 3,
    id_publicacion: 5,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "victor",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "VENTA",
    activo: true,
    completado: false,
    id_producto: 1,
    nombre: "Zapatillas Niteball",
    marca: "Adidas",
    imagen:
      "https://www.dimarsa.cl/media/catalog/product/m/a/marcasadidasoriginalss24144-negro1jpeg_0.jpg",
  },
  {
    estrellas: 3,
    id_publicacion: 6,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "Jorge Paz",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "VENTA",
    activo: true,
    completado: false,
    id_producto: 1,
    nombre: "Zapatillas Niteball",
    marca: "Adidas",
    imagen:
      "https://www.dimarsa.cl/media/catalog/product/m/a/marcasadidasoriginalss24144-negro1jpeg_0.jpg",
  },
  {
    estrellas: 3,
    id_publicacion: 6,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "Jorge Paz",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "VENTA",
    activo: true,
    completado: false,
    id_producto: 1,
    nombre: "Zapatillas Niteball",
    marca: "Adidas",
    imagen:
      "https://www.dimarsa.cl/media/catalog/product/m/a/marcasadidasoriginalss24144-negro1jpeg_0.jpg",
  },
  {
    estrellas: 3,
    id_publicacion: 6,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "victor",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "VENTA",
    activo: true,
    completado: false,
    id_producto: 1,
    nombre: "Zapatillas Niteball",
    marca: "Adidas",
    imagen:
      "https://www.dimarsa.cl/media/catalog/product/m/a/marcasadidasoriginalss24144-negro1jpeg_0.jpg",
  },
  {
    estrellas: 3,
    id_publicacion: 6,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "victor",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "VENTA",
    activo: true,
    completado: false,
    id_producto: 1,
    nombre: "Zapatillas Niteball",
    marca: "Adidas",
    imagen:
      "https://www.dimarsa.cl/media/catalog/product/m/a/marcasadidasoriginalss24144-negro1jpeg_0.jpg",
  },
  {
    estrellas: 3,
    id_publicacion: 6,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "victor",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "VENTA",
    activo: true,
    completado: false,
    id_producto: 1,
    nombre: "Zapatillas Niteball",
    marca: "Adidas",
    imagen:
      "https://www.dimarsa.cl/media/catalog/product/m/a/marcasadidasoriginalss24144-negro1jpeg_0.jpg",
  },
];

export default function () {
  const { authenticated, user } = useContext(AuthContext);
  const [posts, setPosts] = useState(mockData);
  const isServicio = (post) => post.id_servicio != null;
  return (

    <>

      <section className="m-4 p-4 shadow-md rounded-sm w-8/12 h-3/4 flex flex-[7] flex-row gap-9 ">

        {authenticated ?
          <div className='flex self-center flex-col'>
            <img
              className="w-20 h-20 p-1 rounded-full ring-2 gap-2 ring-gray-300 dark:ring-gray-500 flex-[40] justify-center"
              src={user.image}
              alt="Bordered avatar ">

            </img>
            <h5
              className="pt-4 pl-4 gap-2 text-center text-xs">
              {user.name}
            </h5>
            <h6
              className='text-xs'>
              {user.email}
            </h6>
          </div >
         
          :
          <ProfilePicture></ProfilePicture>
        }
      



        <div 
        className='justify-center flex-[60] shadow-sm rounded-full bg-slate-200 '>
          <h1 
          className='text-bold pl-10 mt-4 font-bold'> 
          Descripcion: 
          </h1>
          <p 
          className='p-3 m-3 text-sm'> 
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officia molestiae, id vel itaque incidunt, quisquam alias voluptas tempora culpa in ipsam impedit sunt dicta magni illo maiores dolores minus!
          </p>
        </div>

      </section>

      <hr
        class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <h2 className="text-center m-3 text-xl font-semibold text-slate-400 mb-2 ">Mis Publicaciones</h2>

      <div className="flex flex-col gap-3 my-2 mb-2 absolute right-0 left-0">
        {posts.map((x, i) => (
          <Card key={i} className="mx-3">
            
            <div className="flex gap-4">
              {x.imagen ? (
                <img
                  className="w-24 h-24 rounded-2xl self-center"
                  src={x.imagen}
                  alt=""
                />
              ) : (
                <div className="w-24 self-center h-24 bg-rose-200 text-rose-400 rounded-2xl flex justify-center items-center">
                  <em className={"text-3xl iconoir-" + x.icono}></em>
                </div>
              )}
              <div>
                <h2 className="text-slate-400 mb-2 text-ellipsis overflow-x-hidden whitespace-nowrap min-w-">
                  {x.titulo}{" "}
                  <span className=" text-xs">
                    | {x.nombre} {x.marca ? x.marca : ""}
                  </span>
                </h2>
                <div className="flex gap-4">
                  {isServicio(x) ? (
                    <div className="bg-slate-200 w-min whitespace-nowrap text-slate-800 px-3 flex items-center gap-2 rounded-xl">
                      Servicio {x.nombre_categoria}
                    </div>
                  ) : (
                    <Categoria
                      categoria={x.nombre_categoria}
                      icono={x.icono}
                    />
                  )}
                  <Estrellas estrellas={x.estrellas} />
                </div>
                <h5 className="my-2 font-bold font-mono ">
                  <span className={`mr-2 ${x.fecha_vendido ? 'line-through' : ''}`}>
                    ${x.precio.toLocaleString("es-CL")}
                  </span>
                  {
                    x.fecha_vendido && <span className=" text-xs text-green-500">VENDIDO <em className="iconoir-check"></em></span>
                  }

                </h5>
                <div className="flex justify-between gap-8 items-center">
                  <a href={`marketplace/${x.id_publicacion}`}>
                    <h6 className="text-indigo-600 hover:underline font-mono text-xs">
                      Ver Publicación
                    </h6>
                  </a>
                  <div className="">
                    {
                      !x.fecha_vendido &&
                      <button onClick={() => setVendidoModal(true)}>
                        <h6 className="text-indigo-600 hover:underline font-mono text-xs">
                          Marcar como vendido
                        </h6>
                      </button>
                    }

                   
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>


    </>

  )
}




