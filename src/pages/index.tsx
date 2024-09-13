

export default function Home() {
  return (
    <main className="bg-blue-300 w-full h-screen flex flex-col  justify-center items-center">
      <div id="stepform-phone" className="w-full h-1/5 absolute top-0 bg-cover lg:hidden"></div>
      <div className=" bg-white lg:w-4/5 lg:h-4/5 w-11/12 rounded-md p-3 flex-col lg:flex lg:flex-row">
      <div className=" h-full w-96 bg-contain box-border hidden lg:inline" id="step-form">
        <div className=" flex flex-col w-fit p-7">
            <span className="flex items-center my-2"><div className="mr-4 bg-cyan-200 size-11 flex justify-center items-center rounded-full text-xl">1</div><h1 className="flex flex-col text-white  text-sm"><span className="opacity-50">Passo 1</span><span className="text-white text-lg ">Informações</span></h1></span>
            <span className="flex  items-center my-2"><div className="mr-4 bg-cyan-200 size-11 flex justify-center items-center rounded-full text-xl">2</div><h1 className="flex flex-col text-blue-200  text-sm">Passo 2<span className="text-white text-lg ">Plano</span></h1></span>
            <span className="flex  items-center my-2"><div className="mr-4 bg-cyan-200 size-11 flex justify-center items-center rounded-full text-xl">3</div><h1 className="flex flex-col text-blue-200 text-sm">Passo 3<span className="text-white text-lg ">Add-ons</span></h1></span>
            <span className="flex  items-center my-2"><div className="mr-4 bg-cyan-200 size-11 flex justify-center items-center rounded-full text-xl">4</div><h1 className="flex flex-col text-blue-200  text-sm">Passo 4<span className="text-white text-lg ">Sumário</span></h1></span>
        </div>
      </div>
      <section className="bg-gray-300 w-max">qweqwe</section>
      </div>
    </main>
  );
}
