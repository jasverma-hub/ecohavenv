"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
const [isHovered, setIsHovered] = useState(false)

  return (
    <div id="home" className='pb-20 pt-36 relative'>
       {/* Add Logo at the top center */}
       <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20">
        <motion.img
          src="/ecologo.png"
          alt="Company Logo"
          className="w-40 md:w-48 lg:w-56 cursor-pointer" // Adjust the width as needed
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.location.href = '/'}
        />
      </div>
     <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50w]' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
     </div>
    <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
    <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='uppercase tracking-widest text-xs text-center text-blue-200 max-w-80'>
                Pioneering Sustainable Solutions and Cybersecurity Expertise
        </motion.h2>
            <TextGenerateEffect 
                className='text-center text-[40px] md:text-5xl lg:text-6xl'
                words='Empowering Sustainable Solutions and Cutting-Edge Cyber Innovation for a Better Future'
            />
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-center md:tracking-wider mb-4 text-sm md:text-m lg:text-xl'
            >
            We provide practical eco-friendly solutions and advanced IT services across multiple sectors, balancing economic growth with technological advancement and environmental stewardship.
            </motion.p>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href='#services'>
                <MagicButton 
                     title='Explore Our Work'
                     icon={<FaLocationArrow className={`transition-transform duration-300 ${isHovered ? 'rotate-45' : ''}`} />}
                     position='right'
                />
            </a>
            </motion.div>
        </div>
    </div>
    </div>
  )
}

export default Hero;
