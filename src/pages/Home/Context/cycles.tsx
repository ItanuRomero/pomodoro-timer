import { ReactNode, createContext, useState } from 'react'
import { Cycle } from '../Types/Cycle'

type CycleData = { subject: string; minutes: number }

interface CycleContextProps {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  amountSecondsPassed: number
  finishActiveCycle: () => void
  setAmountSecondsPassed: (newState: number) => void
  createNewCycle: (data: CycleData) => void
  stopCountDown: () => void
}

export const CycleContext = createContext({} as CycleContextProps)

export function CycleContextProvider({ children }: { children: ReactNode }) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [active, setActive] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  function finishActiveCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        return cycle.id === active
          ? {
              ...cycle,
              finishedDate: new Date(),
            }
          : cycle
      }),
    )
    setActive(null)
    setAmountSecondsPassed(0)
  }

  function createNewCycle(data: CycleData) {
    const id = String(new Date().getTime())
    setCycles((state) => [
      ...state,
      {
        id,
        subject: data.subject,
        minutes: data.minutes,
        startDate: new Date(),
      },
    ])
    setActive(id)
    setAmountSecondsPassed(0)
  }

  function stopCountDown() {
    setCycles((state) =>
      state.map((cycle) => {
        return cycle.id === active
          ? {
              ...cycle,
              interruptedDate: new Date(),
            }
          : cycle
      }),
    )
    setActive(null)
  }

  const activeCycle = cycles.find((cycle) => cycle.id === active)

  return (
    <CycleContext.Provider
      value={{
        cycles,
        activeCycle,
        amountSecondsPassed,
        finishActiveCycle,
        setAmountSecondsPassed,
        createNewCycle,
        stopCountDown,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}
