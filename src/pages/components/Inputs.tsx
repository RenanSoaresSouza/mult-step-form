import { useEffect,useRef,useState } from "react";

function Input({type,name,placeholder,setVariable,variable}){
    let Change = useRef(false);
    const [isempty,setIsempty] = useState(false);
    const [isvalid,setIsvalid] = useState(true);

    useEffect(()=>{
        if (variable.length == 0 && Change.current == true) {
            setIsempty(true);
        }
        else if (type == 'email'){
            if ( (variable.indexOf('@') == -1) && (variable.indexOf('.') == -1)){
                alert(variable.indexOf('.'))
                alert('email inválido')
            }
            
        }
        else {
            setIsempty(false);

        }

    },[variable])

    return (
        <div className="flex flex-col">
            <div className='flex flex-row justify-between'>{name} <span>{isempty == true?('Digite Um Valor'):(isvalid == false?('Digite Um valor Válido'):(''))}</span></div>
            <div ><input required type={type} placeholder={placeholder} onInput={()=>{Change.current=true}} onChange={(e) => {setVariable(e.currentTarget.value)}} className=" transition-all outline-none w-full p-4 border-slate-300 border rounded-lg "/></div>
        </div>
    );
}

export default Input;