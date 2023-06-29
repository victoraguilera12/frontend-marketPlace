export default function ({src}){
    return src ? (
        <img
        className="h-8 w-8 rounded-full"
        src={src}
        alt="Imagen de Perfil"
      />
    ) : (
        <div className="h-8 w-8 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center">
            <em className="text-lg iconoir-user"></em>
        </div>
    );
}