import Header from './views/components/header/Header'
import Footer from './views/components/footer/Footer'
import {Routes, Route} from 'react-router-dom'
import Home from './views/pages/Home'
import About from './views/pages/About'
import Blog from './views/pages/Blog'

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
