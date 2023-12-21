'use client';
import Logo from '@/../public/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from './NewTransactionModal';
import Image from 'next/image';

// Tailwing - layout / actions /responsive

export function Header() {
  return (
    <div className="bg-theme-gray1-background pt-10 pb-32 w-screen">
      <div className="container m-auto flex justify-between items-center px-6 md:px-40">
        <div className="flex items-center gap-4">
          <Image src={Logo} alt="" />
          <h1 className="text-xl font-bold">DT Money</h1>
        </div>

        <Dialog.Root>
          <Dialog.DialogTrigger asChild>
            <button className=" bg-theme-green text-white h-12 font-bold px-5 rounded-md transition ease-in duration-200
            cursor-pointer hover:bg-theme-green-dark ">
              Nova transação
            </button>
          </Dialog.DialogTrigger>
          <NewTransactionModal />
        </Dialog.Root>
      </div>
    </div>
  );
}
