import React from 'react'
import { BrowserRouter ,  Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Popular from './Pages/Popular'
import TopRated from './Pages/TopRated'
import Upcoming from './Pages/Upcoming'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Popularsinglepage from './Pages/Popularsinglepage'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/popular' element={<Popular/>} ></Route>
      <Route path='/popular/:id' element={<Popularsinglepage/>}></Route>
      <Route path='/toprated' element={<TopRated/>} ></Route>
      <Route path='/upcoming' element={<Upcoming/>} ></Route>

    </Routes>
    <Footer/>

    </BrowserRouter>
    </>
  )
}

export default App