export default function Card({children,className,onClick}){
    return (
        <div onClick={onClick} className={`px-8 lg:px-2 xl:px-8 py-4 transition-all drop-shadow-md rounded-md flex flex-col bg-slate-50 ${className?className:''}`}>
        {children}
        </div>
    )
}