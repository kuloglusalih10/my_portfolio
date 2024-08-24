import React from 'react'
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { initBg } from '../../assets/js/stars';
import profile from "../../assets/images/profile.png"
import { BsDownload } from "react-icons/bs";
import cv from "../../assets/static/salih_kuloglu_CV.pdf"


const index = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => setLoading(false), 3000)
        initBg();
    }, []);


  


    return (
        <>
            <div className='w-full h-full relative'>

             

                <div className='absolute inset-0 block dark:hidden'>
                    <div id='particles1' className='fixed inset-0 '></div>
                    <div id='particles2' className='fixed inset-0 '></div>
                    <div id='particles3' className='fixed inset-0 '></div>
                </div>

                <div className='absolute inset-0 bg-black hidden dark:block'>
                    
                    <div id='stars1' className='fixed inset-0'></div>
                    <div id='stars2' className='fixed inset-0'></div>
                    <div id='stars3' className='fixed inset-0'></div>
                </div>

                <Navbar />

                <div id="galaxy" className="fixed inset-0">
                    <div className="hidden dark:block">
                        <svg id="twinkle-star" className="template" width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="74" cy="74" r="11" fill="white"></circle>
                            <rect y="141.421" width="200" height="10" transform="rotate(-45 0 141.421)" fill="url(#paint0_linear_4_2)"></rect>
                            <rect x="7.07107" width="200" height="10" transform="rotate(45 7.07107 0)" fill="url(#paint1_linear_4_2)"></rect>
                            <defs>
                                <linearGradient id="paint0_linear_4_2" x1="0" y1="146.421" x2="200" y2="146.421" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#1E1E1E" ></stop>
                                    <stop offset="0.445" stopColor="white"></stop>
                                    <stop offset="0.58721" stopColor="white"></stop>
                                    <stop offset="1" stopColor="#1E1E1E"></stop>
                                </linearGradient>
                                <linearGradient id="paint1_linear_4_2" x1="7.07107" y1="5" x2="207.071" y2="5" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#1E1E1E"></stop>
                                    <stop offset="0.42" stopColor="white"></stop>
                                    <stop offset="0.555" stopColor="white"></stop>
                                    <stop offset="1" stopColor="#1E1E1E"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        
                        <div id="meteors">
                            <div className="shower ur">
                                <div className="meteor left-[669px] top-[7px]"  ></div>
                            </div>
                            <div className="shower dr"></div>
                            <div className="shower dl"></div>
                            <div className="shower ul">
                                <div className="meteor left-[377px] top-[123px]" ></div>
                            </div>
                        </div>
                    </div>
                    <svg id="twinkle-star" className="template twinkle absolute left-[767px] top-[281px] w-[22px] h-[22px]" width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <circle cx="74" cy="74" r="11" fill="white"></circle>
                        <rect y="141.421" width="200" height="10" transform="rotate(-45 0 141.421)" fill="url(#paint0_linear_4_2)"></rect>
                        <rect x="7.07107" width="200" height="10" transform="rotate(45 7.07107 0)" fill="url(#paint1_linear_4_2)"></rect>
                        <defs>
                            <linearGradient id="paint0_linear_4_2" x1="0" y1="146.421" x2="200" y2="146.421" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#1E1E1E"></stop>
                                <stop offset="0.445" stopColor="white"></stop>
                                <stop offset="0.58721" stopColor="white"></stop>
                                <stop offset="1" stopColor="#1E1E1E"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear_4_2" x1="7.07107" y1="5" x2="207.071" y2="5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#1E1E1E"></stop>
                                <stop offset="0.42" stopColor="white"></stop>
                                <stop offset="0.555" stopColor="white"></stop>
                                <stop offset="1" stopColor="#1E1E1E"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <motion.section initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 0, opacity: 0 }} transition={{ duration: 0.7 }}  className="relative h-screen w-full">
                    <div id="planetcont" className="animate absolute inset-0 top-1/4 overflow-hidden show">
                        <div id="crescent" className="absolute top-0 left-1/2 -translate-x-1/2 w-[250vw] min-h-[100vh] aspect-square rounded-full p-[1px] bg-gradient-to-b from-black/25 dark:from-white/75 from-0% to-transparent to-5%">
                            <div id="planet" className="w-full h-full bg-white dark:bg-black rounded-full p-[1px] overflow-hidden flex justify-center">
                                <div id="blur" className="w-full h-20 rounded-full bg-neutral-900/25 dark:bg-white/25 blur-3xl"></div>
                            </div>
                        </div>
                    </div>
                    <div className="animate absolute h-full w-full flex items-center justify-center show">
                        <div className="mt-[80px] relative w-full h-full flex items-center justify-center">
                            <div className="p-5 pt-14 xs:pt-8 text-center">
                                <img src={profile} alt="Ghulam Ahmed" className="object-cover w-36 h-36 xs:w-48 xs:h-48 rounded-full mx-auto border-4 border-neutral-600 dark:border-neutral-400"/>
                                    
                                    <p className="relative py-3 text-3xl sm:text-4xl md:text-5xl lg: text:6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500 dark:from-neutral-100 dark:to-neutral-600 text-center font-sans font-bold">
                                    Salih Kuloğlu
                                    </p>
                                    <p className="animated text-sm md:text-base lg:text-lg opacity-75">
                                    Full-stack Developer | Bilgisayar Mühendisi | Yazılım Mühendisi
                                    </p>
                                    <div id="ctaButtons" className="animated flex flex-wrap gap-4 justify-center mt-5">
                                        <a href={cv}  download className="flex  items-center justify-center gap-x-3 py-2 px-4 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend">
                                        Özgeçmiş <BsDownload />
                                        </a>
                                        <a href="/work" className="py-2 px-4 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend">
                                        View my work
                                        </a>
                                    </div>
                                    <a href="mailto:kuloglusalih10@gmail.com" className="inline-flex transition-all border-neutral-700 hover:border-opacity-0 border-opacity-50 shadow rounded-md border backdrop-blur-xl bg-neutral-400/10 px-3 py-2.5 items-center group p-2 text-sm gap-x-2 mt-4">
                                        <span>Email me</span>
                                        <span className="w-2 h-2 rounded-full bg-green-400 duration-500 animate-pulse"></span>
                                    </a>
                                </div>
                            </div>
                    </div>
                </motion.section>

                <div className='w-full h-[500px] bg-white'>

                </div>

             </div>
        </>
    )
}

export default index

