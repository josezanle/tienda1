import React from 'react'
import Navbar from '@/app/components/navbar'
import BurgerNavbar from '@/app/components/navbar-burger'

import './index.css'

const Banner = () => {
  return (
    <div className='banner__container'>
      <Navbar />
      <BurgerNavbar />

      <div className="content">
        <h2 className='title'>Catalogo 2024</h2>
        <p className='desc'>Encuentra todo lo nuevo para estrenar en esta temporada</p>
      </div>
    </div>
  )
}

export default Banner