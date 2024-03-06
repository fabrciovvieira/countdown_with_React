// REACT
import React, {useContext} from 'react'
// COMPONENTES
import Counter from '../components/Counter'
import TitleCountDown from '../components/TitleCountDown'
import { Navigate} from 'react-router-dom'
// HOOKS
import useCountDown from '../hooks/useCountDown'
// CONTEXT
import { CountDownContext } from '../content/CountDownContext'


const CountDown = () => {
  const {event} = useContext(CountDownContext)

  if(!event) return <Navigate to="/" />


  const eventTitle = event.title
  
  let eventColor = null
  if(event) eventColor = event.color

  
  const eventDate = event.date



  const [day, hour, minute, second] = useCountDown(eventDate)

  return (
    <>
      <TitleCountDown title={eventTitle} eventColor={eventColor} />
        <div className="countdown-container">
          <Counter title={"Days"} number={day} eventColor={eventColor} />
          <Counter title={"Hours"} number={hour} eventColor={eventColor}/>
          <Counter title={"Minutes"} number={minute} eventColor={eventColor}/>
          <Counter title={"Seconds"} number={second} eventColor={eventColor}/>
        </div>
    </>
  )
}

export default CountDown