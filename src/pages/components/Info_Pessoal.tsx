import { Span } from 'next/dist/trace';
import {useState,useEffect, useRef} from 'react';
import Input from './Inputs';

function InfoForm(){
    const [nome,setNome] = useState([]);
    const [email,setEmail] = useState([]);


    function Submit(e){
        e.preventDefault();
        
    }




    return (
        <form>
            <div>
                <h1 className="text-3xl font-bold text-slate-800">Informações Pessoais</h1>
                <p className="text-slate-400">Por Favor Forneça seu Nome, Email e Número de Telefone</p>
            </div>
            <div>
            <Input type={'text'} name={'Nome:'} placeholder={'Coloque Seu Nome'}    setVariable={setNome} variable={nome} />
            <Input type={'email'} name={'Email:'} placeholder={'Coloque Seu Email'} setVariable={setEmail} variable={email} />
            </div>
            <div className="w-full flex justify-end"><button type="submit" onClick={Submit} className="bg-blue-900 text-white py-2 px-5 rounded-md">Próximo</button></div>
        </form>
    );
}

export default InfoForm;