'use client';
import {
   Transactions,
   TransactionsContextType,
   TransactionsProviderProps,
} from '@/@types/types';
import { createContext, useEffect, useState } from 'react';

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
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
      <TransactionsContext.Provider value={{ transactions }}>
         {children}
      </TransactionsContext.Provider>
   );
}
