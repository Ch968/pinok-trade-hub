import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'
const Value = () => {
  return (
    <section className='v-wrapper'>
        <div className="paddings innerWidth flexCenter v-container">
            {/* left side */}
            <div className='v-left'>
                <div className="image-container">
                    <img src='./my.png' alt=''/>
                </div>
            </div>
            {/* right side */}
            <div className="flexColStart v-right">
                <span className='orangeText'>OUR VALUE</span>
                <span className='primaryText'>VALUE WE GIVE TO YOU</span>
                <span className='secondaryText'>Judah Chimaobi Emezue is prominent figure in the field of wealth creation and financial education
                    <br />
                    As the esteemed founder and CEO of PINOK GROUP.
                    <br />
                    He has been a pillar in the field of finicial and enterpreneuship,
                    <br />
                    Has been dedicated to empowering young individual by teaching them the act of wealth creation.
                    <br />
                    As a passionate mentor, He has provided invaluable guidance to aspring enterpreneuship equipping them with the neccessary tools and strategies to achieve finacial success.
                    <br />
                    His extensive exprience in the FOREX tradding industry has allowed him to develop the understanding of market trends and effective trading techniques.

                </span>

                <Accordion
                className='accordion'
                allowMultipleExpanded={false}
                preExpanded={[0]}
                >
                    
                        {data.map((item, i)=> {
                            const [className, setClassName] = useState(null)
                            return (
                                <AccordionItem
                                    className={`accordionItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>

                                            <AccordionItemState>
                                                {({expanded})=>
                                                     expanded
                                                      ? setClassName("expanded")
                                                       : setClassName("collapsed")
                                                       }
                                            </AccordionItemState>
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="primaryText">
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );
                        })}
                    
                </Accordion>
            </div>
        </div>


    </section>
  );
};

export default Value