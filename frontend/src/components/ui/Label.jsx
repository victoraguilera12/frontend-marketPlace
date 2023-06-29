export default function({children,className}){
    return(
        <h1 className={`text-sm font-bold tracking-tight text-slate-500 ${className?className:""}`}>{children}</h1>
    )
}