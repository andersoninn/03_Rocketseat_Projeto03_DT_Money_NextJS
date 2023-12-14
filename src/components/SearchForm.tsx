'use client';
import { MagnifyingGlass } from 'phosphor-react';

export function SearchForm() {
   return (
      <div className="container m-auto px-40 mt-6 flex gap-3">
         <input
            className="flex-1 rounded-md text-theme-gray5-placeholder bg-theme-gray1-background 
            p-4 border border-theme-gray1-background hover:border-theme-green-dark transition ease-in duration-200"
            type="text"
            placeholder="Busque uma Transação"
         />
         <button
            className="flex items-center gap-3 p-4 bg-transparent border border-theme-green rounded-md font-bold  text-theme-green hover:bg-theme-green-dark hover:border-theme-green-dark hover:text-white 
         transition ease-in duration-200"
         >
            <MagnifyingGlass size={20} className=" " />
            <span className=" ">Buscar</span>
         </button>
      </div>
   );
}
