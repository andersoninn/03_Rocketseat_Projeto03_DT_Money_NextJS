'use client';

import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';

export function Summary() {
   return (
      <section className="w-[280px] md:w-auto md:container m-auto flex lg:grid lg:grid-cols-3 px-40 gap-8 -mt-20 overflow-x-auto">
         <div className="bg-theme-gray4-shape-tertiary rounded-md p-8 min-w-[280px]">
            <header className="flex items-center justify-between text-theme-gray6-base-text">
               <span>Entradas</span>
               <ArrowCircleUp size={32} className="text-theme-green-light" />
            </header>
            <strong className="block mt-6 text-3xl text-theme-gray7-titles">
               R$ 17.400,00
            </strong>
         </div>
         <div className="bg-theme-gray4-shape-tertiary rounded-md p-8 min-w-[280px]">
            <header className="flex items-center justify-between text-theme-gray6-base-text">
               <span>Saída</span>
               <ArrowCircleDown size={32} className="text-theme-red" />
            </header>
            <strong className="block mt-6 text-3xl text-theme-gray7-titles">
               R$ 17.400,00
            </strong>
         </div>
         <div className="bg-theme-green-dark rounded-md p-8 min-w-[280px]">
            <header className="flex items-center justify-between text-theme-gray6-base-text">
               <span>Total</span>
               <CurrencyDollar size={32} className="text-white" />
            </header>
            <strong className="block mt-6 text-3xl text-theme-gray7-titles">
               R$ 17.400,00
            </strong>
         </div>
      </section>
   );
}
