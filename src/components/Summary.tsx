'use client';

import { TransactionsContext } from '@/contexts/TransactionsContext';
import { priceFormatter } from '@/utils/formatter';
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useContext } from 'react';

export function Summary() {
   const { transactions } = useContext(TransactionsContext);

   const summary = transactions.reduce(
      (acc, transaction) => {
         if (transaction.type === 'income') {
            acc.income += transaction.price;
            acc.total += transaction.price;
         } else {
            acc.outcome += transaction.price;
            acc.total -= transaction.price;
         }

         return acc;
      },
      {
         income: 0,
         outcome: 0,
         total: 0,
      }
   );

   return (
      <section className="w-[280px] md:w-auto md:container m-auto flex lg:grid lg:grid-cols-3 px-40 gap-8 -mt-20 overflow-x-auto">
         <div className="bg-theme-gray4-shape-tertiary rounded-md p-8 min-w-[280px]">
            <header className="flex items-center justify-between text-theme-gray6-base-text">
               <span>Entradas</span>
               <ArrowCircleUp size={32} className="text-theme-green-light" />
            </header>
            <strong className="block mt-6 text-3xl text-theme-gray7-titles">
               {priceFormatter.format(summary.income)}
            </strong>
         </div>
         <div className="bg-theme-gray4-shape-tertiary rounded-md p-8 min-w-[280px]">
            <header className="flex items-center justify-between text-theme-gray6-base-text">
               <span>Saída</span>
               <ArrowCircleDown size={32} className="text-theme-red" />
            </header>
            <strong className="block mt-6 text-3xl text-theme-gray7-titles">
               {priceFormatter.format(summary.outcome)}
            </strong>
         </div>
         <div className="bg-theme-green-dark rounded-md p-8 min-w-[280px]">
            <header className="flex items-center justify-between text-theme-gray6-base-text">
               <span>Total</span>
               <CurrencyDollar size={32} className="text-white" />
            </header>
            <strong className="block mt-6 text-3xl text-theme-gray7-titles">
               {priceFormatter.format(summary.total)}
            </strong>
         </div>
      </section>
   );
}
