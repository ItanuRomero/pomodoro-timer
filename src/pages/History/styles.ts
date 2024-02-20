import styled from 'styled-components'

export const HistoryContainer = styled.main`
  padding: 2rem;
`

export const TableContainer = styled.div`
  flex: 1;
  margin: 1rem 0 0 0;
  overflow: scroll;

  table {
    min-width: 600px;
    width: 100%;
    border-collapse: collapse;
    background-color: ${(props) => props.theme['gray-700']};

    border-radius: 8px;
    padding: 1rem;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      text-align: start;
      padding: 1rem;

      &:first-child {
        border-radius: 8px 0 0 0;
      }

      &:last-child {
        border-radius: 0 8px 0 0;
      }
    }

    td {
      border: 1px solid ${(props) => props.theme['gray-600']};
      padding: 1rem;

      &:first-child {
        width: 50%;
        border-radius: 0 0 0 8px;
      }

      &:last-child {
        border-radius: 0 0 8px 0;
      }
    }
  }
`

const STATUS_OPTIONS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  color: keyof typeof STATUS_OPTIONS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background-color: ${(props) => props.theme[STATUS_OPTIONS[props.color]]};
  }
`
