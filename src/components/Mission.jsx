import React from 'react'
import { useNavigate } from 'react-router-dom'
const Mission = () => {
    const navigate=useNavigate()
  return (
    <>
    <div>Mission</div>
    <button onClick={()=>navigate('/')}>Geriye get</button>
    </>
  )
}

export default Mission