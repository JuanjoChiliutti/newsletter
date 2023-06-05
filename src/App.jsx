
import { useState } from 'react';
import './App.css';

function App() {
 const [input, setInput] = useState('')
 const handleChange = (e) => {
  const value = e.target.value;
  setInput(value)
 }
console.log(input)

  return (
    <>
      <div className='contenedor-principal'>
        <div className='contenedor-texto'>
          <div className='title'><h1>Stay updated!</h1></div>
          <div className='text'>
            <p className='join'>
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            
              <ul className='lista'>
                <li>Product discovery and building what matters</li>
                <li>Measuring to ensure updates are a success</li>
                <li>And much more!</li>
              </ul>

            
          </div>
          <div className='input-email'>
            <label htmlFor="">Email address</label>
            <input placeholder='email@company.com' type="text" onChange={handleChange}/>
            <button className='btn-susc'>Subscribe to monthly newsletter</button>
          </div>
        </div>
        <div className='contenedor-imagen'>
          <img src='../assets/images/illustration-sign-up-desktop.svg' alt="" />
        </div>
      </div>
    </>
  )
}

export default App
