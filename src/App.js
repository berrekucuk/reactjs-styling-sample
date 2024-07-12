import React from 'react'
import { Link,Route, Routes } from 'react-router-dom'
import Home from './pages/home/Index'
import About from './pages/about/Index'
import Contact from './pages/contact/Index'
import NotFound from './pages/notFound/Index'
import SiteHeader from './components/SiteHeader'
import Blog from './pages/blog'


function App() {
  return <>
  <SiteHeader/>

  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/blog' element={<Blog/>}/>
      <Route path='*' element={<NotFound/>}/>      
  </Routes>

  <footer>
    <p>Footer</p>
  </footer>
  </>
}

export default App