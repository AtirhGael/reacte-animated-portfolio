import React from 'react'
import './navbar.scss'
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
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
                <a href='#'><TwitterIcon/> </a>
                <a href='https://www.linkedin.com/in/atirh-gael-3b698b236/'><LinkedInIcon/></a>
                <a href='https://github.com/AtirhGael'><GitHubIcon/></a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
