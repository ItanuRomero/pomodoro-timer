import { useContext } from 'react'
import { HistoryContainer, Status, TableContainer } from './styles'
import { CycleContext } from '../Home/Context/cycles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function History() {
  const { cycles } = useContext(CycleContext)
  return (
    <HistoryContainer>
      <h2>Meu histórico</h2>

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
            {cycles
              .map((cycle) => (
                <tr key={cycle.id}>
                  <td>{cycle.subject}</td>
                  <td>{cycle.minutes}m</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status color="green">Concluído</Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status color="red">Interrompido</Status>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status color="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              ))
              .reverse()}
          </tbody>
        </table>
      </TableContainer>
    </HistoryContainer>
  )
}
