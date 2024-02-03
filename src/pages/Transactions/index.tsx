import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import {
  PriceHeighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHeighLight variant="income">R$ 12.000,00</PriceHeighLight>
              </td>
              <td>Venda</td>
              <td>03/02/2024</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHeighLight variant="outcome">-R$ 59,00</PriceHeighLight>
              </td>
              <td>Alimentação</td>
              <td>05/02/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
