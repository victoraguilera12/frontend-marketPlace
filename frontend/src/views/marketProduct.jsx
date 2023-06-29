import { useParams } from "react-router-dom";
import GoBack from "../components/GoBack";
import Title from "../components/ui/Title";
import Categoria from "../components/Categoria";
import Estrellas from "../components/Estrellas";
import MiniUser from "../components/ui/MiniUser";
import Comentarios from "../components/Comentarios";

const mock = {
  estrellas: 3,
  id_publicacion: 1,
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
    "https://images.ctfassets.net/nywvtjnh7p05/1eOo6Ftva9skSryJZaw5a4/c0e73501d5d9c45b0c1d0827d762970c/Pro_v3_Product_Selector.jpg",
  comentarios: [
    {
      id_comentario: 1,
      mensaje: "Lorem ipsum dolor sit amet blbalba abablbla😁 ",
      fecha: "2023-06-09 12:00:00",
      nombre_usuario: "Vitoko",
      imagen:
        "https://i0.wp.com/procamp.cl/wp-content/uploads/2020/07/lechuga-escarola.png",
    },
    {
      id_comentario: 1,
      mensaje: "Lorem ipsum dolor sit amet blbalba abablbla😁 ",
      fecha: "2023-06-09 12:00:00",
      nombre_usuario: "Vitoko",
      imagen:
        "https://i0.wp.com/procamp.cl/wp-content/uploads/2020/07/lechuga-escarola.png",
    },
    {
      id_comentario: 1,
      mensaje: "Lorem ipsum dolor sit amet blbalba abablbla😁 ",
      fecha: "2023-06-09 12:00:00",
      nombre_usuario: "Vitoko",
      imagen:
        "https://i0.wp.com/procamp.cl/wp-content/uploads/2020/07/lechuga-escarola.png",
    },
    {
      id_comentario: 1,
      mensaje: "Lorem ipsum dolor sit amet blbalba abablbla😁 ",
      fecha: "2023-06-09 12:00:00",
      nombre_usuario: "Vitoko",
      imagen:
        "https://i0.wp.com/procamp.cl/wp-content/uploads/2020/07/lechuga-escarola.png",
    },
    {
      id_comentario: 1,
      mensaje: "Lorem ipsum dolor sit amet blbalba abablbla😁 ",
      fecha: "2023-06-09 12:00:00",
      nombre_usuario: "Vitoko",
      imagen:
        "https://i0.wp.com/procamp.cl/wp-content/uploads/2020/07/lechuga-escarola.png",
    },
  ],
};

export default function MarketProduct() {
  const product = mock;
  const params = useParams();
  console.log(params);
  console.log(product.comentarios)
  return (
    <article className="w-full min-h-screen flex flex-col">
      <GoBack></GoBack>
      <div className=" md:grid grid-cols-2">
<div>
<img
        className="w-11/12 self-center rounded-2xl"
        src={product.imagen}
        alt={product.titulo}
      />
              <Title>{product.titulo}</Title>
        <h3 className="text-lg text-slate-400">
          <span>{product.nombre}</span> | <span>{product.marca}</span>
        </h3>
        <div className="flex gap-6">
          
          <aside className="flex justify-center gap-4">
          <div >
          <span className="text-sm text-slate-400">Categoría:</span>
            <Categoria
              categoria={product.nombre_categoria}
              icono={product.icono}
            ></Categoria>
          </div>
          <div>
          <span className="text-sm text-slate-400">Evaluación:</span>
            <Estrellas estrellas={product.estrellas}></Estrellas>
          </div>
          <span>
            <span className="text-sm text-slate-400">Vendido por:</span>
            <MiniUser
              {...{
                nombre: product.nombre_usuario,
                imagen: product.img_usuario,
                id: product.id_usuario,
              }}
            ></MiniUser>
          </span>
          </aside>
        </div>
          <hr className="w-full h-px bg-slate-500" />
        <h2 className="text-2xl font-bold text-slate-400">Descripción</h2>
        <p className="text-slate-800">{product.descripcion}</p>
</div>
<section className="px-4 flex flex-col max-w-md  gap-3">

        <hr className="w-full h-px bg-slate-500" />
        <h2 className="text-2xl font-bold text-slate-400">Comentarios</h2>
      <Comentarios comentarios={product.comentarios}></Comentarios>
      </section>
      </div>
      

     
    </article>
  );
}
