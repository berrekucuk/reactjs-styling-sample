import React from 'react'
import { Link } from 'react-router-dom'

function SiteHeader() {
  return <>
  <header>
    <nav >
        <ul className='navbar navbar__menu'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blog">Blog</Link></li>

        </ul>
    </nav>
  </header>
  </>
}

export default SiteHeader