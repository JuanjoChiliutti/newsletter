

import { useEffect, useState } from 'react';
import './App.css';
import Principal from './components/Principal';
import Success from './components/Success';


function App() {
  const [isSent, setIsSent] = useState(false)
  const [mail, setMail] = useState('');
  const [dismiss, setDismiss]= useState(false)
  
  
  
  return (
    <> {!isSent || dismiss ?       
      <Principal isSent={isSent} setIsSent={setIsSent} setMail={setMail} />
      :
      <Success mail={mail} setDismiss={setDismiss}/>
    }
    </>
  )
}

export default App
