'use client';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { ArrowCircleDown, ArrowCircleUp, CircleNotch, X } from 'phosphor-react';

const newTransactionModalSchema = z.object({
   description: z.string(),
   price: z.number(),
   category: z.string(),
   type: z.enum(['income', 'outcome']).optional(),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionModalSchema>;

export function NewTransactionModal() {
   const {
      register,
      handleSubmit,
      formState: { isSubmitting },
   } = useForm<NewTransactionFormInputs>({
      resolver: zodResolver(newTransactionModalSchema),
   });

   async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log(data);
   }

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
               <form
                  onSubmit={handleSubmit(handleCreateNewTransaction)}
                  className="flex flex-col mt-4 gap-4"
               >
                  <input
                     type="text"
                     placeholder="Descrição"
                     className="bg-theme-gray1-background rounded-md p-4 placeholder:text-theme-gray5-placeholder 
                     border border-theme-gray1-background focus:border-theme-green-dark"
                     required
                     {...register('description')}
                  />
                  <input
                     type="number"
                     placeholder="Preço"
                     className="bg-theme-gray1-background rounded-md p-4 placeholder:text-theme-gray5-placeholder 
                     border border-theme-gray1-background focus:border-theme-green-dark"
                     required
                     {...register('price', { valueAsNumber: true })}
                  />
                  <input
                     type="text"
                     placeholder="Categoria"
                     className="bg-theme-gray1-background rounded-md p-4 placeholder:text-theme-gray5-placeholder border
                     border-theme-gray1-background focus:border-theme-green-dark"
                     required
                     {...register('category')}
                  />

                  <RadioGroup.Root className="flex gap-4 justify-between">
                     <RadioGroup.Item
                        value="income"
                        className="w-52 h-14 flex gap-2 items-center justify-center bg-theme-gray3-shape-secondary 
                        border border-theme-gray3-shape-secondary rounded-md text-theme-green-dark
                        focus:text-theme-gray6-base-text  focus:bg-theme-green-dark
                        data-[state=checked]:bg-theme-green-dark data-[state=checked]:text-theme-gray6-base-text
                        hover:bg-theme-gray4-shape-tertiary transition ease-in duration-200git "
                     >
                        <ArrowCircleUp
                           size={24}
                           className=" hover:text-theme-gray6-base-text "
                        />
                        <span className="text-theme-gray6-base-text">
                           Entrada
                        </span>
                     </RadioGroup.Item>
                     <RadioGroup.Item
                        value="outcome"
                        className="w-52 h-14 flex gap-2 items-center justify-center bg-theme-gray3-shape-secondary
                        border border-theme-gray3-shape-secondary rounded-md text-theme-red
                        focus:text-theme-gray6-base-text data-[state=checked]:bg-theme-red-dark
                        data-[state=checked]:text-theme-gray6-base-text hover:bg-theme-gray4-shape-tertiary
                        transition ease-in duration-200"
                     >
                        <ArrowCircleDown
                           size={24}
                           className="hover:text-theme-gray6-base-text"
                        />
                        <span className="text-theme-gray6-base-text">
                           Saída
                        </span>
                     </RadioGroup.Item>
                  </RadioGroup.Root>

                  {isSubmitting ? (
                     <button
                        type="submit"
                        className="h-14 p-5 mt-6 bg-theme-red
                     text-theme-gray6-base-text rounded-md cursor-not-allowed flex items-center justify-center"
                        disabled={isSubmitting}
                     >
                        <CircleNotch
                           size={20}
                           className="animate-[spin_2s_linear_infinite]"
                        />
                     </button>
                  ) : (
                     <button
                        type="submit"
                        className="h-14 p-5 mt-6 bg-theme-green hover:bg-theme-green-dark
                     text-theme-gray6-base-text rounded-md cursor-pointer transition ease-in duration-200"
                     >
                        Cadastrar
                     </button>
                  )}
               </form>
            </Dialog.Content>
         </Dialog.Portal>
      </>
   );
}
