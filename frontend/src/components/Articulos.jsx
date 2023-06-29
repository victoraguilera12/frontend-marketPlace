import { useContext, useEffect, useState } from "react";
import Button from "./ui/Button";
import { RadioGroup } from "@headlessui/react";
import CargaImagen from "./CargaImagen";
import CategoryContext from "../categoryContext";
import Categoria from "./Categoria";
import Label from "./ui/Label";
import Input from "./ui/Input";
import axiosInstance from "../interceptor";
import { toast } from "react-hot-toast";
import AuthContext from "../authContext";

export default function Articulos({ onSelectedArticulo }) {
  const [articulos, setArticulos] = useState([]);
  const [selectedArticulo, setSelectedArticulo] = useState(null);
  const [estaCreandoArticulo, setEstaCreando] = useState(false);
  let [tipo, setTipo] = useState("producto"); // ó servicio
  const { categories, setCategories } = useContext(CategoryContext);
  const { user } = useContext(AuthContext);
  const cambiarTipo = (e) => {
    setTipo(e);
    setArticulo({ ...articulo, marca: "" });
  };
  const [articulo, setArticulo] = useState({
    id: null,
    nombre: "",
    marca: "",
    categoria: null,
    image: null,
  });

  const crearArticuloPOST = () => {
    axiosInstance
      .post("http://localhost:3000/articulo", {
        tipo: tipo,
        articulo: articulo,
      })
      .then((x) => {
        if (x.status != 200) {
          toast.error("Ocurrió un error al crear el artículo :(");
          return;
        }
        toast.success("El artículo fue creado correctamente!");
        setEstaCreando(false);
        setSelectedArticulo(null);
        setTipo("producto");
        setArticulo(
          {
            id: null,
            nombre: "",
            marca: "",
            categoria: null,
            image: null,
          }
        )
        if (onSelectedArticulo) {
          onSelectedArticulo(null);
        }
      });
  };

  useEffect(() => {
    const getArticulos = async () => {
      axiosInstance
        .get("http://localhost:3000/articulo/all/" + user?.id)
        .then((x) => {
          if (x.status != 200) {
            return;
          }


          const articulosConCategoria = x.data.map((y) => {
            return {
              ...y,
              categoria: categories.find(
                (c) => c.id_categoria == y.id_categoria
              ),
            };
          });
          setArticulos(articulosConCategoria);

        });
    };
    const getCategorias = async () => {
      axiosInstance.get("http://localhost:3000/categorias").then((x) => {
        if (x.status != 200) {
          toast.error("Ocurrió un error :( Intenta nuevamente mas tarde");
          return;
        }
        setCategories(x.data);
        setArticulo({ ...articulo, categoria: categories[0] });
      });
    };
    if(categories?.length>0){
      getArticulos();
    }else{
      getCategorias().then(() => {
        getArticulos();
      });
    }

  }, [estaCreandoArticulo]);

  const emptyPublicaciones = () => {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center bg-slate-200 rounded-lg">
        <p className="mb-4 text-slate-500">
          No tienes productos ni servicios creados
        </p>
        <Button onClick={() => setEstaCreando(true)}>Crear</Button>
      </div>
    );
  };

  const validarCrearArticulo = () => {
    const tieneMarca = tipo == "producto" ? Boolean(articulo.marca) : true;
    return (
      Boolean(articulo.categoria) &&
      Boolean(articulo.image) &&
      Boolean(articulo.nombre) &&
      tieneMarca
    );
  };

  const crearArticulo = () => {
    return (
      <div className="flex flex-col h-full justify-between">
        <div>
          <RadioGroup
            className="grid grid-cols-2 gap-4 w-full mb-4"
            value={tipo}
            onChange={cambiarTipo}
          >
            <RadioGroup.Option value="producto">
              {({ active, checked }) => (
                <span
                  className={`cursor-pointer p-4 rounded-lg block text-center transition-all shadow-md 
                ${
                  checked
                    ? "bg-indigo-600 text-indigo-50 font-bold shadow-indigo-300"
                    : "text-indigo-600 bg-indigo-50 shadow-indigo-100"
                }
                ${
                  active
                    ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-300"
                    : ""
                }`}
                >
                  Producto
                </span>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="servicio">
              {({ active, checked }) => (
                <span
                  className={`cursor-pointer p-4 rounded-lg block text-center transition-all shadow-md 
                ${
                  checked
                    ? "bg-indigo-600 text-indigo-50 font-bold shadow-indigo-300"
                    : "text-indigo-600 bg-indigo-50 shadow-indigo-100"
                }
                ${
                  active
                    ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-300"
                    : ""
                }`}
                >
                  Servicio
                </span>
              )}
            </RadioGroup.Option>
          </RadioGroup>
          <Label>Imagen</Label>
          <CargaImagen
            onCargaCompleted={({ url }) => {
              setArticulo({ ...articulo, image: url });
            }}
          />

          <Label className="mt-4">Nombre</Label>
          <Input
            placeholder={"Ejemplo"}
            onChange={(value) => setArticulo({ ...articulo, nombre: value })}
          ></Input>

          {tipo == "producto" ? (
            <>
              <Label className="mt-4">Marca</Label>
              <Input
                onChange={(value) => setArticulo({ ...articulo, marca: value })}
                placeholder="Adidas, Nike, Puma ..."
              ></Input>
            </>
          ) : null}

          <Label className="mt-4">Categoría</Label>
          <div className="flex max-w-full overflow-auto py-2 gap-3">
            {categories?.map((x, i) => (
              <Categoria
                onClick={
                  x.id_categoria == articulo?.categoria?.id_categoria
                    ? () => setArticulo({ ...articulo, categoria: null })
                    : () => setArticulo({ ...articulo, categoria: x })
                }
                icono={x.icono}
                categoria={x.nombre}
                key={x.id_categoria}
                selectable={true}
                selected={articulo?.categoria?.id_categoria === x.id_categoria}
              />
            ))}
          </div>
        </div>

        <div className="flex w-full gap-4">
          <Button
            onClick={crearArticuloPOST}
            className="w-min"
            disabled={!validarCrearArticulo()}
          >
            Crear <span className="capitalize ml-2"> {tipo}</span>
          </Button>
          <Button
            type="reversed"
            color="ui"
            onClick={() => setEstaCreando(false)}
            className="w-min"
          >
            Cancelar
          </Button>
        </div>
      </div>
    );
  };

  const isProducto = (articulo) => articulo?.id_producto != null;
  const isServicio = (articulo) => articulo?.id_servicio != null;

  const comparacion = (a, z) => {
    if (isProducto(a) && isProducto(z)) {
      return a.id_producto == z.id_producto;
    } else if (isServicio(a) && isServicio(z)) {
      return a.id_servicio == z.id_servicio;
    }
    return false;
  };
  const onChangeSelectedArticulo = (e) =>{
    setSelectedArticulo(e);
    if(onSelectedArticulo){
      onSelectedArticulo(e,tipo)
    }
  }
  const hasPublicaciones = () => {
    return (
      <div className="h-full relative">
        <div className="h-[90%] overflow-y-auto relative">
          <div className="flex flex-col gap-3 my-2 mb-2 absolute right-0 left-0 p-2">
            <RadioGroup
              className="flex flex-col gap-3 w-full "
              value={selectedArticulo}
              onChange={(e) => onChangeSelectedArticulo(e)}
              by={comparacion}
            >
              {articulos.map((x, i) => (
                <RadioGroup.Option key={i} value={x}>
                  {({ active, checked }) => (
                    <div
                      className={`cursor-pointer p-4 gap-3 rounded-lg flex text-center transition-all shadow-md 
                  ${
                    checked
                      ? "bg-rose-50 ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-rose-400 text-rose-600 font-bold shadow-rose-300"
                      : "text-slate-600 bg-slate-50 shadow-rose-100 hover:bg-rose-50"
                  }
                  ${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-rose-300 text-rose-600"
                      : ""
                  }`}
                    >
                      <div className="w-12 self-center h-12 bg-rose-200 text-rose-400 rounded-2xl flex justify-center items-center">
                        <em
                          className={"text-2xl iconoir-" + x.categoria?.icono}
                        ></em>
                      </div>
                      <div className="flex flex-col items-start">
                        <strong>
                          <small>
                            {isProducto(x) ? "Producto " : "Servicio "}
                            {x.categoria?.nombre}
                          </small>
                        </strong>
                        <h5>
                          {x.nombre}
                          {x.marca ? (
                            <span className="font-thin"> | {x.marca}</span>
                          ) : null}
                        </h5>
                      </div>
                    </div>
                  )}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>
        </div>

        <Button
          onClick={() => setEstaCreando(true)}
          className="w-full justify-center my-4"
        >
          Crear nuevo Articulo
        </Button>
      </div>
    );
  };

  const displayArticulos = () => {
    return (
      <>
        {articulos.length == 0 && emptyPublicaciones()}
        {articulos.length > 0 && hasPublicaciones()}
      </>
    );
  };

  return <>{estaCreandoArticulo ? crearArticulo() : displayArticulos()}</>;
}
