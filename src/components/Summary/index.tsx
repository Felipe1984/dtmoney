import { Container } from "./styles";
import entradasImg from 'assets/entradas.svg'
import saidasImg from 'assets/saidas.svg'
import totalImg from 'assets/total.svg'
import { TransactionsContext } from "TransactionsContext";
import { useContext } from "react";

export function Summary() {

   const { transactions } = useContext(TransactionsContext);

   // const totalDeposits = transactions.reduce((acc, transaction) => {
   //    if (transaction.type === 'deposit') {
   //       return acc + transaction.amount
   //    }

   //    return acc;
   // }, 0)

   const {deposit, withdraw, total} = transactions.reduce((acc, transaction) => {

      if (transaction.type === 'deposit') {
         acc.deposit += transaction.amount;
         acc.total += transaction.amount;
      } else {
         acc.withdraw += transaction.amount;
         acc.total -= transaction.amount;
      }

      return acc;

   }, {
      deposit: 0,
      withdraw: 0,
      total: 0
   })

   return (
      <Container>
         <div>
            <header>
               <p>Entradas</p>
               <img src={entradasImg} alt="Entradas" />
            </header>
            <strong>{Intl.NumberFormat('pt-BR', {
               style: 'currency',
               currency: 'BRL',
            }).format(deposit)}</strong>
         </div>
         <div>
            <header>
               <p>Saídas</p>
               <img src={saidasImg} alt="Saídas" />
            </header>
            <strong>- {Intl.NumberFormat('pt-BR', {
               style: 'currency',
               currency: 'BRL',
            }).format(withdraw)}</strong>
         </div>
         <div className="highlight-background">
            <header>
               <p>Total</p>
               <img src={totalImg} alt="Total" />
            </header>
            <strong>{Intl.NumberFormat('pt-BR', {
               style: 'currency',
               currency: 'BRL',
            }).format(total)}</strong>
         </div>
      </Container>
   );
}