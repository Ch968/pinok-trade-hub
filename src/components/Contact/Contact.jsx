import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className=" flexColStart c-left">
          <span className='orangeText'>
            OUR CONTACTS
          </span>
          <span className='primaryText'>
            EASY TO CONTACT US
          </span>
          <span className='secondaryText'>
            WE are always ready to help by providing tne best services
            A good place to have good trading learning experinence and make your life better.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                  <MdCall size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'> CALL</span>
                    <span className='secondaryText'>+447351962554</span>
                  </div>
                </div>
                <div className="flexCenter button">CALL NOW</div>
              </div>

              {/* second mode */}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                  <BsFillChatDotsFill size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'> CHAT</span>
                    <span className='secondaryText'>+447351962554</span>
                  </div>
                </div>
                <div className="flexCenter button">CHAT NOW</div>
              </div>
              
            </div>

            {/*second row*/}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                  <BsFillChatDotsFill size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>TELEGRAM NUMBER</span>
                    <span className='secondaryText'>+447351962554</span>
                  </div>
                </div>
                <div className="flexCenter button">CHAT NOW TO JOIN</div>
              </div>

              {/* fourth mode */}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                  <HiChatBubbleBottomCenter size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'> MESSAGE</span>
                    <span className='secondaryText'>+447351962554</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  MESSAGE NOW TO JOIN
                  <a href='https://wa.me/+447351962554'></a>
                  </div>

              </div>
              
            </div>
          </div>


        </div>

        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src='./call.png' alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact