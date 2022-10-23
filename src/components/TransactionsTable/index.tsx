import { Container } from "./styles";
import { useEffect } from "react";
import { api } from "../../services/api";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Dev site</td>
            <td className="deposit">R$12.000</td>
            <td>Dev</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Dev site</td>
            <td className="withdraw"> - R$1.100</td>
            <td>Casa</td>
            <td>17/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
