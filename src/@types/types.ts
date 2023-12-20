import { ReactNode } from "react";

export interface Transactions{
    id: number;
    description: string;
    type: 'income'| 'outcome';
    price: number;
    category: string;
    createdAt: string;

}

export interface TransactionsContextType {
    transactions: Transactions[];
    fetchTransactions: (query?: string) => Promise<void>;
}

export interface TransactionsProviderProps {
    children: ReactNode;
}