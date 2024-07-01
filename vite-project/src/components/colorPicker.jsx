import { useState } from "react"

export default function ColorPicker() {
    const [color,setColor] = useState('gray')
  return (
    <div className="w-full h-full flex flex-wrap" style={{backgroundColor:color}}>
      <div className="flex flex-wrap justify-center space-x-5 bg-white h-8 w-2/3 rounded-xl mx-auto py-1 fixed">
      <button className="bg-slate-500 rounded-sm px-5 h-6" onClick={()=>setColor('gray')}>Gray</button>
      <button  className="bg-black rounded-sm text-white px-5 h-6" onClick={()=>setColor('black')}>Black</button>
      <button  className="bg-red-500 rounded-sm  px-5 h-6" onClick={()=>setColor('red')}>Red</button>
      <button  className="bg-lime-500 rounded-sm  px-5 h-6" onClick={()=>setColor('green')}>Green</button>
      <button  className="bg-orange-400 rounded-sm px-5 h-6" onClick={()=>setColor('orange')}>Orange</button>
      <button  className="bg-cyan-300 rounded-sm px-5 h-6" onClick={()=>setColor('lightblue')}>Lightblue</button>
      <button  className="bg-yellow-300 rounded-sm  px-5 h-6" onClick={()=>setColor('Yellow')}>Yellow</button>
      </div>
    </div>
  )
}
