export function Table() {
   return (
      <div className="container m-auto px-6 md:px-40 mt-6 ">
         <div className="bg-theme-gray3-shape-secondary grid grid-cols-5 rounded-md text-left w-full mb-2">
            <div className="b py-5 px-8 col-span-2 ">
               Desenvolvimento do site
            </div>
            <div className="text-theme-green-light py-5 px-8">R$ 12.000,00</div>
            <div className="py-5 px-8">Venda</div>
            <div className="py-5 px-8 text-right">11/12/2023</div>
         </div>
         <div className="bg-theme-gray3-shape-secondary grid grid-cols-5 rounded-md text-left w-full mb-2">
            <div className="b py-5 px-8 col-span-2">
               Desenvolvimento do site
            </div>
            <div className="text-theme-green-light py-5 px-8">R$ 12.000,00</div>
            <div className="py-5 px-8">Venda</div>
            <div className="py-5 px-8 text-right">11/12/2023</div>
         </div>
         <div className="bg-theme-gray3-shape-secondary grid grid-cols-5 rounded-md text-left w-full mb-2">
            <div className="py-5 px-8 col-span-2">Hamburguer</div>
            <div className="text-theme-red py-5 px-8">- R$ 59,00</div>
            <div className="py-5 px-8">Alimentação</div>
            <div className="py-5 px-8 text-right">11/12/2023</div>
         </div>
      </div>
   );
}
