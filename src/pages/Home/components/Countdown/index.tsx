import { useContext, useEffect } from 'react'
import {
  CountDownContainer,
  CountDownNumbers,
  DividerContainer,
} from './styles'
import { CycleContext } from '../../Context/cycles'
import { differenceInSeconds } from 'date-fns'

export function Countdown() {
  const {
    activeCycle,
    amountSecondsPassed,
    finishActiveCycle,
    setAmountSecondsPassed,
  } = useContext(CycleContext)
  const minutesInSeconds = activeCycle ? activeCycle.minutes * 60 : 0
  const currentSeconds = activeCycle
    ? minutesInSeconds - amountSecondsPassed
    : 0

  const cycleMinutes = Math.floor(currentSeconds / 60)
  const cycleSeconds = currentSeconds % 60

  const minutes = String(cycleMinutes).padStart(2, '0')
  const seconds = String(cycleSeconds).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    } else {
      document.title = 'Pomodoro timer'
    }
  }, [activeCycle, minutes, seconds])

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )
        if (secondsDifference >= minutesInSeconds) {
          finishActiveCycle()
        } else setAmountSecondsPassed(secondsDifference)
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, minutesInSeconds, setAmountSecondsPassed, finishActiveCycle])
  return (
    <CountDownContainer>
      <CountDownNumbers>
        <span>{minutes[0]}</span>
        <span>{minutes[1]}</span>
      </CountDownNumbers>
      <DividerContainer>:</DividerContainer>
      <CountDownNumbers>
        <span>{seconds[0]}</span>
        <span>{seconds[1]}</span>
      </CountDownNumbers>
    </CountDownContainer>
  )
}
