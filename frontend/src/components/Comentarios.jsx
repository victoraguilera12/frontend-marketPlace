import Card from "./ui/Card"
import MiniUser from "./ui/MiniUser"

export default function Comentarios({comentarios}){
    return(
        <>
        {comentarios && comentarios.map((x,i)=>{
            return (
                <Card key={i}>
                    <div className="flex gap-3">
                    <MiniUser imagen={x.imagen} nombre={x.nombre_usuario} ></MiniUser>

<small className="text-xs text-slate-400">Publicado el {new Date(x.fecha).toLocaleDateString("es-CL")}</small>
                    </div>
                    <p className="text-slate-700">{x.mensaje}</p>
                </Card>
            )
        })}
        </>
    )
}