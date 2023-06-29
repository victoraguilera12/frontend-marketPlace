import { useNavigate } from "react-router-dom";

export default function GoBack(){
    const navigation = useNavigate();
    const goBack = () => navigation(-1);
    return (
        <button onClick={goBack} className="flex w-min gap-2 items-center text-xl text-slate-500 px-4 py-1 border-transparent rounded-full border transition-all focus:border-slate-500 hover:bg-slate-200">
        <em className="iconoir-arrow-left "></em>
        <span className="text-base">
        Volver
        </span>
    </button>
    );
}