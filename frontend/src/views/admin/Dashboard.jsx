import { useContext } from "react";
import AuthContext from "../../authContext";
import Comentarios from "../../components/Comentarios";
import MisPublicaciones from "../../components/MisPublicaciones";
import Card from "../../components/ui/Card";

export default function () {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="flex gap-4 max-h-full h-full">
    <Card className="flex-1 max-h-full p">
      <h2 className="text-xl font-semibold text-slate-400 mb-2">
        Mis Publicaciones
      </h2>
      <MisPublicaciones />
    </Card>
    <div className="flex-1 flex flex-col gap-4">
      <Card className="flex-1">
        <h2 className="text-xl font-semibold text-slate-400">
          Últimos Comentarios
        </h2>

        <div className="h-full overflow-y-auto relative">
          <div className="flex flex-col gap-3 my-2 mb-2 absolute right-0 left-0 p-2">
            <Comentarios
              comentarios={[{}, {}, {}, {}, {}, {}]}
            ></Comentarios>
          </div>
        </div>
      </Card>
      <Card className="flex-1">
        <h2 className="text-xl font-semibold text-slate-400">
          Mensajes Directos
        </h2>
        <div className="h-full overflow-y-auto relative">
          <div className="flex flex-col gap-3 my-2 mb-2 absolute right-0 left-0 p-2">
            <Comentarios
              comentarios={[{}, {}, {}, {}, {}, {}]}
            ></Comentarios>
          </div>
        </div>
      </Card>
    </div>
  </div>
  );
}
