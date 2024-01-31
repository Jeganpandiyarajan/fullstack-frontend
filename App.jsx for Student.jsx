import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './Components/Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Student name="nithish" age={35} isMarried={true}/>
        <Student name="jegan" age={35} isMarried={true}/>
        <Student name="naren" age={35} isMarried={false}/>
        <Student name="sarvesh" age={35} isMarried={true}/>
        <Student name="joewin" age={75} isMarried={true}/>
      </div>

    </>
  )
}

export default App
