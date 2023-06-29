import { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../firebase";
import Button from "./ui/Button";

export default function CargaImagen({ onCargaCompleted }) {
  const [isLoading, setIsLoading] = useState(false);
//   const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const maxFileSize = 5120;
  const uploadImage = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const imageSize = Math.round(file.size / 1024);
    if (imageSize > maxFileSize) {
      console.log("imagen pesa mas de 5mb");
      return;
    }
    // setImage(file);
    // console.log(image);

    const imageRef = ref(storage, `images/${v4() + file.name}`);
    const uploadTask = uploadBytesResumable(imageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        switch (snapshot.state) {
          case "running":
            setIsLoading(true);
            console.log("subiendo");
            break;
          case "success":
            console.log("listeilor");
            break;
        }
      },
      (error) => {
        console.error("No se pudo subir imagen");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUrl(url);
          setIsLoading(false);
          if (onCargaCompleted) {
            onCargaCompleted({
              url:url,
              file:file,
            });
          }
        });
      }
    );
  };

  const clearImagen = () =>{
    setIsLoading(false);
    setUrl("");
  }

  //sin imagen
  //cargando imagen
  //imagen completed
  const renderImagenStatus = () => {
    if (!url) {
      return (
        <>
          <label
            htmlFor="carga-imagen"
            className="cursor-pointer relative w-full h-32 max-h-32 rounded-lg flex flex-col gap-2 justify-center items-center bg-slate-200"
          >
            {isLoading && <div className="w-full z-30 absolute h-full rounded-lg flex justify-center items-center bg-slate-900 opacity-60">
            <em className="text-slate-100 animate-spin iconoir-system-restart"></em>
            </div>}
            
            <em className="iconoir-add-media-image text-2xl"></em>
            <p>Subir imagen</p>
          </label>
          <input
            disabled={isLoading}
            id="carga-imagen"
            className="hidden"
            type="file"
            accept="image/png"
            onChange={(e) => uploadImage(e)}
          />
          <small className="text-slate-500 tracking-tighter mt-2">
            La imagen debe ser en formato PNG y pesar como máximo 5MB
          </small>
        </>
      );
    }else{
        return (
            <div className="w-full h-32 max-h-32 rounded-lg group relative">
                <div className="hidden w-full h-full z-30 absolute rounded-lg justify-center items-center bg-slate-900 opacity-60 group-hover:flex">
                    <Button type="reversed" color="ui" onClick={clearImagen} >Quitar</Button>
                </div>
                <img className="object-contain w-full h-32" src={url}  />

            </div>
        )
    }
  };

  //   setImage(e.target.files[0])
  return (
    <>
      {renderImagenStatus()}
    </>
  );
}
