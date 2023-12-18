'use client';
import { Transactions } from '@/types/types';
import { useEffect, useState } from 'react';

export function Table() {
   const [transactions, setTransactions] = useState<Transactions[]>([]);

   async function loadTransactions() {
      const response = await fetch('http://localhost:3333/transactions');
      const data = await response.json();

      setTransactions(data);
   }
   useEffect(() => {
      loadTransactions();
   }, []);

   return (
      <div className="container m-auto px-6 md:px-40 mt-6">
         {transactions.map((transaction) => {
            return (
               <div
                  className="bg-theme-gray3-shape-secondary grid grid-cols-5 rounded-md text-left w-full mb-2 items-center"
                  key={transaction.id}
               >
                  <div className="py-5 px-8 col-span-2 ">
                     {transaction.description}
                  </div>
                  {transaction.type === 'income' ? (
                     <div className="text-theme-green-light py-5 px-8">
                        {transaction.price}
                     </div>
                  ) : (
                     <div className="text-theme-red py-5 px-8">
                        - {transaction.price}
                     </div>
                  )}

                  <div className="py-5 px-8">{transaction.type}</div>
                  <div className="py-5 px-8 text-right">
                     {transaction.createdAt}
                  </div>
               </div>
            );
         })}
      </div>
   );
}
