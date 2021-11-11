import Modal from 'react-modal';

import closeImg from 'assets/fechar.svg';
import entradaImg from 'assets/entradas.svg';
import saidaImg from 'assets/saidas.svg';

import { Container, TransactionTypeContainer } from './styles';
import { useState } from 'react';

interface NewTransactionModalProps {
   isOpen: boolean;
   onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

   const [type, setType] = useState('deposit');

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
         <Container>
            <h2>Cadastrar transação</h2>
            <input 
               placeholder='Titulo'
            />

            <input 
               type="number"
               placeholder='Valor'
            />

            <TransactionTypeContainer>
               <button
                  type='button'
                  onClick={() => setType('deposit')}
               >
                  <img src={entradaImg} alt="Entrada" />
                  <span>Entrada</span>
               </button>

               <button
                  type='button'
                  onClick={() => setType('withdraw')}
               >
                  <img src={saidaImg} alt="Saída" />
                  <span>Saída</span>
               </button>
            </TransactionTypeContainer>

            <input
               type="text"
               placeholder='Categoria'
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