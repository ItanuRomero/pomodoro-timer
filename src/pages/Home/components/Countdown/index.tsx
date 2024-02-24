import {
  CountDownContainer,
  CountDownNumbers,
  DividerContainer,
} from './styles'

export function Countdown({
  minutes,
  seconds,
}: {
  minutes: string
  seconds: string
}) {
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
