import { useContext } from "react";
import Card from "../components/ui/Card";
import Logo from "../components/ui/Logo";
import MiniUser from "../components/ui/MiniUser";
import Button from "../components/ui/Button";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../authContext";

export default function Admin({children}) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const weekDays = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const toMarketplace = () => navigate('/marketplace');

  const paths = [
    {end:true,name:"Dashboard",url:"/admin/dashboard"},
    {end:false,name:"Publicaciones",url:"/admin/publicaciones"},
    {end:false,name:"Productos",url:"/admin/productos"},
    {end:false,name:"Servicios",url:"/admin/servicios"},
  ]

  const today = new Date();
  return (
    <div className="pt-8 px-6 sm:px-12 lg:px-8 xl:px-24 min-h-screen ">
         
    <main className="h-[calc(100vh-64px)] gap-8 w-full flex">
      <aside className="flex-[2] h-full">
        <Card className="h-full">
          <Logo
            textClass="text-3xl"
            gradientClass="from-violet-500 to-indigo-400"
          />
          <div className="mt-12 flex flex-col gap-4">
          {
            paths.map((x,i)=><NavLink className={({isActive})=>
            isActive?"transition-all  bg-violet-300 text-violet-800 font-bold p-4 rounded-lg":"transition-all p-4 rounded-lg hover:bg-violet-100"} key={i} end={x.end} to={x.url}>{x.name}</NavLink>)
          }
          </div>


        </Card>
      </aside>
      <aside className="flex-[8] h-full gap-4 flex flex-col ">
        <Card className="w-full">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <MiniUser {...user} />
              <div className="self-center text-sm text-indigo-400">
                {weekDays[today.getDay() - 1]} {today.getDate()} de{" "}
                <span className="capitalize">
                  {months[today.getMonth() - 1]}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={toMarketplace} type="reversed" iconName="iconoir-shop-alt">
                Ir a Marketplace
              </Button>
              <NavLink to="/admin/publicar">
              <Button iconName="iconoir-sparks">Publicar</Button>
              </NavLink>
            </div>
          </div>
        </Card>
        {children}
      </aside>
    </main>
    </div>
  );
}
