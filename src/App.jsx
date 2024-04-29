import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyDialog from './modal'
function App() {
  const [count, setCount] = useState(0)
  let [isOpen, setIsOpen] = useState(true)


  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <button onClick={()=>{setIsOpen(isOpen?false:true)}}>{isOpen?"Close":"Open"}</button>
      {isOpen && MyDialog({isOpen, setIsOpen})}


    </>
  )
}

export default App
