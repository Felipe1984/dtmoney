import { Summary } from "components/Summary";
import { TransactionsTable } from "components/TransactionTable";
import { Container } from "./styles";

export function Dashboard() {
   return(
      <Container>
         <Summary />
         <TransactionsTable />
      </Container>
   );
}