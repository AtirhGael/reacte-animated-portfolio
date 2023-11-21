import React from 'react'
import './navbar.scss'
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'

function Navbar() {
  return (
    <>
      <div className='navbar'>
        <Sidebar/>
        <div className='wrapper'>
            <motion.span 
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration:1.5}}
            >Gael Dev</motion.span>
            <div className='social'>
                <a href='#'><img alt='' src='./facebook.png'/></a>
                <a href='#'><img alt='' src='./instagram.png'/></a>
                <a href='#'><img alt='' src='./facebook.png'/></a>
                <a href='#'><img alt='' src='./facebook.png'/></a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
