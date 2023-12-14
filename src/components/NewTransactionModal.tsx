'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

export function NewTransactionModal() {
  return (
    <>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-theme-gray1-background opacity-70 fixed inset-0 w-full h-full" />
        <Dialog.Content
          className="w-[535px] md:w-[535 px] rounded-md px-10 py-12 bg-theme-gray2-shape-main fixed 
               top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Dialog.Title className="text-theme-gray7-titles text-3xl font-bold">
            Nova Transação
          </Dialog.Title>
          <Dialog.Close>
            <button className="absolute top-6 right-6 cursor-pointer text-theme-gray6-base-text">
              <X size={24} />
            </button>
          </Dialog.Close>
          <form action="" className="flex flex-col mt-4 gap-4">
            <input
              type="text"
              placeholder="Descrição"
              className="bg-theme-gray1-background rounded-md p-4 placeholder:text-theme-gray5-placeholder border
                     border-theme-gray1-background focus:border-theme-green-dark"
              required
            />
            <input
              type="number"
              placeholder="Preço"
              className="bg-theme-gray1-background rounded-md p-4 placeholder:text-theme-gray5-placeholder border
                     border-theme-gray1-background focus:border-theme-green-dark"
              required
            />
            <input
              type="text"
              placeholder="required"
              className="bg-theme-gray1-background rounded-md p-4 placeholder:text-theme-gray5-placeholder border
                     border-theme-gray1-background focus:border-theme-green-dark"
              required
            />
            <div className="flex gap-4 justify-between">
              <button
                className="w-52 h-14 flex gap-2 items-center justify-center bg-theme-gray3-shape-secondary border border-theme-gray3-shape-secondary rounded-md text-theme-green-dark
              focus:bg-theme-green-dark focus:text-theme-gray6-base-text"
              >
                <ArrowCircleUp
                  size={24}
                  className=" hover:text-theme-gray6-base-text "
                />
                {/* text-theme-green-light */}
                <span className="text-theme-gray6-base-text">Entrada</span>
              </button>
              <button
                className="w-52 h-14 flex gap-2 items-center justify-center bg-theme-gray3-shape-secondary border border-theme-gray3-shape-secondary rounded-md text-theme-red
              focus:bg-theme-red-dark focus:text-theme-gray6-base-text"
              >
                <ArrowCircleDown
                  size={24}
                  className="hover:text-theme-gray6-base-text"
                />
                <span className="text-theme-gray6-base-text">Saída</span>
              </button>
            </div>
            <button
              type="submit"
              className="h-14 p-5 mt-6 bg-theme-green hover:bg-theme-green-dark text-theme-gray6-base-text rounded-md cursor-pointer transition ease-in duration-200"
            >
              Cadastrar
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </>
  );
}
