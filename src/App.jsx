import { useState } from 'react'
import '../gif/12.gif'
import './App.css'

function App() {
  return(
    <div className='container1'>
      <img className='op' src="gif/12.gif" alt="" />
      <input className='senha' type="text" 
      placeholder='Usuário' />
      <input className='senha' type="password"
      placeholder='senha' />
      <button className='but'>Entrar</button>
    </div>)
}
   

    
  



export default App
