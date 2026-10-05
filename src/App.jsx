import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import Services from './Pages/Services'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App