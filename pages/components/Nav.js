import {React, useState} from 'react'

const Nav = () => {
  const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
      };

  return (
    <div className=' w-screen flex justify-between py-4 px-8 absolute z-10 backdrop-blur-md'>
        <h1 className=' font-medium text-white text-xl'>Trending Movies</h1>
        <div className=' flex gap-3'>
            <input className=' rounded-md px-2' placeholder='Enter movie name' value={input} onChange={handleInputChange}/>
            <button className=' bg-slate-900 text-white py-2 px-12 rounded-md'>Search</button>
        </div>
    </div>
  )
}

export default Nav