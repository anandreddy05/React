import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")
  
  return (
    <>
    <div className='flex  justify-around items-end h-screen'
    style={{backgroundColor:color}}>
    <div className=' bg-white flex  justify-around w-screen h-10 border-none rounded-2xl  shadow-xl shadow-black/50'>
    <button className='h-10 w-20 bg-red-700  text-white inline-flex justify-center items-center rounded-3xl' onClick={()=>{
      setColor("Red")
    }}>Red</button>
    <button className='h-10 w-20 bg-blue-700  text-white inline-flex justify-center items-center rounded-3xl'onClick={()=>{
      setColor("Blue")
    }}>Blue</button>
    <button className='h-10 w-20 bg-black    text-white inline-flex justify-center items-center rounded-3xl'onClick={()=>{
      setColor("Black")
    }}>Black</button>
    <button className='h-10 w-20 bg-orange-700 text-white inline-flex justify-center items-center rounded-3xl'onClick={()=>{
      setColor("Orange")
    }}>Orange</button>
    <button className='h-10 w-20 bg-yellow-400 text-white inline-flex justify-center items-center rounded-3xl'onClick={()=>{
      setColor("Yellow")
    }}>Yellow</button>
    </div>
    </div>
    </>
  )
}

export default App
