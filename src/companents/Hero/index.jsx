import React from 'react'
import { ReactTyped } from "react-typed";
import { GoDownload } from "react-icons/go";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { FaBars, FaTimes } from 'react-icons/fa';
import { initBg } from '../../assets/js/stars';


const index = () => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        initBg();
        setTimeout(() => setLoading(false), 3000)
    }, []);


    const loadText = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition:{
            duration: 1
          }
        }
    }

    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }

    const closeNav = () =>{
    if(nav){
        setNav(false)
    }
    }

    const menuVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			scale: [1, 1.2, 1.5, 1.2, 1],
			rotate: [0, 0, 360, 360, 360],
			borderRadius: ["50%", "50%", "50%", "50%", "50%"],
			transition: {
				duration: 1,
			},
		},
	};

    const contactVariants = {
		hidden: {
			opacity: 0,
			x: "-50%",
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1.4,
			},
		},
	};

  


    return (
        <>
            <div className='w-full h-full relative'>

             

                <div className=''>
                    <div id='particles1' className='fixed inset-0 -z-20'></div>
                    <div id='particles2' className='fixed inset-0 -z-20'></div>
                    <div id='particles3' className='fixed inset-0 -z-20'></div>
                </div>

                {/* <div className='inset-0 block '>
                    <div id='stars1' className='fixed inset-0'></div>
                    <div id='stars2' className='fixed inset-0'></div>
                    <div id='stars3' className='fixed inset-0'></div>
                </div> */}

                <div id="planetcont" class="animate absolute inset-0 top-1/4 overflow-hidden show -z-10"> 
                    <div id="crescent" class="absolute top-0 left-1/2 -translate-x-1/2 w-[250vw] min-h-[100vh] aspect-square rounded-full p-[1px] bg-gradient-to-b from-black/25 dark:from-white/75 from-0% to-transparent to-5%">
                        <div id="planet" class="w-full h-full bg-white dark:bg-black rounded-full p-[1px] overflow-hidden flex justify-center"> 
                            <div id="blur" class="w-full h-20 rounded-full bg-neutral-900/25 dark:bg-white/25 blur-3xl"></div> 
                        </div> 
                    </div> 
                </div>

                <motion.div
                    // viewport={{ once: true }}
                    variants={menuVariants}
                    initial='hidden'
                    whileInView='visible'
                    onClick={handleNav}
                    className='menu-icon float-end h-min w-min cursor-pointer absolute right-20 top-14'>
                    {nav ? <FaTimes color='#fff' size={28} /> : <FaBars size={28} color='#fff' />}
                </motion.div>


                <Navbar nav={nav} handleNav={handleNav} />
                
                

                <div className='flex flex-col items-center justify-center h-full w-full'>
                    <motion.h2 variants={loadText} initial='hidden' animate='visible' className=' select-none own-font text-white '>
                        Merhaba, ben <span className='text-dark-blue'>Salih 👋</span>
                    </motion.h2>
                    
                    

                    <ReactTyped
                        strings={[
                            "Bilgisayar Mühendisi",
                            "Yazılım Mühendisi",
                            "Full Stack Developer",
                        ]}
                        typeSpeed={30}
                        backSpeed={40}
                        //attr="placeholder"
                        loop
                        style={{backgroundColor: 'transparent'}}
                        >
                        <input className='bg-transparent text-2xl sans-font mt-4 text-white w-full text-center' type="text" />
                    </ReactTyped>

                     <motion.span
                        variants={contactVariants}
                        initial='hidden'
                        whileInView='visible'>
                        <a
                            href='Peace Jinadu-Paul CV.pdf'
                            download='Peace Jinadu-Paul CV'
                            className='hero-contact mt-4'>
                            Özgeçmiş<GoDownload size={20} className='cv-icon ml-2' />
                        </a>
                    </motion.span>
                </div>

                <div className='w-full h-[500px] bg-white'>

                </div>

                {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="w-8 h-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z"></path></svg> */}
            </div>
        </>
    )
}

export default index

