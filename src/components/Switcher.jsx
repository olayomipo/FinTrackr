

import React, { useState, useEffect } from 'react';


const Switcher = () => {
    
const [theme, setTheme] = useState("light")
let handleTheme = ()=>{
  setTheme(theme === 'dark' ? "light":"dark")
}

useEffect(()=>{
  if (theme === "dark"){
    document.documentElement.classList.add("dark");
  }else{
    document.documentElement.classList.remove("dark");
  }
}, [theme])

return (
  // <div className='bg-blue-300 dark:bg-slate-900 w-full h-screen flex justify-center items-center'> 
  <button onClick={handleTheme} className=' border bg-yellow-200 px-4 py-2 rounded-lg dark:bg-white'>
  Switch
  </button>
// </div>
);
}

export default Switcher