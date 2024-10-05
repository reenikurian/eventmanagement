import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Landingpage from './pages/Landingpage'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Venues from './components/Venues'


function App() {

  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/landingpage' element={<Landingpage/>}/>
    <Route path='/aboutus' element={<About/>}/> 
    <Route path='/venues' element={<Venues/>}/>

  
    
    </Routes>
    
     <Footer/>
    </>
  )
}

export default App
