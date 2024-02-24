import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Home, About , Contact } from './pages'

const App = () => {
  return (
    <>
      {/* <div className="App"> */}
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element ={<Home />} />
            <Route exact path="/about" element ={<About /> } />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      {/* </div> */}
    </>
  )
};

export default App;
