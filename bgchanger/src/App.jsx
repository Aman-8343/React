import { useState } from 'react'


function App() {
  const [color, setColor] = useState("grey")

  return (
   <div className='w-full min-h-screen'
   style={{backgroundColor:color}}  >
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-5'>

    
    <div className='flex flex-wrap justify-center gap-4 py-5 shadow-lg bg-white px-2 rounded- 2xl'>
<button
onClick={()=>setColor("red")}
className='outline-none px-4 py-1 rounded-full text-white shadow-small'
style={{backgroundColor:"red"}}
>Red</button>

<button
onClick={()=>setColor("orange")}
className='outline-none px-4 py-1 rounded-full text-white shadow-small'
style={{backgroundColor:"orange"}}
>Orange</button>

<button
onClick={()=>setColor("violet")}
className='outline-none px-4 py-1 rounded-full text-white shadow-small'
style={{backgroundColor:"violet"}}
>Violet</button>

<button
onClick={()=>setColor("green")}
className='outline-none px-4 py-1 rounded-full text-white shadow-small'
style={{backgroundColor:"green"}}
>Green</button>

<button
onClick={()=>setColor("blue")}
className='outline-none px-4 py-1 rounded-full text-white shadow-small'
style={{backgroundColor:"blue"}}
>Blue</button>

<button
onClick={()=>setColor("black")}
className='outline-none px-4 py-1 rounded-full text-white shadow-small'
style={{backgroundColor:"black"}}
>Black</button>


    </div>
    </div>
   </div>
  )
}

export default App
