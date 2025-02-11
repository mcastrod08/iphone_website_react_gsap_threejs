import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
  return (
    <header className="header flex justify-between ">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="apple-logo" width="25px" height="25px"/>
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="nav-items text-sm text-gray-300 hover:text-amber-300 transition-all cursor-pointer">
              {nav}
            </div>
          ))}
        </div>
        <div className='flex gap-6 items-baseline max-sm:justify-end max-sm:flex-1'>
          <img src={bagImg} alt="bag-image" width="25px" height="25px"/>
          <img src={searchImg} alt="search-image" width="25px" height="25px"/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar