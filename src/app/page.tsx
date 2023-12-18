
import { Header } from '@/components/Header';
import { SearchForm } from '@/components/SearchForm';
import { Summary } from '@/components/Summary';
import { Table } from '@/components/Table';

export default function Home() {
   return (
      <>
         <Header />
         <Summary />
         <SearchForm />
         <Table />
      </>
   );
}
