import React from 'react'
import Stars from "../Stars"
import { ReactTyped } from "react-typed";
import { GoDownload } from "react-icons/go";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';


const index = () => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
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


    return (
        <div className='w-full h-full relative'>

            <Stars/>
            
            <div className='flex flex-col items-center justify-center h-full w-full '>
                <motion.h2 variants={loadText} initial='hidden' animate='visible' className='text-4xl select-none montserrat-font text-white '>
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

                <motion.button whileHover={{ backgroundColor: 'azure' }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className='px-6 py-2 flex items-center justify-center gap-x-4 text-dark-blue border border-dark-blue rounded mt-4 '>Özgeçmiş <GoDownload /></motion.button>
                
            </div>
        </div>
    )
}

export default index