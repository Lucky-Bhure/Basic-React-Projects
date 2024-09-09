import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('white');

  return (
    <div className='w-full h-full gap-8'>
        <div className= 'h-96 w-96 m-8  rounded-3xl' style={{backgroundColor: color }}>

        </div>
        <div className= 'flex justify-center font-serif bg-amber-400 rounded-full text-xl text-white font-bold'>
            <button 
            onClick={()=> {setColor('#dc2626')}}
            className='bg-red-600 p-2 rounded-3xl pl-6 pr-6 m-2  '>Red</button>

            <button 
            onClick={()=> {setColor('#2563eb')}}
            className='bg-blue-600 p-2  rounded-3xl pl-6 pr-6 m-2 '>Blue</button>
            <button 
            onClick={()=> {setColor('#16a34a')}}
            className='bg-green-600 p-2 rounded-3xl pl-6 pr-6 m-2 '>Green</button>
            
        </div>
    </div>
  )
}

export default App
