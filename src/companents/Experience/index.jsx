import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSunnyOutline } from "react-icons/io5";
import caretta from "../../assets/images/caretta.png"
import acillazım from "../../assets/images/acillazım.png"


const index = () => {
  return (
    <div className=' relative z-[2] bg-white dark:bg-black '>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(248 250 252)', color: '#4b4c54' , border: '0.9px solid #d1d5db'}}
                contentArrowStyle={{ borderRight: '7px solid  #4b4c54' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(28, 30, 35, 0.2)', color: '#fff', border: '0.9px solid #d1d5db' }}
                icon={<img src={acillazım} alt="Caretta" className='flex items-center justify-center my-auto' />}
            >
                <h4 className="vertical-timeline-element-subtitle ">Acillazım.com, İ<span className='lowercase'>stanbul</span> </h4>
                <h5 className="vertical-timeline-element-title">Volunteer, Frontend Developer</h5>
                <p>
                    • I worked as a react developer in the sturt up team of 10 people.
                    
                </p>
                <p>
                    • I worked on UI / UX Design and API integrations
                </p>
               
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(248 250 252)', color: '#4b4c54' , border: '0.9px solid #d1d5db'}}
                contentArrowStyle={{ borderRight: '7px solid  #4b4c54' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(149, 146, 146, 0.2)', color: '#fff',  }}
                icon={<img src={caretta} alt="Caretta" className='flex items-center justify-center p-2' />}
            >
                <h4 className="vertical-timeline-element-subtitle">CARETTA DIŞ. TİC. LTD. ŞTİ , İzmit</h4>
                <h5 className="vertical-timeline-element-title">Intern Full-Stack Developer</h5>
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