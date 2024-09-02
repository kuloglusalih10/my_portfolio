import React, { useEffect, useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSunnyOutline } from "react-icons/io5";
import caretta from "../../assets/images/caretta.png"
import acillazım from "../../assets/images/acillazım.png"
import caretta_w from "../../assets/images/caretta_w.png"


const index = () => {

    const [theme, setTheme] = useState(window.localStorage.getItem('theme'))

    useEffect(()=> {
        window.addEventListener('storage', () => {
            setTheme(window.localStorage.getItem('theme'));
        })
    },[])

    return (
        <div id='experience' className=' relative z-[2] bg-white dark:bg-black grill pb-12'>
            <VerticalTimeline lineColor={'#5f6063' } >
                <VerticalTimelineElement

                    className="vertical-timeline-element--work "
                    contentStyle={{ background: theme == 'dark' ? '#1e1f26' : 'rgb(248 250 252)' , border:  theme == 'dark' ? '0.9px solid #4b5563' : '0.9px solid #d1d5db'}}
                    contentArrowStyle={{ borderRight: '7px solid  #4b4c54' }}
                    date=" 08.2024 - present"
                    
                    iconStyle={{ background: '#4b4c54', color: '#fff',  }}
                    icon={<img src={acillazım} alt="Caretta" className='flex items-center justify-center my-auto' />}
                >
                    <h4 className="vertical-timeline-element-subtitle text-[#4b4c54] dark:text-white ">Acillazım.com, İ<span className='lowercase'>stanbul</span> </h4>
                    <h5 className="vertical-timeline-element-title text-[#4b4c54] dark:text-white">Volunteer, Frontend Developer</h5>
                    <p>
                        • I worked as a react developer in the sturt up team of 10 people.
                        
                    </p>
                    <p>
                        • I worked on UI / UX Design and API integrations
                    </p>
                
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: theme == 'dark' ? '#1e1f26' : 'rgb(248 250 252)' , border:  theme == 'dark' ? '0.9px solid #4b5563' : '0.9px solid #d1d5db'}}
                    
                    contentArrowStyle={{ borderRight: '7px solid  #4b4c54' }}
                    date="10.2023 - 06.2024"
                    iconStyle={{ background: '#4b4c54', color: '#fff',  }}
                    icon={<img src={caretta_w} alt="Caretta" className='flex items-center justify-center p-2' />}
                >
                    <h4 className="vertical-timeline-element-subtitle text-[#4b4c54] dark:text-white">CARETTA DIŞ. TİC. LTD. ŞTİ , İzmit</h4>
                    <h5 className="vertical-timeline-element-title text-[#4b4c54] dark:text-white">Intern Full-Stack Developer</h5>
                    <p>
                        • Applications were developed with React native Technology and made available to the company
                        
                    </p>
                    <p>
                        • In the backend part, trainings on node JS and PHP technologies were taken and actively used in projects
                    </p>
                    <p>
                        • Worked with Web Socket technology
                    </p>
                </VerticalTimelineElement>
                
            </VerticalTimeline>
        
        
        </div>
    )
}

export default index