export default function({textClass,gradientClass}){
    return (
        <strong className={`${textClass?textClass:"text-2xl"} font-display tracking-widest font-extrabold ${gradientClass?gradientClass:'from-violet-200 to-indigo-500'} bg-clip-text bg-gradient-to-r text-transparent`}>patronato</strong>
    );
}