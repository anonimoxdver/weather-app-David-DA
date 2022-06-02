import React from 'react'


import { Navbar } from './Page/Navbar'
import { SearchMain } from './search/SearchMain'
import { Footer } from './Page/Footer'
export const PageMain = () => {
    
    return (
    <div>
      <Navbar/>
      <SearchMain/>
      <Footer/>
    </div>
  )
}
