"use client";

import React, { useState } from 'react';
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from 'next/image';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          fill
          style={{ objectFit: "cover" }} // Replace objectFit prop with style
          className="opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-blue-200 md:mt-10 my-5 text-center">
          Reach out to us today and let&apos;s discuss how we can help you
          achieve your goals.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <a href="mailto:info@ecohavenv.com">
            <MagicButton
              title="Let&apos;s get in touch"
              icon={<FaLocationArrow className={`transition-transform duration-300 ${isHovered ? 'rotate-45' : ''}`} />}
              position="right"
            />
          </a>
        </motion.div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 by <span className='font-bold'>EcoHaven Ventures</span>. All rights reserved.
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              onClick={() => window.open(info.url, "_blank")} // Open the link in a new tab
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <motion.div 
                className="relative w-5 h-5" 
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src={info.img} 
                  alt="icons" 
                  fill
                  style={{ objectFit: "cover" }} // Replace objectFit prop with style
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
