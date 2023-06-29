import ProfilePicture from "./ProfilePicture";

export default function MiniUser({ name, email, image, id ,nombreBlanco}) {
  const textoNombre = nombreBlanco ? 'text-slate-50':"text-slate-800"

  return (
    <div className="flex items-center gap-2">
      <ProfilePicture src={image} />
      <div className="flex flex-col">
      <small className={`r-4 whitespace-nowrap font-mono ${textoNombre} font-semibold text-ellipsis`}>{name}</small>
      <small className="mr-4 whitespace-nowrap text-ellipsis text-xs text-slate-500">{email}</small>

      </div>

    </div>
  );
}
