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

   async function fetchTransactions(query?: string) {
      const url = new URL('http://localhost:3333/transactions');

      if (query) {
         url.searchParams.append('q', query);
      }
      const response = await fetch(url);
      const data = await response.json();

      setTransactions(data);
   }
   useEffect(() => {
      fetchTransactions();
   }, []);

   return (
      <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
         {children}
      </TransactionsContext.Provider>
   );
}
