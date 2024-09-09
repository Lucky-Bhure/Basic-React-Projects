import { useState } from 'react'
import './App.css'
import PasswordGenerator from './PasswordGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='font-mono mb-4'>Password Generator with React</h1>
      <p className='mt-2 font-normal mb-6 text-lg' >Password Generator is developed for learning useState(), useEffect(), useCallback() and useRef() hook</p>
      <PasswordGenerator />
    </div>
  )
}

export default App
