import React from 'react';
import './Hero.css';
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from "react-countup";
import {motion}from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">

            {/* left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <motion.h1
                    initial={{y: "2rem", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}
                    >
                        PINOK <br/> 
                        FOREX <br/> 
                        ACADEMY
                    </motion.h1>    
                </div>

                <div className=" flexColStart hero-des">
                    <span className='secondaryText'>Discover finicial freedom at the heart of everything we do</span>
                    <span className='secondaryText'>Discover what wii bring to the table</span>
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25}/>
                        <input type='text' />
                        <button className="button">SEARCH</button>
                    </div>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                         <span>
                            <CountUp start={1} end={20} duration={10}/>
                            <span>+</span>
                         </span>
                         <span className='secondaryText'>MENTORSHIP CLASS</span>
                    </div>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                         <span>
                            <CountUp start={60} end={80} duration={10}/>
                            <span>+</span>
                         </span>
                         <span className='secondaryText'>ONLINE CLASS</span>
                    </div>
                </div>
            </div>
            {/* right side*/}
            <div className="flexCenter hero-right">
                <motion.div
                initial={{x: "7rem", opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                    duration: 2,
                    type: "spring"
                }}
                 className="image-container">
                    <img src="./show.png" alt="show" />
                </motion.div>    
            </div>
        </div>
    </section>
  )
}

export default Hero