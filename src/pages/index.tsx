import InfoForm from "./components/Info_Pessoal";


export default function Home() {
  //teste
  return (
    <main className="bg-blue-300 w-full h-screen flex flex-col  justify-center items-center">
      <div id="stepform-phone" className="w-full h-2/6 z-0 absolute top-0 bg-cover lg:hidden justify-center flex items-start">        
          <div className=" flex w-fit p-5">
            <span className="flex items-center mb-3"><div className="mr-4 bg-cyan-200 size-11 flex justify-center items-center rounded-full text-xl">1</div></span>
            <span className="flex items-center mb-3"><div className="mr-4 bg-cyan-200 size-11 flex justify-center items-center rounded-full text-xl">2</div></span>
            <span className="flex items-center mb-3"><div className="mr-4 bg-cyan-200 size-11 flex justify-center items-center rounded-full text-xl">3</div></span>
            <span className="flex items-center mb-3"><div className="mr-4 bg-cyan-200 size-11 flex justify-center items-center rounded-full text-xl">4</div></span>
          </div>
        </div>
      <div className=" bg-white lg:w-4/5 lg:h-4/5 w-11/12  z-10 rounded-md p-3 flex-col lg:flex lg:flex-row">
      <div className=" h-full w-96 bg-contain box-border hidden lg:inline" id="step-form">
        <div className=" flex flex-col w-fit p-5">
            <span className="flex items-center mb-3"><div className="mr-4 bg-cyan-200 size-11 flex justify-center items-center rounded-full text-xl">1</div><h1 className="flex flex-col text-white  text-sm"><span className="opacity-50">Passo 1</span><span className="text-white text-lg ">Informações</span></h1></span>
            <span className="flex  items-center my-3"><div className="mr-4 bg-cyan-200 size-11 flex justify-center items-center rounded-full text-xl">2</div><h1 className="flex flex-col text-blue-200  text-sm"><span className="opacity-50">Passo 2</span><span className="text-white text-lg ">Plano</span></h1></span>
            <span className="flex  items-center my-3"><div className="mr-4 bg-cyan-200 size-11 flex justify-center items-center rounded-full text-xl">3</div><h1 className="flex flex-col text-blue-200 text-sm"><span className="opacity-50">Passo 3</span><span className="text-white text-lg ">Add-ons</span></h1></span>
            <span className="flex  items-center my-3"><div className="mr-4 bg-cyan-200 size-11 flex justify-center items-center rounded-full text-xl">4</div><h1 className="flex flex-col text-blue-200  text-sm"><span className="opacity-50">Passo 4</span><span className="text-white text-lg ">Sumário</span></h1></span>
        </div>
      </div>
      <section className="bg-gray-50 lg:w-1/2">
        <div>
          <InfoForm />
        </div>
      </section>
      </div>
    </main>
  );
}
