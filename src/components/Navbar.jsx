import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { motion } from 'framer-motion';
import {Link} from 'react-scroll'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
    };

    const handleLinkClick = () => {
        setNavOpen(false)
    }
    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    
    return (
        <motion.div
            className="fixed top-0 left-0 z-10 w-full flex justify-between items-center h-24 mx-auto px-4 bg-[#ffffff] text-white backdrop-filter backdrop-blur-md bg-opacity-25"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="w-full flex justify-start items-center text-3xl font-bold text-[#00df9a]">FINEDGE</h1>
            <ul className="hidden md:flex">
                <li className="p-4 cursor-pointer text-[#00df9a]">
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="p-4 cursor-pointer  text-[#00df9a]">
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="p-4 cursor-pointer  text-[#00df9a]">
                    <Link to="services" smooth={true} duration={500}>
                        Services
                    </Link>
                </li>
                <li className="p-4 cursor-pointer  text-[#00df9a]">
                    <Link to="contact" smooth={true} duration={500}>
                        contact
                    </Link>
                </li>
            </ul>
            <div onClick={handleNavToggle} className="block md:hidden cursor-pointer text-[#00df9a]">
                {navOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <motion.div
                className={navOpen ? 'fixed left-0 top-0 w-[60%] h-full border-r text-[#00df9a] border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}
                initial={{ x: '-100%' }}
                whileInView={{ opacity: [0, 1] }}
                animate={{ x: navOpen ? '0%' : '-100%' }}
                transition={{ duration: 0.5, delayChildren: 0.5  }}
            >
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">FINEDGE</h1>
                <ul className="p-4 uppercase">
                    <li className="p-4 border-b border-gray-600 cursor-pointer">
                        <Link to="home" smooth={true} duration={500} onClick={handleLinkClick }>
                            Home
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-600 cursor-pointer">
                        <Link to="about" smooth={true} duration={500} onClick={handleLinkClick }>
                            About
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-600 cursor-pointer">
                        <Link to="services" smooth={true} duration={500} onClick={handleLinkClick }>
                            Services
                        </Link>
                    </li>
                    <li className="p-4 cursor-pointer">
                        <Link to="contact" smooth={true} duration={500} onClick={handleLinkClick }>
                            Contact
                        </Link>
                    </li>
                </ul>
            </motion.div>
        </motion.div>
  )
}

export default Navbar