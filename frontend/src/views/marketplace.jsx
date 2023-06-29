import { useState, useEffect, useContext } from "react";
import Product from "../components/Product";
import Footer from "../components/Footer";
import CategoryContext from "../categoryContext";
import Categoria from "../components/Categoria";
import Input from "../components/ui/Input";




export default function Marketplace() {
  const [data, setData] = useState([]);
  let componenteMontado = true;
  const { categories, setCategories } = useContext(CategoryContext)
  useEffect(() => {
    const getFromDB = async () => {
      const response = await fetch("https://backend-marketplace-chi.vercel.app/test");
      console.log(await response.json());
    };
    getFromDB();
    const getCategorias = async () => {
      const response = await fetch("https://backend-marketplace-chi.vercel.app/categorias")
      response.json().then(x => {
        setCategories(x);
      })
      console.log(categories)
    }
    getCategorias();
  }, []);

  useEffect(() => {
    const getPublicacion = async () => {
      const response = await fetch("https://backend-marketplace-chi.vercel.app/publicacion/all")
        response.json().then(x=>{
          setData(x)
        })
        console.log(data)
    }
    getPublicacion()
  }, [])

  const renderElements = (isProducto) => {
    const filtrado = data.filter((x)=> isProducto ? x.id_producto !== null : x.id_servicio !== null

    )
    
    return (
      <>
        {filtrado.map((item) => (
          <Product key={item.x} data={item}></Product>
        ))}
      </>
    );
  };

 

  return (
    
    < >
      <h2 className="text-3xl">Marketplace</h2>
      <Input label={"Buscar"} placeholder={"Zapatos, Celulares, Juegos ..."}></Input>
      <div className="flex max-w-full overflow-auto py-4 gap-3">
        {categories?.map((x, i) => <Categoria icono={x.icono} categoria={x.nombre} key={x.id_categoria} />)}
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-6 mb-6">
        <section className="flex-[8]">
          <h4 className="text-xl text-gray-400">En venta</h4>
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 ">
            {renderElements(true)}
          </div>
        </section>
        <section className="flex-[2] sticky top-24 h-[calc(100% - 60px)]">
          <h4 className="text-xl text-gray-400">Se Busca</h4>
          <div className="grid w-full grid-cols-1 gap-4 ">
            {renderElements(false)}
          </div>

        </section>
      </div>


    </>
  );
}
