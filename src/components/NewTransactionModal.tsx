'use client';
import * as Dialog from '@radix-ui/react-dialog';

export function NewTransactionModal() {
   return (
      <>
         <Dialog.Portal>
            <Dialog.Overlay className="bg-theme-gray1-background opacity-50 fixed inset-0 w-full h-full " />
            <Dialog.Content
               className="w-fit rounded-md px-10 py-12 bg-theme-gray3-shape-secondary fixed 
               top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
               <Dialog.Title className="text-theme-gray7-titles text-3xl">
                  Nova Transação
               </Dialog.Title>
               <form action="" className="flex flex-col">
                  <input
                     type="text"
                     placeholder="Descrição"
                     className="bg-theme-gray1-background"
                  />
                  <input
                     type="number"
                     placeholder="Preço"
                     className="bg-theme-gray1-background"
                  />
                  <input
                     type="text"
                     placeholder="required"
                     className="bg-theme-gray1-background"
                  />
                  <button type="submit">Cadastrar</button>
               </form>
               <Dialog.Close>Close</Dialog.Close>
            </Dialog.Content>
         </Dialog.Portal>
      </>
   );
}
