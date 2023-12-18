export interface Transactions{
    id: number;
    description: string;
    type: 'income'| 'outcome';
    price: number;
    category: string;
    createdAt: string;

}