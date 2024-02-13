import React from 'react'

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
        <li>Home</li>
        <li>Location</li>
        <li>About</li>
        <li>Content</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  )
}

export default Navbar
