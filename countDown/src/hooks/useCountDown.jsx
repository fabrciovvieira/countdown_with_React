// REACT
import { useState } from "react"

const useCountDown = (date) => {

    const [day, setDay] = useState()
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState()

    const countdown = () => {
        const countDate = new Date(date).getTime()
        const now = new Date().getTime()
        const interval = countDate - now
    
        const seconds = 1000
        const minutes = seconds * 60
        const hour = minutes * 60
        const day = hour * 24
    
        const dayNumber = Math.floor(interval / day)
        const hourNumber = Math.floor((interval % day) / hour)
        const minuteNumber = Math.floor((interval % hour) / minutes)
        const secondNumber = Math.floor((interval % minutes) / seconds)

        setDay(dayNumber)
        setHour(hourNumber)
        setMinute(minuteNumber)
        setSecond(secondNumber)
    }
    
    setInterval(countdown, 1000)

    return [day, hour, minute, second]

}

export default useCountDown