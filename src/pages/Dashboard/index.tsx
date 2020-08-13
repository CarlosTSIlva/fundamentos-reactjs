import React, { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import api from '../../services/api';

import Header from '../../components/Header';

import formatValue from '../../utils/formatValue';

import { Container, CardContainer, Card, TableContainer } from './styles';

interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
  created_at: Date;
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const Dashboard: React.FC = () => {
  // const [transactions, setTransactions] = useState<Transaction[]>([]);
  // const [balance, setBalance] = useState<Balance>({} as Balance);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      // TODO
    }

    loadTransactions();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Entradas</p>
              <img src={income} alt="Income" />
            </header>
            <h1 data-testid="balance-income">R$ 5.000,00</h1>
          </Card>
          <Card>
            <header>
              <p>Saídas</p>
              <img src={outcome} alt="Outcome" />
            </header>
            <h1 data-testid="balance-outcome">R$ 1.000,00</h1>
          </Card>
          <Card total>
            <header>
              <p>Total</p>
              <img src={total} alt="Total" />
            </header>
            <h1 data-testid="balance-total">R$ 4000,00</h1>
          </Card>
        </CardContainer>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <div>
                  <th>
                    <th>Título</th>
                    <FiChevronDown color="#969CB3" />
                  </th>
                </div>
                <div>
                  <th>
                    <th>Preço</th>
                    <FiChevronDown color="#969CB3" />
                  </th>
                </div>
                <div>
                  <th>
                    <th>Categoria</th>
                    <FiChevronDown color="#969CB3" />
                  </th>
                </div>
                <div>
                  <th>
                    <th>Data</th>
                    <FiChevronUp color="#FF872C" margin-button={30000} />
                  </th>
                </div>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="title">Computer</td>
                <td className="income">R$ 5.000,00</td>
                <td>Sell</td>
                <td>20/04/2020</td>
              </tr>
              <tr>
                <td className="title">Website Hosting</td>
                <td className="outcome">- R$ 1.000,00</td>
                <td>Hosting</td>
                <td>19/04/2020</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
