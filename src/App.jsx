

import { useState } from 'react';
import './App.css';
import Principal from './components/Principal';
import Success from './components/Success';


function App() {
  const [isSent, setIsSent] = useState(false)
  const [mail, setMail] = useState('');

  
  
  return (
    <> {!isSent?       
      <Principal isSent={isSent} setIsSent={setIsSent} setMail={setMail} />
      :
      <Success mail={mail}/>
    }
    </>
  )
}

export default App
