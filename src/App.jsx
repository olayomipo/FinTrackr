import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Home, About , Contact } from './pages'
import { useEffect, useState } from 'react';


const App = () => {
  const [theme, setTheme] = useState("light")

  let handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')      
    }
  }, [theme])
  
  


  return (
    <>
      <div className="relative z-0 bg-primary">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element ={<Home />} />

            <Route exact path="/about" element ={<About /> } />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
};

export default App;
