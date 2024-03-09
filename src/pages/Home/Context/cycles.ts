import { createContext } from 'react'
import { Cycle } from '../Types/Cycle'

interface CyclesContextProps {
  activeCycle: Cycle | undefined
  amountSecondsPassed: number
  handleFinishActiveCycle: () => void
  setAmountSecondsPassed: (newState: number) => void
}

export const CyclesContext = createContext({} as CyclesContextProps)
