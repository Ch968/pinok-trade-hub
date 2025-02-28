import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className='g-wrapper'>
        <div className="paddings innerWidth g-container">
            <div className="flexCol inner-container">
                <span className='primarryText'>GET STARTED WITH PINOK TRADDING ACADEMY</span>
                <br/>
                <span className='secondaryText'>
                    As part of our Forex Tradding Academy, you will also have access to Tradding Tools. 
                    <br/>
                    Real-time market analysis, and ongoing support from our community of Traders.
                </span>
                <br/>
                <button className="button">
                    <a href="mailto:pinokgroup@gmail.com">GET STARTED</a>
                </button>

            </div>
        </div>
    </section>
  )
}

export default GetStarted