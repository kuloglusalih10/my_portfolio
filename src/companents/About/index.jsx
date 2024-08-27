import React from 'react'
import bg from "../../assets/images/dataism-24.svg"
import { HiCode } from "react-icons/hi";
import { FaCodePullRequest } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import {motion} from "framer-motion"

import { skills, Assistive_technologies } from '../../utils/constants';

const index = () => {

    const generateVariant = (delay) => {

        return {
            offscreen: {
                opacity: 0,
              y: 20
            },
            onscreen: {
                opacity:1,
              y: 0,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                delay: delay
                
              }
            }
          };
    }
    

    return (
        <>

            <div className="section_default__R2qvk about_section__Qoa01 borderBottom z-[1] bg-white dark:bg-black">
                <div className="container_readingWidth__VNGAE  spacing_verticalXXXLrg__IWq75">
                    <section className="about_content__RzwJH about_container__6NFiN">
                        <div className="about_copy__XEObN">
                            <div className="about_container__6NFiN   border border-gray-300 bg-white dark:bg-[#1e1f26] dark:border-gray-600 rounded-lg">
                                <div className='flex items-center gap-x-4 text-[#4b4c54] dark:text-white'>
                                    <span className="p-3  border-[0.5px] border-dark-blue  bg-ligth-blue/5 rounded-md w-min">
                                        <GrUserManager  color='#32ACFF' size={22} />
                                    </span>
                                    <h3 className='montserrat-font text-lg '>Hakkımda</h3>

                                </div>
                                <p className=''>Merhaba, ben Salih Kuloğlu. Necmettin Erbakan Üniversitesi Bilgisayar Mühendisliği bölümü mezunuyum. Web Geliştirme ve Mobil uygulama geliştirme alanlarına ilgiliyim. Artan bilgi birikimim, ekip çalışması becerilerim ve vizyoner bakış açım sayesinde katıldığım herhangi bir birime veya şirkete önemli bir değer katabileceğime eminim</p>
                            </div>
                            <div className="badges_badgeBlockContainer__kevdK about_container__6NFiN  border border-gray-300 bg-white dark:bg-[#1e1f26] dark:border-gray-600   rounded-lg">
                                <div className='flex items-center gap-x-4 text-[#4b4c54] dark:text-white'>
                                    <span className="p-3  border-[0.5px] border-dark-orange/60 bg-ligth-orange/10 rounded-md w-min dark:shadoe dark shadow-dark-orange">
                                        <HiCode  color='#FC6F20' size={22} />
                                    
                                    </span>
                                    <h3 className='montserrat-font text-lg'>Yetenekler</h3>

                                </div>
                                <p>Farklı projelerde edindiğim tecrübeler sayesinde modern web ve mobil uygulama geliştirme araçlarıyla çalışarak kullanıcı dostu, ölçeklenebilir ve performans odaklı çözümler üretebiliyorum. En son endüstri trendlerinden haberdar olmak için sürekli öğreniyor ve gelişiyorum.</p>
                                <motion.ul initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} className="badges_list__7K6_N undefined badges_fullContainer__IxLYL opacity-100 bg-slate-50 border-t dark:border-t-gray-600  border-t-gray-300 dark:bg-[#171717]" >
                                   
                                    {
                                        skills.map((item, index)=> (
                                            <motion.li variants={generateVariant((index +1)*0.2)}   className="flex items-center justify-center rounded-2xl px-3 py-1 gap-x-2 opacity-100 border border-gray-200 bg-white dark:bg-slate-800 dark:border-slate-500">
                                                {<item.icon size={16}/>}
                                                <span className="badges_title__2xfcM">{item.title}</span>
                                            </motion.li>
                                        ))
                                    }
                                  
                                    
                                </motion.ul>
                            </div>
                            <div className="badges_badgeBlockContainer__kevdK about_container__6NFiN  border border-gray-300 bg-white dark:bg-[#1e1f26] dark:border-gray-600  rounded-lg">
                                <div className='flex items-center gap-x-4 text-[#4b4c54] dark:text-white'>
                                    <span className="p-3  border-[0.5px] border-dark-green bg-ligth-green/10 rounded-md w-min">
                                        <FaCodePullRequest  color='#19D508' size={22} />
                                    </span>
                                    <h3 className='montserrat-font text-lg'>Yardımcı Teknolojiler</h3>

                                </div>
                                <p>Projelerimde, verimliliği artırmak ve süreçleri optimize etmek amacıyla gelişmiş araçlar ve platformlarla çalışıyorum. Versiyon kontrolünden API testine, kullanıcı arayüzü tasarımından kod düzenlemeye kadar her aşamada en iyi araçları kullanarak daha etkili sonuçlar elde ediyorum.</p>
                                <motion.ul initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}  className="badges_list__7K6_N undefined badges_fullContainer__IxLYL opacity-100 bg-slate-50 border-t border-t-gray-300 dark:border-t-gray-600  dark:bg-[#171717] " >
                                    {
                                        Assistive_technologies.map((item, index)=> (
                                            <motion.li variants={generateVariant((index +1)*0.2)}   className="flex items-center justify-center rounded-2xl px-3 py-1 gap-x-2 opacity-100 border border-gray-200 bg-white dark:bg-slate-800 dark:border-slate-500">
                                                {<item.icon size={16}/>}
                                                <span className="badges_title__2xfcM">{item.title}</span>
                                            </motion.li>
                                        ))
                                    }
                                
                                </motion.ul>
                            </div>
                        </div>
                        <div className="about_image__hW1fB about_technicalSvg__abk09">
                            <span className="box-border inline-block overflow-hidden w-auto h-auto bg-none opacity-100 border-0 m-0 p-0 relative max-w-full">
                                <span className="box-border block w-auto h-auto bg-none opacity-100 border-0 m-0 p-0 max-w-full">
                                    <img className="block max-w-full w-auto h-auto bg-none opacity-100 border-0 m-0 p-0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27477%27%20height=%271111%27/%3e"/>
                                </span>
                                <img alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" src={bg} decoding="async" data-nimg="intrinsic" className="absolute top-0 left-0 bottom-0 right-0 box-border p-0 border-0 m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full" />
                                <noscript>
                                    <img alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b"  src={bg} decoding="async" data-nimg="intrinsic" className="absolute top-0 left-0 bottom-0 right-0 box-border p-0 border-0 m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full" loading="lazy"/>
                                </noscript>
                            </span>
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}

export default index