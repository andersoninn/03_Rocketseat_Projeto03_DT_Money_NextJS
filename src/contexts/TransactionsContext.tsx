'use client';
import {
   Transactions,
   TransactionsContextType,
   TransactionsProviderProps,
} from '@/@types/types';
import { api } from '@/lib/axios';
import { createContext, useEffect, useState } from 'react';

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
   const [transactions, setTransactions] = useState<Transactions[]>([]);

   async function fetchTransactions(query?: string) {
      const response = await api.get('transactions', {
         params: {
            q: query,
         },
      });

      setTransactions(response.data);
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
