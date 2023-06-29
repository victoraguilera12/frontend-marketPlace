import { colors } from "./colors";

export default function Button({
  ref,
  children,
  onClick,
  disabled,
  className,
  isLoading,
  iconName,
  color,
  type //fill (default) | outline | reversed
}) {
    const theme = colors.find(x=>x.id == color) || colors[0];
    let classNames = '';
    let disabledClass = '';
    switch(type){
        case 'fill':
        case undefined:
        case null:
        default:
            classNames = theme.fill;
            disabledClass=colors[3].fill;
            break;
        case 'outline':
            classNames = theme.outline;
            disabledClass=colors[3].outline;
            break;
        case 'reversed':
            classNames = theme.reversed;
            disabledClass=colors[3].reversed;
            break;
    }

    const renderContent = () =>{
        return isLoading ? (<em className="animate-spin iconoir-system-restart"></em>):(
            <>
                  {children}
      {iconName && <em className={'ml-2 '+iconName}></em>}  
            </>
        )
    }
  return (
    <button ref={ref} className={`${className && className}  cursor-pointer flex items-center rounded-xl ${disabled?disabledClass:classNames} transition-all px-6 py-2`} disabled={disabled || isLoading} onClick={onClick}>
    {renderContent()}
    </button>
  );
}
