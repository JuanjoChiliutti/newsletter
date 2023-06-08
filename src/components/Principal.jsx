
import { useState } from 'react';
import '../styles/Principal.css'

export default function Principal (props) {  
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const handleChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail)
    setIsValidEmail(validateEmail(newEmail))
    props.setMail(newEmail)
    }
    
  const handleClick = (e) => {
    e.preventDefault()
    setTimeout(() => {
      props.setIsSent(true);
      }, 2000)   
    }
    function validateEmail(email) {
     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return regex.test(email);
   }
   
  return (
    <div className='contenedor-principal'>
        <div className='contenedor-texto'>
          <div className='title'><p className='title'>Stay updated!</p></div>
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
            <div className='label-valid'>
              <label htmlFor="">Email address</label> {!isValidEmail && <span className='alert'>Valid email required</span>}
            </div>
            
            <input placeholder='email@company.com' type="text" onChange={handleChange} value={email} className={!isValidEmail ? 'input-alert' : '' } />  
            
            
            <button className='btn-susc' onClick={handleClick} disabled= {!isValidEmail}>Subscribe to monthly newsletter</button>
          </div>
        </div>
        <div className='contenedor-imagen'>
          <br />
        </div>
        
    </div>
  )
}
