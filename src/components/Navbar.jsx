import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} alt="apple-logo" width="25px" height="25px"/>
        <div>List</div>
        <img src={bagImg} alt="bag-image" width="25px" height="25px"/>
        <img src={searchImg} alt="search-image" width="25px" height="25px"/>
      </nav>
    </header>
  )
}

export default Navbar