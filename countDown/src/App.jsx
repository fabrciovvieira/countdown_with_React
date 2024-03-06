// REACT
import { Outlet } from 'react-router-dom'
// COMPONENTES
import TitleCountDown from './components/TitleCountDown'
import Counter from './components/Counter'

// CONTEXT
import { useContext } from 'react'
import { CountDownContext } from './content/CountDownContext'

// ESTILOS
import './App.css'
import imagebg from './assets/imagebg.jpg'

function App() {
  const {event} = useContext(CountDownContext)
  
  let eventImage = null
  if(event) eventImage = event.image

  return (
    < div className='app' style={
      eventImage
      ? { backgroundImage: `url(${eventImage}` }
      :{ backgroundImage: `url(${imagebg})` }
    }>
      <div className="container">
        
        <Outlet />
      </div>
    </div>
  )
}

export default App
