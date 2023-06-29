import { useEffect, useRef, useState, useContext } from "react";
import Button from "./ui/Button";
import Card from "./ui/Card";
import Categoria from "./Categoria";
import Estrellas from "./Estrellas";
import { Dialog } from "@headlessui/react";
import { NavLink } from "react-router-dom";

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

export default function MisPublicaciones() {

  const [posts, setPosts] = useState({mockData});
 
  const isServicio = (post) => post.id_servicio != null;
  let completeButtonRef = useRef(null)
  const [vendidoModal,setVendidoModal] = useState(false);
  const marcarComoVendido = () =>{console.log("VENDIDO POST")}
  const sinPublicaciones = () => {
    return (
      <div className="bg-slate-200 text-slate-400 h-full mb-4 rounded-lg flex justify-center flex-col gap-3 items-center">
        <em className="iconoir-sparks text-5xl"></em>
        <h2>No tienes ninguna publicación creada.</h2>
        <Button>Crear Publicación</Button>
      </div>
    );
  };

 
   

  const publicaciones = () => {
    return (
      <div className="h-full overflow-y-auto relative">
        <div className="flex flex-col gap-3 my-2 mb-2 absolute right-0 left-0">
          {mockData.map((x, i) => (
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
                    <span className={`mr-2 ${x.fecha_vendido?'line-through':''}`}>
                    ${x.precio.toLocaleString("es-CL")}
                    </span>
                    {
                        x.fecha_vendido &&  <span className=" text-xs text-green-500">VENDIDO <em className="iconoir-check"></em></span>
                    }

                  </h5>
                  <div className="flex justify-between gap-8 items-center">
                    <NavLink  to={`/marketplace/${x.id_publicacion}`}>
                      <h6 className="text-indigo-600 hover:underline font-mono text-xs">
                        Ver Publicación
                      </h6>
                    </NavLink>
                    <div className="">
                         {
                        !x.fecha_vendido &&  
                        <button onClick={()=>setVendidoModal(true)}>
                      <h6 className="text-indigo-600 hover:underline font-mono text-xs">
                        Marcar como vendido
                      </h6>
                    </button>
                    }
                    
                        {/* <a href={`marketplace/${x.id_publicacion}`}>
                            <Button type="reversed" color='red' className="text-xs " iconName="iconoir-trash">
                            Borrar 
                            </Button>
                        <button></button>
                        <button><em className="iconoir-edit"></em></button>
                        </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Dialog  open={vendidoModal} onClose={()=>setVendidoModal(false)} initialFocus={completeButtonRef}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded flex flex-col gap-4  bg-white p-8">
        <Dialog.Title>
            <h3 className="font-bold text-slate-500">

                    ¿Marcar como vendido?
            </h3>
                </Dialog.Title>
                <Dialog.Description>
                   No puedes deshacer esta acción
                </Dialog.Description>
                <div className="flex gap-4">
                <Button color="disabled" type='reversed'  onClick={() => setVendidoModal(false)}>Cancelar</Button>
        <button className="bg-indigo-500 cursor-pointer flex items-center rounded-xl transition-all px-6 py-2 text-indigo-100 active:bg-indigo-700 hover:bg-indigo-600" ref={completeButtonRef} onClick={marcarComoVendido}>
          Marcar como Vendido
        </button>
                </div>
                
        </Dialog.Panel>
      </div>

        </Dialog>
      </div>
    );
  };

  return posts.length == 0 ? sinPublicaciones() : publicaciones();
}
