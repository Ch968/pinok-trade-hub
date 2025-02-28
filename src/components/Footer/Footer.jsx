import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
 <section className='f-wrapper'>   
    <div className="paddings innerWidth flexCenter f-container">

        {/* left side */}
        <div className="flexColStart f-left">
             <img src='./plogo.png' alt='' width={120} />

             <span className='secondaryText'>
                Your gateway to unparalleled expertise
                <br />
                in the world of Forex Tradding.
             </span>
        </div>
        <div className="flexColStart f-right">
            <span className='primaryText'>INFORMATION</span>
            <span className='secondaryText'>UNITED KINDOM</span>

            <div className="flexCenter f-menu">
                <span>OUR VALUE</span>
                <span>CONTACT US</span>
                <span>GET STARTED</span>
                <span>CONTACT</span>

            </div>
        </div>
    </div>
 </section>
  )
}

export default Footer