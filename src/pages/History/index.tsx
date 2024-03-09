import { useContext } from 'react'
import { HistoryContainer, Status, TableContainer } from './styles'
import { CycleContext } from '../Home/Context/cycles'

export function History() {
  const { cycles } = useContext(CycleContext)
  return (
    <HistoryContainer>
      <h2>Meu histórico</h2>
      <pre>{JSON.stringify(cycles)}</pre>

      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Um nome ae</td>
              <td>25m</td>
              <td>Há cerca de 2meses</td>
              <td>
                <Status color="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Um nome ae</td>
              <td>25m</td>
              <td>Há cerca de 2meses</td>
              <td>
                <Status color="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Um nome ae</td>
              <td>25m</td>
              <td>Há cerca de 2meses</td>
              <td>
                <Status color="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Um nome ae</td>
              <td>25m</td>
              <td>Há cerca de 2meses</td>
              <td>
                <Status color="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Um nome ae</td>
              <td>15m</td>
              <td>Há cerca de 2meses</td>
              <td>
                <Status color="green">Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </TableContainer>
    </HistoryContainer>
  )
}
