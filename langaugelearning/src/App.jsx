import React from 'react'
import './styles/App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Lessons from './components/Lessons'
import Quiz from './components/Quiz'
import Profile from './components/Profile'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/lessons' element={<Lessons />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
