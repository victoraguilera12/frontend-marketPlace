import { useEffect, useState, useContext } from "react";
import GoBack from "../../components/GoBack";
import Card from "../../components/ui/Card";
import CrearArticulos from "../../components/Articulos";
import Label from "../../components/ui/Label";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import axiosInstance from "../../interceptor";
import AuthContext from "../../authContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


export default function Publicar() {
  
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [articulo, setArticulo] = useState(null);
  const [tipo, setTipo] = useState(null);
  const [publicacion, setPublicacion] = useState({
    titulo: "",
    precio: "",
    descripcion: "",
    
  });
  const validarCrearPublicacion = () => {

    
    return (
      Boolean(publicacion.descripcion) &&
      Boolean(publicacion.precio) &&
      Boolean(publicacion.titulo) &&
      publicacion.precio > 0 &&
      Boolean(articulo)

      
    )
  };


  const crearPublicacionPost = () => {
    axiosInstance
      .post("https://backend-marketplace-5ntergt05-victoraguilera12.vercel.app/publicacion", {
        publicacion: publicacion,
        id_producto: articulo.id_producto, 
        id_servicio: articulo.id_servicio
        
      })
      .then((x) => {
        if (x.status != 200) {
          toast.error("Ocurrió un error al crear la publicacion :(");
          return;
        }
        toast.success("La publicacion fue creada correctamente!");
        navigate ('/admin/dashboard')
      });
  };




  



  return (
    <Card className="h-screen">
      <div className="flex gap-4 items-center mb-2">
        <GoBack />
        <h1 className="text-xl tracking-wide text-indigo-400">
          Crear publicación
        </h1>
      </div>

      <div className="grid h-full grid-cols-2 gap-4">
        <Card className="h-full max-h-full">
          <h1 className="text-xl tracking-wide text-slate-400 mb-4">
            Tipo de publicación
          </h1>
          <CrearArticulos onSelectedArticulo={(articulo, tipo) => {
            setArticulo(articulo);
            setTipo(tipo);
            console.log(articulo)
            console.log(tipo)
          }}></CrearArticulos>
        </Card>
        <Card className="h-full">
          <h1 className="text-xl tracking-wide text-slate-400">Detalles</h1>
          <Label >Título</Label>
          <Input
            
            onChange={(value) => setPublicacion({ ...publicacion, titulo: value })}
            placeholder="Se vende..."></Input>
         
          <Label >Descripción</Label>
          <textarea id="descripcion" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Write your thoughts here..."
            onChange={(e) => setPublicacion({ ...publicacion, descripcion: e.target.value })} 
            value={publicacion.descripcion}
          >

          </textarea>
          <Label>Precio $

          </Label>
          <Input type="number" placeholder="1000" 
              onChange={(value) => setPublicacion({ ...publicacion, precio: value })}>

          </Input>
      
          <Button
            className="w-full justify-center my-4"
            onClick={crearPublicacionPost}
            disabled={!validarCrearPublicacion()}
          >
            Publicar Producto
          </Button>
        </Card>
      </div>
    </Card>
  );
}
