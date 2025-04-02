import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

function Navbar() {
  return (
    <>
    <Link to="/"><img src={Logo}></img></Link>
    <Link to="/lessons">Lessons</Link>
    <Link to="/Quiz">Quiz</Link>
    <Link to="/Profile">Profile</Link>
    </>
  )
}

export default Navbar