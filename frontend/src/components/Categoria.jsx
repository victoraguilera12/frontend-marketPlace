export default function Categoria({categoria,icono, selectable, onClick,selected}){
    return (
        <div onClick={onClick} className={`select-none w-min px-3 transition-all flex items-center gap-2 rounded-xl drop-shadow ${!selectable && "bg-sky-200 text-sky-800 "}
        ${selectable && !selected && "bg-slate-200 text-slate-600 cursor-pointer hover:bg-indigo-200 hover:text-indigo-700 active:ring-2 active:ring-white active:ring-opacity-60 active:ring-offset-2 active:ring-offset-indigo-300"}
        ${selected && "bg-indigo-600 text-indigo-50 cursor-pointer  shadow-indigo-500"}
        `}>
          {categoria} <em className={`iconoir-${icono}`}></em>
        </div>
    )
}