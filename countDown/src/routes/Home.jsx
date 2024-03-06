// REACT
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'


// CONTEXT
import { CountDownContext } from '../content/CountDownContext'

// ESTILOS
import './Home.css'


const Home = () => {
  const [title, setTitle] = useState()
  const [date, setDate] = useState()
  const [image, setImage] = useState()
  const [color, setColor] = useState()

  const {setEvent} = useContext(CountDownContext)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const eventObject = {
      title, 
      date, 
      image, 
      color,
    }
    setEvent(eventObject)
    navigate("/countdown")

  }

  return (
    <div className='home'>
      <h2>Monte a sua contagem regressiva</h2>
      <form className="countdown-form" onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input 
          type="text" 
          name="title" 
          placeholder='Título da sua contagem'
          required
          onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <label>
          <span>Data do evento:</span>
          <input 
          type="date" 
          name="date" 
          placeholder='Data do seu evento'
          onChange={(e) => setDate(e.target.value)}/>
        </label>
        <label>
          <span>Imagem de fundo:</span>
          <input 
          type="text" 
          name="image" 
          placeholder='Insira o link da imagem'
          onChange={(e) => setImage(e.target.value)}/>
        </label>
        <label>
          <span>Cor do tema:</span>
          <input 
          type="color" 
          name="color"
          onChange={(e) => setColor(e.target.value)}/>
        </label>
        <input type="submit" value={"Enviar"} />
      </form>

    </div>
  )
}

export default Home