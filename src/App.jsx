import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'

function App() {

  return (
    <>
      <Header />
     

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
