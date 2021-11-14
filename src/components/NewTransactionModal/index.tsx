import Modal from 'react-modal';
import { FormEvent, useContext, useState } from 'react';
import { TransactionsContext } from 'TransactionsContext';

import closeImg from 'assets/fechar.svg';
import entradaImg from 'assets/entradas.svg';
import saidaImg from 'assets/saidas.svg';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
   isOpen: boolean;
   onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
   const { createTransaction } = useContext(TransactionsContext);

   const [title, setTitle] = useState('')
   const [category, setCategory] = useState('')
   const [amount, setAmout] = useState(0)
   const [type, setType] = useState('deposit');

   async function handleCreateNewTransaction(event: FormEvent) {
      event.preventDefault()

      await createTransaction({
         amount,
         category,
         title,
         type
      })

      setAmout(0);
      setTitle('');
      setCategory('');
      setType('deposit');
      
      onRequestClose()
   }

   return (
      <Modal
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         overlayClassName="react-modal-overlay"
         className="react-modal-content"
      >
         <button
            type="button"
            onClick={onRequestClose}
            className='react-modal-close'
         >
            <img src={closeImg} alt="Fechar modal" />
         </button>
         <Container onSubmit={handleCreateNewTransaction} >
            <h2>Cadastrar transação</h2>
            <input 
               placeholder='Titulo'
               value={title}
               onChange={event => setTitle(event.target.value)}
            />

            <input 
               type="number"
               placeholder='Valor'
               value={amount}
               onChange={event => setAmout(Number(event.target.value))}
            />

            <TransactionTypeContainer>
               <RadioBox
                  type='button'
                  onClick={() => setType('deposit')}
                  isActive={type === 'deposit'}
                  activeColor="green"
               >
                  <img src={entradaImg} alt="Entrada" />
                  <span>Entrada</span>
               </RadioBox>

               <RadioBox
                  type='button'
                  onClick={() => setType('withdraw')}
                  isActive={type === 'withdraw'}
                  activeColor="red"
               >
                  <img src={saidaImg} alt="Saída" />
                  <span>Saída</span>
               </RadioBox>
            </TransactionTypeContainer>

            <input
               type="text"
               placeholder='Categoria'
               value={category}
               onChange={event => setCategory(event.target.value)}
            />

            <button
               type='submit'
            >
               Cadastrar
            </button>
         </Container>
      </Modal>
   );
}